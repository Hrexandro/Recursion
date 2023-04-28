// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to
//  someone else (e.g. that same method!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

function mergeSort(array){
    if (array.length < 2){
        return array
    } else {
        let midPoint = array.length/2
        let firstHalf = mergeSort(array.slice(0, midPoint))
        let secondHalf = mergeSort(array.slice(midPoint, array.length))

        let mergedArray = []

        while (mergedArray.length < array.length){
            //console.log('firstHalf is ' + firstHalf + ' secondHalf is ' + secondHalf)
            //console.log('firstHalf[0] is' +firstHalf[0])
            //console.log('secondHalf[0] is' +secondHalf[0])
            //console.log(firstHalf[0]<secondHalf[0])
            if (firstHalf[0] < secondHalf[0]){
                mergedArray.push(firstHalf[0])
                firstHalf.shift()
            } else if (secondHalf[0] !== undefined){//comparing a number to undefined is always false
                mergedArray.push(secondHalf[0])
                secondHalf.shift()
            } else {
                mergedArray.push(firstHalf[0])
            }
            //console.log('adding' + mergedArray[mergedArray.length-1])
        }
        //console.log(mergedArray)
        return mergedArray
    }
}

//console.log(mergeSort([1, 3, 4, 2]))

console.log(mergeSort([1, 3, 7, 5, 6, 4, 8, 2]))

//console.log(mergeSort([54, 1, 124]))