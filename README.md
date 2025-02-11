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

## Future Enhancements

- Here are some additional features that can be added to improve the BMI Calculator:

   1️. Improved UI & UX
   - **Responsive Design:** Make the layout mobile-friendly.
   - **Theme Customization:** Add a Dark Mode toggle.
   - **Animated Results:** Use animations to display BMI results.
   - **Better Styling:** Add background colors and modern UI elements.

   2️. New Functionalities
   - **Clear Input Button:** To reset the input fields and results.
   - **Store Last BMI Calculation:** Using localStorage so users can view past calculations.
   - **BMI History Tracker:** Maintain a log of past BMI calculations with timestamps.
   - **Ideal Weight Range Calculator:** Suggest the ideal weight based on height.
   - **Daily Calorie Recommendation:** Show how many calories should be consumed based on BMI.

   3️. Advanced Features
   - **Multilingual Support:** Allow users to choose a language.
   - **Voice Input Support:** Let users input height and weight using voice commands.
   - **Health Tips Section:** Provide diet and exercise suggestions based on BMI category.
   - **Share Feature:** Add a button to share BMI results via social media or copy to clipboard.

## Contributing

Feel free to fork the project and submit pull requests. Contributions are always welcome!
