const path = require("path");
const WebpackUserscript = require("webpack-userscript");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "GDQ_Calendar_Links.user.js",
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: "GamesDoneQuickCalendarLinks",
        version: `[version]`,
        match: "https://gamesdonequick.com/schedule",
        author: "Dave Palay (lordthanda@gmail.com)",
        "run-at": "document-end"
      },
      renameExt: true,
      pretty: true,
    }),
  ],
};
