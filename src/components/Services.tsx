"use client";

import { useId, useState } from "react";
import {
  Boxes,
  Cable,
  Car,
  CloudHail,
  Cog,
  Disc3,
  Droplets,
  FileCheckCorner,
  Frame,
  Gauge,
  Palette,
  Ruler,
  Settings2,
  ShieldAlert,
  Snowflake,
  SprayCan,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { mechanicalRepairPath, mechanicalServices, services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  "cloud-hail": CloudHail,
  "spray-can": SprayCan,
  "file-check": FileCheckCorner,
  frame: Frame,
  boxes: Boxes,
  "shield-alert": ShieldAlert,
  ruler: Ruler,
  cable: Cable,
  cog: Cog,
  car: Car,
  palette: Palette,
  gauge: Gauge,
  settings: Settings2,
  disc: Disc3,
  droplets: Droplets,
  thermometer: Thermometer,
  snowflake: Snowflake,
};

const tabs = [
  {
    id: "collision" as const,
    label: "Collision Repair",
    description: "Body, frame, paint, and insurance claim support.",
    items: services,
  },
  {
    id: "mechanical" as const,
    label: "Mechanical Repair",
    description: "Engine, transmission, brakes, and shop maintenance.",
    items: mechanicalServices,
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>(
    "collision",
  );
  const baseId = useId();
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Collision &amp; Mechanical Repair
          </h2>
          <p className="mt-3 text-muted-foreground">
            Full-service auto care in one shop — from accident damage to
            under-the-hood repairs.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Service categories"
          className="mx-auto mb-10 flex max-w-xl rounded-xl border border-border bg-secondary p-1"
        >
          {tabs.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-${tab.id}-tab`}
                aria-controls={`${baseId}-${tab.id}-panel`}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-lg px-4 py-3 text-center transition-colors ${
                  selected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="block font-heading text-sm font-semibold uppercase tracking-wide sm:text-base">
                  {tab.label}
                </span>
                <span
                  className={`mt-0.5 block text-xs normal-case tracking-normal ${
                    selected
                      ? "text-primary-foreground/75"
                      : "text-muted-foreground"
                  }`}
                >
                  {tab.description}
                </span>
              </button>
            );
          })}
        </div>

        {tabs.map((tab) => {
          const selected = tab.id === activeTab;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`${baseId}-${tab.id}-panel`}
              aria-labelledby={`${baseId}-${tab.id}-tab`}
              hidden={!selected}
            >
              {selected ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {tab.items.map((service) => {
                    const Icon = icons[service.icon];
                    return (
                      <div
                        key={service.title}
                        className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                      >
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                          {Icon ? (
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          ) : null}
                        </div>
                        <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {activeTab === "mechanical" ? (
            <>
              Running mechanical ads? Use the dedicated landing page:{" "}
              <a
                href={mechanicalRepairPath}
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                Mechanical Repair
              </a>
              .
            </>
          ) : (
            <>
              Looking at {active.label.toLowerCase()}?{" "}
              <a
                href="#estimate"
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                Request a free estimate
              </a>
              .
            </>
          )}
        </p>
      </div>
    </section>
  );
}
