// Wait for the button click
document.getElementById("calculateBtn").addEventListener("click", function () {
  // Get user inputs
  const b1 = parseFloat(document.getElementById("base1").value);
  const b2 = parseFloat(document.getElementById("base2").value);
  const h = parseFloat(document.getElementById("height").value);
  const unit = document.getElementById("units").value;

  // Input validation
  if (isNaN(b1) || isNaN(b2) || isNaN(h) || b1 <= 0 || b2 <= 0 || h <= 0) {
    alert("Please enter valid positive numbers for b₁, b₂, and h.");
    return;
  }

  // Calculate the area of the trapezoid
  const area = 0.5 * (b1 + b2) * h;

  // Round the result to 2 decimal places
  const roundedArea = area.toFixed(2);

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `${roundedArea} ${unit}² <span class="checkmark">✔</span>`;

  // Clear input fields after calculation
  document.getElementById("base1").value = "";
  document.getElementById("base2").value = "";
  document.getElementById("height").value = "";
});
