// Task 1: Flexible String Manipulation with Functions

// Funtion that returns last name, first name

function formatFullName(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    console.log("Invalid name input");
  }

  // Capitalizes the first character string of a given name and then combines it with the rest of the string

  let formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);

  let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  console.log(`Full name: ${formattedLastName}, ${formattedFirstName}`);
}

// Example Usage:
formatFullName("jermal", "wynder");

console.log();

// Task 2: Mathematical Operations with Multiple Parameters

// Function that calculates the total cost of items, including tax

function calculateTotalCost(price, quantity, taxRate) {
  // Checks whether values entered are numbers
  if (
    !isNaN(parseFloat(price)) &&
    !isNaN(parseFloat(quantity)) &&
    !isNaN(parseFloat(taxRate))
  ) {
    // If values entered are numbers, the totalCost is calculated
    totalCost = price * quantity * (1 + taxRate);
    console.log(`The total cost of values entered: $${totalCost}`);
  } else {
    // If values entered are not numbers, informs user of error
    console.log("Invalid input. All values entered must be numbers");
  }
}

// Example Usage:

calculateTotalCost(10, 5, 0.07);

console.log();

calculateTotalCost("skittles", 3, 10);

console.log();

// Task 3: Functions with Conditional Logic

// Function that validates if a person is eligible for a program

function checkEligibility(age, isEmployed) {
  // Eligibility is based on the following:

  // Rule 1: If the person is over 18 and employed, they are eligible
  if (age > 18 && isEmployed) {
    console.log("This person is eligible for the program");
  }

  //Rule 2: If the person is over 18 but unemployed, they are conditionally eligible
  else if (age > 18 && !isEmployed) {
    console.log(
      "This person is over 18 and not employed, so they are conditionally eligible"
    );
  }

  // Rule 3: If the person is 18 or younger, they are not eligible
  if (age < 18) {
    console.log("This person is ineligible for the program");
  }
}

// Example Usage:
checkEligibility(21, true);

console.log();

checkEligibility(24, false);

console.log();

checkEligibility(12, true);

console.log();

// Task 4: Refactoring for Reusability

// modifiedCalculateTotalCost function that takes discount parameter

// discount = 0  sets a default value for the discount parameter, ensuring it's optional.
function modifiedCalculateTotalCost(price, quantity, taxRate, discount = 0) {
  // Checks whether values entered are numbers
  if (
    !isNaN(parseFloat(price)) &&
    !isNaN(parseFloat(quantity)) &&
    !isNaN(parseFloat(taxRate)) &&
    !isNaN(parseFloat(discount))
  ) {
    // If values entered are numbers, the following are calculated:

    // Calculates the total cost of the items before any discounts or taxes
    const subTotal = price * quantity;

    // Calculates the discount amount based on discount value
    const discountAmount = subTotal * (discount / 100);

    // Calculates the discounted price by subtracting discounted price from sub total
    const discountedPrice = subTotal - discountAmount;

    // Calculates the tax amount based on the discounted price
    const taxAmount = discountedPrice * (taxRate / 100);

    // Calculates the final total cost by adding the discounted price and the tax
    const totalCost = discountedPrice + taxAmount;

    console.log(`The total cost of values entered: $${totalCost}`);
  } else {
    // If values entered are not numbers, informs user of error
    console.log("Invalid input. All values entered must be numbers");
  }
}

// Example Usage:

modifiedCalculateTotalCost(10, 5, 0.07, 25);

console.log();

modifiedCalculateTotalCost("one", 2, 3);
