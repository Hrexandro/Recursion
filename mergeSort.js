// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to
//  someone else (e.g. that same method!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

function mergeSort(array){
    if (array.length < 2){
        return array
    } else {
        let midPoint = parseInt(array.length/2)
        let firstHalf = mergeSort(array.slice(0, midPoint))
        let secondHalf = mergeSort(array.slice(midPoint, array.length))
        
        let mergedArray = []

        while (mergedArray.length < array.length){

            if (firstHalf[0] < secondHalf[0]){
                mergedArray.push(firstHalf[0])
                firstHalf.shift()
            } else if (secondHalf[0] !== undefined){//comparing a number to undefined is always false
                mergedArray.push(secondHalf[0])
                secondHalf.shift()
            } else {
                mergedArray.push(firstHalf[0])
                firstHalf.shift()
            }
        }
        return mergedArray
    }
}
