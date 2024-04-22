/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // !!! for production only
  // output: "export",
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.pdf$/i,
  //     type: "asset/source",
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
