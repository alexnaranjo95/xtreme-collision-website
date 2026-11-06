import type { NextConfig } from "next";
import { clearfieldHost, clearfieldPath, utahHost } from "./src/lib/clearfield";
import { phoenixHost, phoenixPath } from "./src/lib/phoenix";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        ...([clearfieldHost, utahHost] as const).map((host) => ({
          source: "/",
          has: [{ type: "host" as const, value: host }],
          destination: clearfieldPath,
        })),
        {
          source: "/",
          has: [{ type: "host" as const, value: phoenixHost }],
          destination: phoenixPath,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
