
module.exports = {
  root: true,
  modules: {
      "bem-tools": {
          plugins: {
              create: {
                  techs: ["html", "scss", "js"],
                  levels: {
                      "src/blocks/modules/common": {
                          default: true
                      },
                  }
              }
          }
      }
  }
};