// import autoCert from "anchor-pki/auto-cert/integrations/next";

// const withAutoCert = autoCert({
//   enabledEnv: "development",
// });

// const nextConfig = {};

// // export default withAutoCert(nextConfig);
// export default nextConfig;

const autoCert = await import("anchor-pki/auto-cert/integrations/next");

const nextConfig = {
  // ...
};

const withAutoCert = (config) => autoCert.default({ enabledEnv: "development" })(config);
export default withAutoCert(nextConfig);
