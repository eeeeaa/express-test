const express = require("express");
const app = express();

const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);

// Every thrown error in the application or the previous middleware function calling `next`
// with an error as an argument will eventually go to this middleware function
// middleware function with four param -> considered as error middleware function
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode`
  //that exists in our custom error class and
  //if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
