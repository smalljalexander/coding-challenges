//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array or list ( depending on language ).
//Examples
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10]

//take in an array of numbers
// return an array of numbers that go up by 1 until the end
//take in the array and run a for loop to loop through and log each number up to the n variable



function countBy(x, n) {
    var z = []
    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }
    return z
}
