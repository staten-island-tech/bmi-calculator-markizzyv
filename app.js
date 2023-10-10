
function BMI (){
    let x = (weight / ((height * height)/10000)) 
    console.log (weight / ((height * height)/10000))

    if ( x <= "18.5") {
        console.log("You are underweight.");

    } else if ( x > "18.5"  && x  <= "24.9") {
         console.log("You are healthy weight.");

    } else if ( x >= "25" && x <= "29.9") {
        console.log("You are unhealthy weight.");
    } else if ( x >= "30") {
        console.log("You are obese weight.")
    }

}


//need to convert the String to a Number 
let height = Number(prompt("Your Height (Centimeters)"));
let weight = Number(prompt("Your Weight (Kilograms)"));
let name = (prompt("Your Name"));


BMI(height)
BMI(weight)



 
