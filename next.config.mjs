import path from 'path';

export default {
  webpack(config, { isServer }) {
    config.resolve.alias['@'] = path.resolve('src');

    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
  },
};
