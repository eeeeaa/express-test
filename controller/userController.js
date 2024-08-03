const userModel = require("../model/user");
const asyncHandler = require("express-async-handler");
const { CustomNotFoundError } = require("../utils/customError");

exports.getUsers = async (req, res) => {
  const user = await userModel.getUsers();
  res.json(user);
};

exports.createUser = async (req, res) => {
  //TODO
};

// express-async-handler
// Any errors that is thrown in this function will
// automatically be caught and call the `next` function
// all will be handled by the error middleware function
exports.getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const user = await userModel.queryUser(userId);

  if (!user) {
    throw new CustomNotFoundError("User not found");
  }

  res.json(user);
});

/* 
//without the express-async-handler package
//need to handle error ourselves

exports.getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.queryUser(userId);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.send(`User found: ${user.name}`);
  } catch (error) {
    //handle error
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");

    // or we can call next(error) instead of sending a response here
    // Using `next(error)` however will only render an error page in the express' default view 
    // and respond with the whole html to the client.
    // So we will need to create a special type of middleware function if we want a different response 
    // and we will get to that in a bit.
  }
};
*/
