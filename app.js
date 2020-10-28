const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
// * Import Connection from DB
const connectDB = require("./config/db");

// * Load config
dotenv.config({ path: "./config/config.env" });

// * Passport config
require("./config/passport")(passport);

// * Call our function to connect to DB
connectDB();

const app = express();

// * Logging
if (process.env.NODE_ENV === "development") {
  // * Middleware
  app.use(morgan("dev"));
}

// * Handlebars middleware
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// * Sessions middleware
app.use(
  session({
    secret: "keyboard cat", // whatever we want
    resave: false,
    saveUninitialized: false, // Don't create a sesion until something is stored
  })
);

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// * Static folder
app.use(express.static(path.join(__dirname, "public")));

// * Routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
