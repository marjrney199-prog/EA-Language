/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === 'true';

const securityRoutes = {
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(self), microphone=(self), geolocation=()' },
      { key: 'X-Frame-Options', value: 'DENY' }
    ] }];
  },
  async rewrites() {
    return [{ source: '/backend/:path*', destination: `${process.env.API_URL || 'http://localhost:4000'}/api/:path*` }];
  }
};

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isStatic ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : securityRoutes)
};
module.exports = nextConfig;
