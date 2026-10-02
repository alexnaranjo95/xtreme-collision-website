import type { NextConfig } from "next";
import { clearfieldHost, clearfieldPath, utahHost } from "./src/lib/clearfield";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [clearfieldHost, utahHost].map((host) => ({
        source: "/",
        has: [{ type: "host" as const, value: host }],
        destination: clearfieldPath,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
