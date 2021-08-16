const CracoLessPlugin = require('craco-less');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ED4D6E',
              '@secondary-color': '#E26D5C',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};