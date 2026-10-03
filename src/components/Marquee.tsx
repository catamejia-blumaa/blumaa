import { cn } from "@/lib/utils";

/**
 * Ticker strip (Tuesday Co "BOOKING NOW ・ BOOKING NOW" band, in Blumaa type).
 * The track holds two identical halves and slides -50%, so the loop is seamless.
 * Decorative: hidden from assistive tech, frozen for reduced-motion users.
 */
const Marquee = ({
  items,
  separator = "・",
  className,
  speed = 40,
}: {
  items: string[];
  separator?: string;
  className?: string;
  speed?: number;
}) => {
  const half = Array.from({ length: 6 }).flatMap(() => items);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)} aria-hidden="true">
      <div
        className="inline-flex animate-marquee motion-reduce:animate-none"
        style={{ animationDuration: `${speed}s` }}
      >
        {[0, 1].map((k) => (
          <div key={k} className="inline-flex shrink-0">
            {half.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span>{item}</span>
                <span className="px-[0.9em]">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
