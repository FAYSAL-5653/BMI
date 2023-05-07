const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  
  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = weight / (height * height);
    resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  } else {
    resultDiv.innerHTML = "Please enter valid weight and height values.";
  }
});
