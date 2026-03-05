function bmiCalc(w,h){
    var bmi = Math.round(w / (h * h));
   
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight";
    } 
    else if (bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight";
    } 
    else {
        return "Your BMI is " + bmi + ", so you are overweight";
    }
}
let w = Number(prompt("Enter your weight (kg):"));
let h = Number(prompt("Enter your height (m):"));
var result = bmiCalc(w,h);
alert(result);
