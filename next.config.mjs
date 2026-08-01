/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This project lives inside a larger repo that has other lockfiles.
  // Pin the tracing root to this app so builds don't pick a parent directory.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
