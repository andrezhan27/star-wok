import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  agentRules: false,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
