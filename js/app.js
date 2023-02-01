// import * as nav from './navbar.js'

// const navvar = nav.elementNav()
// navvar


function bmi(height, weight){
    const inputHeight = parseInt(document.getElementById(height).value) //ตัวแปรรับค่าจาก input bmi.html ผ่าน id
    const inputWeight = parseInt(document.getElementById(weight).value)
    const bmiValue = inputWeight/( Math.pow((inputHeight/100) , 2) )
    let criterion = ''
    console.log(bmiValue)
    if(bmiValue <= 18.5){
        console.log(bmiValue)
        criterion = "Underweight!"
    }
    else if(bmiValue <= 25){
        console.log(bmiValue)
        criterion = "Normal"
    }
    else if(bmiValue <= 30){
        console.log(bmiValue)
        criterion = "Overweight!"
    }
 
    document.getElementById("output").innerHTML = "Healthy BMI : " + bmiValue.toFixed(2) + "<br>You are " + criterion
}