import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/* tailwind-merge must know the custom font sizes from tailwind.config.ts,
   otherwise `text-script-lg text-orange` is read as two colours and the size is dropped. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "h1", "h2", "h3", "h4", "p1", "p2", "p3",
            "h1-mob", "h2-mob", "h3-mob",
            "display", "statement", "headline", "row",
            "script-xl", "script-lg", "script-md",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
