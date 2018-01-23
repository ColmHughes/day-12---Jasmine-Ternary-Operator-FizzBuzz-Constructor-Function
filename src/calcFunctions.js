function areaOfCircle(n) {
    if (typeof(n) == "number"){
        if (n >= 0) {
            let result = 3.1416 * (n * n);
            return Number(result.toFixed(2));
        } else {
            alert("Can't have a negative number");
        }    
    } else {
        alert("This is not a number!");
    }
}

function squareRoot(n) {
    if (typeof(n) == "number"){
        let result = Math.sqrt(n);
        return Number(result.toFixed(2));
    } else {
        alert("This is not a number!");
    }
}

function squareMe(n) {
    if (typeof(n) == "number"){
        let result = n ** 2;
        return Number(result.toFixed(2));
    } else {
        alert("This is not a number!");
    }
}

function cubeMe(n) {
    if (typeof(n) == "number"){
        let result = n ** 3;
        return Number(result.toFixed(2));
    } else {
        alert("This is not a number!");
    }
}



function areaOfTriangle(h,b) {
    if (typeof(h) == "number" && typeof(b) == "number"){
        let result = h * b * 0.5;
        return Number(result.toFixed(2));
    } else {
        alert("This is not a number!");
    }
}

function year2018(year) {
    if (typeof(year) == "number"){
        if (year < 2018){
            let result = 2018 - year;
            return result;
        } else {
            alert("2018 has passed!");
        }
    } else {
        alert("This is not a number!");
    }
}












