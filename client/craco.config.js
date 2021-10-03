const CracoLessPlugin = require('craco-less');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#40916c',
              '@secondary-color': '#E26D5C',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};