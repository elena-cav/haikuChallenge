class ErrorHandler {
  verify(input) {
    if (typeof input !== "string") {
      throw new Error("Input must be a string");
    }
    if (input.length === 0) {
      throw new Error("Input must not be a blank string");
    }
    const slashes = input.match(/\//gm) || [];
    if (input.length === 0) {
      throw new Error("Input must not be a blank string");
    }
    if (slashes.length !== 2) {
      throw new Error("Input must contain 3 lines separated by slashes");
    }
  }
}

export default ErrorHandler;
