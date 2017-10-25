module.exports = {
  entry: __dirname + "/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  devtool: "source-map"
}
