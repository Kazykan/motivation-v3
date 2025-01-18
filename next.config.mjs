const autoCert = await import("anchor-pki/auto-cert/integrations/next");

const nextConfig = {
  env: {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
};

const withAutoCert = (config) => autoCert.default({ enabledEnv: "development" })(config);
export default withAutoCert(nextConfig);
