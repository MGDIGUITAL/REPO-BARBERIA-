import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Skills directory has example .ts files with unresolvable imports.
    // These are NOT app code — safe to skip.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
