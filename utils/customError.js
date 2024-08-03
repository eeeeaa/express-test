//use custom error instead of default error class
//so that the error middleware can throw status other than 500

class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    //send status code as well
    this.statusCode = 404;
    // So the error is neat when stringified.
    //NotFoundError: message instead of Error: message
    this.name = "NotFoundError";
  }
}

module.exports = {
  CustomNotFoundError,
};
