import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section aria-label="Xtreme Collision by the numbers" className="bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-4 py-2 text-center"
          >
            <span className="font-heading text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-medium leading-snug text-primary-foreground/80">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
