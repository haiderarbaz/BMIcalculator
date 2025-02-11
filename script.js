const form = document.querySelector("form");

//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Show the BMI result
    results.innerHTML = `<span>${bmi}</span>`;

    // Create a message container for the advice
    let message = "";

    if (bmi < 18.5) {
      message = `<p>Your BMI falls under the Underweight category. It's important to maintain a balanced diet and consult a healthcare professional if needed.</p>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = `<p>Your BMI falls within the Normal weight category. Keep up the good work and continue maintaining a healthy lifestyle!</p>`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = `<p>Your BMI falls under the Overweight category. Consider adopting healthier eating habits and an active lifestyle for better health.</p>`;
    } else {
      message = `<p>Your BMI falls under the Obese category. It may be beneficial to seek advice from a healthcare professional for personalized guidance.</p>`;
    }

    // Append the message below the BMI result
    results.innerHTML += message;
  }
});
