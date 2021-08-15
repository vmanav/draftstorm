const CracoLessPlugin = require('craco-less');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#E76F51',
              '@myDash-color': '#FFFF00'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};