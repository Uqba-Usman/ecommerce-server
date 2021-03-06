var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("config");
const mongoose = require("mongoose");
var cors = require("cors");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");

var productsRouter = require("./routes/products");
var orderRouter = require("./routes/order");
var notesRouter = require("./routes/notes");
var userRouter = require("./routes/user");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

var corsOptions = {
  // origin: ["https://minicab-client.herokuapp.com/", "http://localhost:3000/"],
  origin: "*",

  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // include before other routes

app.use(busboy());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(busboyBodyParser());

app.use("/api/products", productsRouter);
app.use("/api/order", orderRouter);
app.use("/api/notes", notesRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const db = config.get("db");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
    connectionTimeout: 0,
    // rejectUnauthorized: false,
  })
  .then(() => {
    // winston.info(`Connected to ${db}...`);
    // console.clear();
    console.log(`Connected to ${db}...`);
    // testCalculation();
    startCronJobs();
  });
module.exports = app;

module.exports = app;
