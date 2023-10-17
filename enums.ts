// Number values example
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  BadRequest = 400
}

// Use Case: Checking if error object outputs correct status code for bad request:

// pretend this is what we get from backend with error
let error = {
  message: "bad request",
  status: 400
}

// here we check it is putting out the correct status code
let err: StatusCodes.BadRequest = error.status;






// String values as example
enum CardSuits {
  Clubs = "Clubs",
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Spades = "Spades"
}