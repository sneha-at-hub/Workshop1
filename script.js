// Add an event listener to the rate 
//input that triggers the updateRate function when the input value changes
document.getElementById("rate").addEventListener("input", updateRate);

// defining a function named updateRate
// to update the displayed interest rate when the range input changes
function updateRate() {
  // Getting the current value of the range input for the interest rate
  var rateval = document.getElementById("rate").value;
  // Updating the text content of the rate_val span to reflect the selected interest rate
  document.getElementById("rate_val").textContent = rateval;
}

// Function to compute and display the interest and total amount
function compute() {
  // Getting the principal amount, interest rate, and number of years from the input elements
  var principal = parseInt(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseInt(document.getElementById("years").value);
  
  // Calculate the interest and total amount
  var interest = (principal * rate * years) / 100;
  var amount = interest + principal;
  
  // Getting the result element to display the result
  var result = document.getElementById("result");
  
  // Checking if the principal amount is less than or equal to zero
  if (principal <= 0) {
    // Display an alert asking the user to enter a positive number
    alert("Enter a positive number");
    // Setting focus back to the principal input field
    document.getElementById("principal").focus();
  } else {
    // Getting the current year
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    // Calculate the future year
    var futureYear = currentYear + years;
  
    // Constructing the result text using template literals
    var resultitem = `If you deposit <mark>$${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>,<br>
    the total interest earned will be <mark>$${interest}</mark>.<br>
    You will receive an amount of <mark>$${amount}</mark>.<br>
    The current year is <mark>${currentYear}</mark>,<br>
    and in ${years} years, it will be <mark>${futureYear}</mark>.`;
  
    // Setting the innerHTML of the result element to display the result text
    result.innerHTML = resultitem;
  }
}
