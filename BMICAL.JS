// THIS IS A SIMPLE BMI CALCULATOR
function bmi_cal(weight,height){
    var bmi1 = weight/(height)^2;
    var bmi = bmi1.toFixed(2);

    if (bmi < 18.5) { //nderweight
        console.log('your BMI is '+ bmi + ',you are underweight')
    } 
    else if (bmi >= 18.5 && bmi < 25.0) { // normal weight
        console.log('your bmi is '+ bmi + 'you are normal weight')
    }
    else (bmi >=25.0 && bmi <30) {//overweight
        console.log('your bmi is '+ bmi + 'you are over weight')
    } 

}
