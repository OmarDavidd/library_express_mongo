const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/mongodb");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const libraryRoutes = require("./routes/library");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.use(methodOverride("_method"));

connectDB();
// set
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.use("/biblioteca", libraryRoutes);

// Server
app.listen(port, () => {
  console.log(`servidor en: http://localhost:${port}`);
});
