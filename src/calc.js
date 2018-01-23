let Calculator = function() {
    this.value = 0;
    this.history = 0;
    
    
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
}

Calculator.prototype.sub = function(number) {
    if (typeof(number) == "number") {
        if (this.value == 0 && this.history == 0) {
            this.value = number;
        } else {
            this.value -= number;
        }
        this.history ++;
    } else {
        alert("Argument must be a number");
    }
}

Calculator.prototype.mult = function(number) {
     if (typeof(number) == "number") {
        if (this.value == 0 && this.history == 0) {
            this.value = 1 * number;
        } else {
            this.value *= number;
        }
     } else {
         alert("Argument must be a number");
     }
}

Calculator.prototype.div = function(number) {
     if (typeof(number) == "number") {
        if (number == 0) {
            alert("Can't divide by zero")
        } else if (this.value == 0 && this.history == 0) {
            this.value = number;
        } else {
            this.value /= number;
        }
        this.history ++;
    } else {
        alert("Argument must be a number");
    }
}







// function addition(number1, number2) {
//     let result;
//     if(typeof(number1) != "number" || typeof(number2) != "number") {
//         result = "Error!";
//         alert("Arguments must both be a number!")
//     } else {
//         result = number1 + number2;
//     }
//     return result;
// }