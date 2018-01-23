describe("Calculator", function () {
    let calc = new Calculator();
    beforeEach(function() {
            calc = new Calculator(); 
        });
        
    describe("Addition function", function () {
        
        
        
        it("should add two numbers together and return the result", function() {
           calc.add(2);
           calc.add(2);
           expect(calc.value).toBe(4);
        });
       
       
        it("should not return 4 if the numbers don't add up to 4", function() {
           calc.add(20);
           calc.add(22);
           expect(calc.value).toBe(42);
           
        });
        
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.add("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
       
   });
   
   describe("subtract function", function() {
       
       
       
        it("should subtract one number from the other and return the result", function() {
            calc.sub(10);
            calc.sub(5);
            expect(calc.value).toBe(5);
        }); 
        it("should not return 5 if the subtract result doesn't equal 5", function() {
            calc.sub(15);
            calc.sub(6);
            expect(calc.value).toBe(9);
        });
          
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.sub("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
   });
   
   
   describe("multiply function", function() {
       it("should multiply one number by the other and return the result", function() {
            calc.mult(10);
            calc.mult(5);
            expect(calc.value).toBe(50);
        }); 
        it("should not return 50 if the multiply result doesn't equal 50", function() {
            calc.mult(10);
            calc.mult(2);
            expect(calc.value).toBe(20);
        });
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.mult("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
       
   });
       
   describe("division function", function() {
        it("should divide one number by the other and return the result", function() {
            calc.div(10);
            calc.div(5);
            expect(calc.value).toBe(2);
        }); 
        it("should not return 2 if the division result doesn't equal 2", function() {
            calc.div(10);
            calc.div(2);
            expect(calc.value).toBe(5);
        });
       
        it("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.div("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
        it("should return undefined if we divide by zero", function() {
            spyOn(window, "alert");
            calc.div(0);
            expect(window.alert).toHaveBeenCalledWith("Can't divide by zero");
        });
       
       
       
       
       
   });
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
});