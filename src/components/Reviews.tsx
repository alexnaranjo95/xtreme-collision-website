import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { reviews, socialProof } from "@/lib/site";

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {socialProof.google.rating}★ · {socialProof.google.reviewCount}+ Google Reviews
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl"
          >
            North Texas Trusts Xtreme Collision
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real customer feedback from Google, Yelp, and Facebook — not
            marketing copy.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={socialProof.google.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Google {socialProof.google.rating}★ ({socialProof.google.reviewCount})
          </a>
          <a
            href={socialProof.yelp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Yelp {socialProof.yelp.rating}★ ({socialProof.yelp.reviewCount})
          </a>
          <a
            href={socialProof.facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Facebook {socialProof.facebook.rating} recommend
          </a>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/images/xtreme-collision-repairs.png"
              alt="Xtreme Collision Google reviews profile shown on a phone"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((review) => (
              <figure
                key={`${review.author}-${review.source}`}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-1" aria-label={`${review.rating} stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <Quote className="mb-3 h-6 w-6 text-accent" aria-hidden="true" />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span>
                    <span className="block font-semibold text-primary">
                      {review.author}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      Verified {review.source} review
                    </span>
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {review.source}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={socialProof.google.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Read all {socialProof.google.reviewCount}+ Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
