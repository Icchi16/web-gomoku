/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
};

export default nextConfig;
