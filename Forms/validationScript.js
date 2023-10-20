   // JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field element
const inputField = document.getElementById('inputField');

// Add an event listener to the form for the "submit" event
document.getElementById('myForm').addEventListener('submit', function (event) {
  // Retrieve the input value
  const inputValue = inputField.value;

  // Regular expression pattern for alphanumeric input (letters and numbers only)
  const alphanumericPattern = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (!alphanumericPattern.test(inputValue)) {
    // Invalid input: display error message and prevent form submission
    alert('Error: Input must be alphanumeric (letters and numbers only)');
    event.preventDefault(); // Prevent the form from submitting
  } else {
    // Valid input: display confirmation
    alert('Input is valid!');
  }
});