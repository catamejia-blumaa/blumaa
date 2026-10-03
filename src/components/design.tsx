import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   Blumaa editorial primitives
   Shared building blocks for the redesigned pages. They encode the
   Design System rules so pages can't drift:
   · pill buttons only · cards 8px · no shadows · Crema instead of white
   · Roboto Mono labels always UPPERCASE · handwritten script as accent only
   ───────────────────────────────────────────────────────────── */

/** Roboto Mono label — always UPPERCASE + spaced */
export const Eyebrow = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("font-mono font-medium text-xs uppercase tracking-[0.3em]", className)}>{children}</p>
);

/** Handwritten script accent (Loved by the King) — as-is, never CAPS, never body text */
export const Script = ({
  children,
  className,
  as: Tag = "span",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
} & Pick<React.HTMLAttributes<HTMLElement>, "aria-hidden" | "style">) => (
  <Tag className={cn("font-script normal-case select-none", className)} {...rest}>
    {children}
  </Tag>
);

/** Renders text with "\n" as line breaks */
export const Multiline = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

/**
 * Entrance on scroll — Tuesday Co's `fadeIn`, 0.5s. Pass `y={40}` for the `slideInUp` variant used on photos.
 * Renders static content when the user prefers reduced motion.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ── Buttons ─────────────────────────────────────────────── */

type CtaVariant = "primary" | "dark" | "secondary" | "ghost";

const ctaVariants: Record<CtaVariant, string> = {
  /* Butter + Blue — main CTA on Blue sections */
  primary: "bg-butter text-blue hover:bg-orange hover:text-blue",
  /* Blue + Crema — on light sections */
  dark: "bg-blue text-crema hover:bg-orange hover:text-blue",
  /* Crema + Blue with 1.5px Blue border */
  secondary: "bg-crema text-blue border-[1.5px] border-blue hover:bg-butter",
  /* Outline on Blue sections */
  ghost: "bg-transparent text-crema border-[1.5px] border-crema hover:bg-crema/10",
};

type CtaLinkProps = {
  children: React.ReactNode;
  variant?: CtaVariant;
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
} & ({ to: string; href?: never } | { href: string; to?: never });

export const CtaLink = ({ children, variant = "dark", size = "md", arrow = true, className, ...target }: CtaLinkProps) => {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-pill font-sans font-medium text-sm",
    "transition-all duration-200 ease-in-out hover:-translate-y-px",
    size === "lg" ? "h-14 px-10" : "h-12 px-8",
    ctaVariants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );
  return "to" in target && target.to ? (
    <Link to={target.to} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={target.href} className={classes}>
      {content}
    </a>
  );
};

/* ── Photo frame ─────────────────────────────────────────── */

/**
 * Crema photo frame. No shadow (DS). Pass `ring` on Butter sections so Crema never melts into the bg.
 * Slides up into place when it enters the screen (Tuesday Co `slideInUp`, 0.5s).
 */
export const Polaroid = ({
  src,
  alt,
  className,
  rotate = 0,
  aspect,
  objectPosition,
  ring = false,
  caption,
  priority = false,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
  aspect?: string;
  objectPosition?: string;
  ring?: boolean;
  caption?: React.ReactNode;
  priority?: boolean;
  delay?: number;
}) => {
  const reduce = useReducedMotion();
  const classes = cn("bg-crema p-2 md:p-3 rounded-lg", ring && "ring-[1.5px] ring-blue", className);
  const content = (
    <>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block w-full h-full object-cover rounded-[4px]"
        style={{ aspectRatio: aspect, objectPosition }}
      />
      {caption && (
        <figcaption className="mt-2 text-center font-script text-blue text-lg md:text-xl leading-tight">{caption}</figcaption>
      )}
    </>
  );

  if (reduce) {
    return (
      <figure className={classes} style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}>
        {content}
      </figure>
    );
  }
  /* `rotate` lives in the animation target so framer composes it with the slide */
  return (
    <motion.figure
      className={classes}
      initial={{ opacity: 0, y: 40, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.figure>
  );
};

/* ── Star bullet ─────────────────────────────────────────── */

/** The real Blumaa star (never recreated with a glyph) */
export const StarBullet = ({ tone = "blue", className }: { tone?: "blue" | "crema"; className?: string }) => (
  <img
    src={tone === "blue" ? "/Favicon_blue.png" : "/Favicon_Crema.png"}
    alt=""
    aria-hidden="true"
    className={cn("w-6 h-6 flex-shrink-0", className)}
  />
);
