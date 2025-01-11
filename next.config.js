module.exports = {
  images: {
    domains: ['leonardo-cdn.b-cdn.net'], // اضافه کردن دامنه تصویر
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // جلوگیری از وارد کردن fs در مرورگر
      };
    }
    return config;
  },
};
