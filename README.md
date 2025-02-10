# BMI Calculator

This project is a simple Body Mass Index (BMI) calculator that calculates the BMI based on user input for weight and height, and categorizes the result into different ranges (Underweight, Normal weight, Overweight, and Obese).

## Features

- Allows users to input their weight (in kilograms) and height (in centimeters).
- Calculates BMI using the formula:

  - (weight / ((height \* height) / 10000)).toFixed(2);

  - (Height is converted from centimeters to meters squared).

- Categorizes the result as Underweight, Normal weight, Overweight, or Obese based on the calculated BMI.
- Displays the result and corresponding advice on maintaining a healthy lifestyle.

## BMI Categories

- Underweight: BMI less than 18.5
- Normal weight: BMI between 18.5 and 24.9
- Overweight: BMI between 25 and 29.9
- Obese: BMI 30 or higher

## Installation

- Clone the repository:

git clone https://github.com/yourusername/bmi-calculator.git

- Open the project folder in your code editor.

- Open index.html in your web browser.

## Usage

- Enter your weight (in kg) and height (in cm) in the respective input fields.
- Click the Calculate BMI button.
- The BMI value will be displayed along with a message indicating your BMI category and advice for maintaining a healthy lifestyle.

### Example Output

1. Input:
   - Weight: 70 kg
   - Height: 175 cm
2. Output:
   - Your BMI is 22.86
   - Your BMI falls within the Normal weight category. Keep up the good work and continue maintaining a healthy lifestyle!

## Technologies Used

- HTML: For creating the structure of the page.
- CSS: For styling and making the layout visually appealing.
- JavaScript: For calculating BMI, validating input, and displaying results dynamically.

## Contributing

Feel free to fork the project and submit pull requests. Contributions are always welcome!
