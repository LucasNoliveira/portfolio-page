import path from 'path';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';

export default {
  webpack(config, { isServer }) {
    config.resolve.alias['@'] = path.resolve('src');

    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
  plugins: [new MiniCssExtractPlugin()],

  // Comentando ou removendo a configuração de i18n para desativar rotas baseadas em idiomas
  // i18n: {
  //   locales: ['en', 'pt', 'es'],
  //   defaultLocale: 'en',
  // },
};
