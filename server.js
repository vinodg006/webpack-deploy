const express = require("express");
const path = require("path");

const app = express();

// define all routes before webpack
app.get("/hii", (req, res) => res.send({ hii: "there" }));

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpackConfig = require("./webpack.config");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
}

app.listen(process.env.PORT || 3050, () => console.log("listening"));
