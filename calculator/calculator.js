window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 const defaultValues = {amount: 20000, years: 10, rate: 3.5};
 const amountUI = document.getElementById("loan-amount");
 const yearsUI = document.getElementById("loan-years");
 const rateUI = document.getElementById("loan-rate");

 amountUI.value = defaultValues.amount;
 yearsUI.value = defaultValues.years;
 rateUI.value = defaultValues.rate;

 update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {

  let currentValues = getCurrentUIValues();

  let monthlyPayments = calculateMonthlyPayment(currentValues);

  updateMonthly(monthlyPayments);


}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal = values.amount;
  let monthlyRate = (values.rate/100) /12;
  let totalNumPay = Math.floor(values.years * 12);

  let topExp = principal * monthlyRate;
  let btmExp = 1 - (1 + monthlyRate) ** -totalNumPay;

  let monthlyPayment = (topExp / btmExp).toFixed(2);

  return (`${monthlyPayment}`);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUIPay = document.getElementById("monthly-payment");

  monthlyUIPay.innerText = "$" + monthly;
}
