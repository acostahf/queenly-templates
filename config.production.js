/*
|-------------------------------------------------------------------------------
| Production config           https://maizzle.com/docs/environments/#production
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  build: {
    templates: {
      destination: {
        path: "build_production",
      },
      assets: {
        source: "src/assets/images",
        destination: "images", // assets output to build_basic/images
      },
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
};
