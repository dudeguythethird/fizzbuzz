describe ("My fizzBuzz function", function(){

    describe("fizzBuzz function result if the number is divisible by 3 and 5", function(){
        it ("should return the value 'FizzBuzz'", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz")
        });
    });
    describe("fizzBuzz function result if the number is divisible by 3", function(){
        it ("should return the value 'Fizz'", function(){
            expect(fizzBuzz(9)).toBe("Fizz")
        });
    });
    describe("fizzBuzz function result if the number is divisible by 5", function(){
        it ("should return the value 'Buzz'", function(){
            expect(fizzBuzz(10)).toBe("Buzz")
        });
    });
    describe("fizzBuzz function result if the number is not divisible by either 3 or 5", function(){
        it ("should return the value 'Not Applicable'", function(){
            expect(fizzBuzz(11)).toBe("Not Applicable")
        });
    });
});