describe("Challenges", function() {
    
    
    describe("Drink", function() {
        
        it("If it's less than zero it should return 'Sorry. I can't tell what drink because that age is incorrect'", function() {
            expect(whatCanIDrink(-2)).toEqual("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("If it's less than 14 it should return 'Drink Toddy'", function() {
            expect(whatCanIDrink(5)).toEqual("Drink Toddy");
        });
        it("If it's less than 18 it should return 'Drink Coke'", function() {
            expect(whatCanIDrink(16)).toEqual("Drink Coke");
        });
        it("If it's less than 21 it should return 'Drink Beer'", function() {
            expect(whatCanIDrink(20)).toEqual("Drink Beer");
        });
         it("If it's less than 130 it should return 'Drink Whiskey'", function() {
            expect(whatCanIDrink(129)).toEqual("Drink Whiskey");
        });
        it("If it's more than 130 it should return 'Sorry, age incorrect'", function() {
            expect(whatCanIDrink(131)).toEqual("Sorry, age incorrect");
        });
    });
    
    
    describe("FizzBuzz", function() {
        
        it("If the number is divisible by 3 return 'Fizz'", function() {
            expect(fizzBuzz(3)).toEqual("Fizz");
        });
        it("If the number is divisible by 5 return 'Buzz'", function() {
            expect(fizzBuzz(10)).toEqual("Buzz");
        });
        it("If the number is divisible by 3 and 5 return 'FizzBuzz'", function() {
            expect(fizzBuzz(30)).toEqual("FizzBuzz");
        });
        it("If the number is divisible by 3 and 7 return 'FizzPop'", function() {
            expect(fizzBuzz(21)).toEqual("FizzPop");
        });
        it("If the number is divisible by 5 and 7 return 'BuzzPop'", function() {
            expect(fizzBuzz(35)).toEqual("BuzzPop");
        });
        it("If the number is not divisible by 3 or 5 or 7 return the number", function() {
            expect(fizzBuzz(2)).toEqual(2);
        });
        it("If the number is divisible by 7 return 'Pop'", function() {
            expect(fizzBuzz(7)).toEqual("Pop");
        });
        it("If a number is not passed return alert", function() {
            spyOn(window, "alert");
            fizzBuzz("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Not a number!");
        });
        
        
    });
    
    
    
    
    
    
});