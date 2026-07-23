import { Star } from "lucide-react";
import { socialProof } from "@/lib/site";

const platforms = [
  socialProof.google,
  socialProof.yelp,
  socialProof.facebook,
] as const;

export function SocialProofBar() {
  return (
    <section
      aria-label="Customer ratings across review platforms"
      className="border-y border-border bg-secondary"
    >
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:gap-6">
        {platforms.map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-background"
          >
            <span className="inline-flex items-center gap-1 text-accent">
              {platform.label === "Facebook recommend" ? null : (
                <Star className="h-4 w-4 fill-accent" aria-hidden="true" />
              )}
              <span className="font-heading text-2xl font-bold text-primary">
                {platform.rating}
              </span>
            </span>
            <span className="text-left text-sm leading-tight">
              <span className="block font-semibold text-primary group-hover:text-accent">
                {platform.label}
              </span>
              <span className="block text-muted-foreground">
                {platform.reviewCount}+ reviews
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
