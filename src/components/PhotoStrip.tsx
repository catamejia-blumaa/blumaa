import { cn } from "@/lib/utils";

/**
 * Slow-moving strip of photos — Tuesday Co's gallery band (their drift takes ~90s).
 * Two identical halves slide -50%, so the loop is seamless; each photo carries its own
 * trailing margin (not a flex gap) so both halves have exactly the same width.
 * Decorative: hidden from assistive tech; reduced-motion users get a static, scrollable row.
 */
const PhotoStrip = ({ photos, className, speed = 90 }: { photos: string[]; className?: string; speed?: number }) => (
  <div className={cn("overflow-hidden motion-reduce:overflow-x-auto", className)} aria-hidden="true">
    <div
      className="flex w-max animate-marquee motion-reduce:animate-none"
      style={{ animationDuration: `${speed}s` }}
    >
      {[0, 1].map((half) => (
        <div key={half} className="flex shrink-0">
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="mr-4 h-[260px] w-auto flex-shrink-0 rounded-lg object-cover md:mr-6 md:h-[360px]"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default PhotoStrip;
