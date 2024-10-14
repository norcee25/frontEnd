let john = {
    firstName: "Samuel",
    weight: 55,
    height: 1.65,
    calculateBMI: function() { 
        const bmi = this.weight / (this.height * this.height);
        this.BMI = bmi;

        if (bmi < 16.0) {
            this.category = "Severely Underweight";
        } else if (bmi >= 16.0 && bmi < 18.4) {
            this.category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            this.category = "Normal";
        } else if (bmi >= 25.0 && bmi < 29.9) {
            this.category = "Overweight";
        } else if (bmi >= 30.0 && bmi < 34.9) {
            this.category = "Moderately Obese";
        } else if (bmi >= 35.0 && bmi < 39.9) {
            this.category = "Severely Obese";
        } else {
            this.category = "Morbidly Obese";
        }
        
        return this.BMI;
    }
};

const bmiResult = john.calculateBMI();
console.log("Name: " + john.firstName);
console.log("Weight: " + john.weight + " kg");
console.log("Height: " + john.height + " m");
console.log("BMI: " + john.BMI.toFixed(2));
console.log("Category: " + john.category);
