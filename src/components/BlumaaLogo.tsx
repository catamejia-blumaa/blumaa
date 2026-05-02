type Variant = "blue-star-pink" | "crema-star-pink" | "crema-star-butter" | "night-star-pink";

type Props = {
  className?: string;
  variant?: Variant;
  height?: number;
};

/**
 * Blumaa logo with the star always rendered in the brand accent color.
 * Since the source PNG is a single-color blue asset, we use CSS filters to
 * remap the blue to the desired text color, then overdraw the star in pink.
 *
 * Variants:
 *   blue-star-pink  — Blue text, Pink star  (on light/crema/butter backgrounds)
 *   crema-star-pink — Crema text, Pink star  (on Blue backgrounds)
 *   crema-star-butter — Crema text, Butter star (on Blue backgrounds, alt)
 *   night-star-pink — Night text, Pink star  (rare, on very light sections)
 *
 * Star position is derived from the original 930×300 asset.
 * Center: (840, 58), outer radius 52, inner radius 20, 6 points.
 */
const BlumaaLogo = ({ className = "", variant = "blue-star-pink", height = 40 }: Props) => {
  const config: Record<Variant, { imgFilter: string; starColor: string; bgCover: string }> = {
    "blue-star-pink": {
      // Original blue PNG — no filter needed for text, cover star area + redraw
      imgFilter: "none",
      starColor: "#FF62A1",
      bgCover: "#FFF7EE", // Crema — covers original blue star
    },
    "crema-star-pink": {
      // Invert + shift hue to make blue → crema/white
      imgFilter: "brightness(0) saturate(100%) invert(96%) sepia(9%) saturate(500%) hue-rotate(324deg) brightness(106%) contrast(98%)",
      starColor: "#FF62A1",
      bgCover: "#2642FF", // Blue — covers original (now-crema) star
    },
    "crema-star-butter": {
      imgFilter: "brightness(0) saturate(100%) invert(96%) sepia(9%) saturate(500%) hue-rotate(324deg) brightness(106%) contrast(98%)",
      starColor: "#FFF3C4",
      bgCover: "#2642FF",
    },
    "night-star-pink": {
      imgFilter: "brightness(0)",
      starColor: "#FF62A1",
      bgCover: "#231F20",
    },
  };

  const { imgFilter, starColor, bgCover } = config[variant];

  // 6-point organic star at (840, 58) — matches original asset proportions
  const cx = 840;
  const cy = 58;
  const outerR = 50;
  const innerR = 20;
  const pts = 6;
  // Slight rotation offsets to match the organic/tilted star in the brand asset
  const starPoints = Array.from({ length: pts * 2 }, (_, i) => {
    const angle = (Math.PI / pts) * i - Math.PI / 2 + 0.15; // slight tilt
    const r = i % 2 === 0 ? outerR : innerR;
    return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 930 300"
      height={height}
      aria-label="Blumaa"
      className={className}
      style={{ display: "block", overflow: "visible" }}
    >
      {/* Full PNG with color filter applied */}
      <image
        href="/Asset_6@4x.png"
        x="0"
        y="0"
        width="930"
        height="300"
        style={{ filter: imgFilter }}
      />
      {/* Mask the original star by painting over it with background color */}
      <ellipse cx={cx} cy={cy} rx={58} ry={58} fill={bgCover} />
      {/* Redraw star in accent color */}
      <polygon points={starPoints} fill={starColor} />
    </svg>
  );
};

export default BlumaaLogo;
