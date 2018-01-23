function whatCanIDrink(age) {
    if (age < 0){
        return "Sorry. I can't tell what drink because that age is incorrect!";
    } else if (age < 14) {
        return "Drink Toddy";
    } else if (age < 18) {
        return "Drink Coke";
    } else if (age < 21) {
        return "Drink Beer";
    } else if (age < 130) {
        return "Drink Whiskey"
    } else {
        return "Sorry, age incorrect"
    }
}





// function fizzBuzz(num) {
//     if (typeof(num) == "number") {
//         if (num % 3 == 0 && num % 5 == 0) {
//             return "FizzBuzz"; 
//         } else if (num % 3 == 0 && num % 7 == 0) {
//             return "FizzPop";  
//         } else if (num % 5 == 0 && num % 7 == 0) {
//             return "BuzzPop";     
//         } else if (num % 3 == 0){
//             return "Fizz";
//         } else if (num % 5 == 0) {
//             return "Buzz";
//         } else if (num % 7 == 0) {
//             return "Pop";  
//         } else {
//             return num;
//         }
//     } else {
//         alert("Not a number!")
//     }
// }

   

//   function fizzBuzz(num) {
//         (num % 3 == 0 && num % 5 == 0)? console.log("FizzBuzz"):
//         (num % 3 == 0)? console.log("Fizz"):
//         (num % 5 == 0)? console.log("Buzz"):
//          console.log(num);
//   }


function fizzBuzz(i){
    let f = i % 3 == 0, b = i % 5 == 0;
    return f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i;
}

