

    // Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8,
    // this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
    // Now write another method fibsRec which solves the same problem recursively.
    //This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

function fibs (number){
    let result = [0]
    while (result.length < number){
        result.push( (result.length > 1 ? result[result.length-2] : 1) + result[result.length-1] )
    }
    return result
}

console.log(fibs(8))

function fibsRec (number, current = [0]){
    if (number < 2){
        return current
    } else {
        let newElement = (current.length > 1 ? current[current.length-2] : 1) + current[current.length-1]
        return fibsRec(number-1, current.concat([newElement]))
    }
}

console.log(fibsRec(8))

function oneLinerFibsRec (number, current = [0]){
    return (number < 2) ? current : oneLinerFibsRec(number-1, current.concat((current.length > 1 ? current[current.length-2] : 1) + current[current.length-1]))
}
console.log(oneLinerFibsRec(8))