const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes/index.route");
const app = express();
const port = 5000;
app.use(morgan("combined"));
// template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.set("views", path.join(__dirname, "resources/view"));

// routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
