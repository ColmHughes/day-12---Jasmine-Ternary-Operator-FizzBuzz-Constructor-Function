describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("If number is not supplied return alert message", function() {
            spyOn(window, "alert");
            areaOfCircle("word");
            expect(window.alert).toHaveBeenCalledWith("This is not a number!");
        });
        it("should return error for a circle with negative radius", function() {
            spyOn(window, "alert");
            areaOfCircle(-10);
            expect(window.alert).toHaveBeenCalledWith("Can't have a negative number");
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
         it("If number is not supplied return alert message", function() {
            spyOn(window, "alert");
            squareRoot("word");
            expect(window.alert).toHaveBeenCalledWith("This is not a number!");
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return 16 as the square of 4", function() {
            expect(squareMe(4)).toBe(16);
        });
        it("If number is not supplied return alert message", function() {
            spyOn(window, "alert");
            squareMe("word");
            expect(window.alert).toHaveBeenCalledWith("This is not a number!");
        });
    });
    
    
    describe("Cube function", function() { 
        it("should return 27 as the square of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
        it("If number is not supplied return alert message", function() {
            spyOn(window, "alert");
            cubeMe("word");
            expect(window.alert).toHaveBeenCalledWith("This is not a number!");
        });
    });
    
    describe("Area of triangle", function() {
        it("should return 50 if the base is 10 and height is 10", function() {
            expect(areaOfTriangle(10,10)).toBe(50);
        });
        it("If number is not supplied return alert message", function() {
            spyOn(window, "alert");
            areaOfTriangle("word");
            expect(window.alert).toHaveBeenCalledWith("This is not a number!");
        });
    });
    
    describe("2018", function() {
        it("should return 10 if the year is 2008", function() {
            expect(year2018(2008)).toBe(10);
        });
    });
         it("If number is not supplied return alert message", function() {
            spyOn(window, "alert");
            year2018("word");
            expect(window.alert).toHaveBeenCalledWith("This is not a number!");
        });
    
});