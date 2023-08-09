/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // !!! for production only
  output: "export",
};

module.exports = nextConfig;
