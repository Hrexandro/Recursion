// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to
//  someone else (e.g. that same method!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

function mergeSort(array){
    if (array.length < 2){
        return
    } else {
        let midPoint = array.length/2
        mergeSort(array.slice(0, midPoint))
        mergeSort(array.slice(midPoint, array.length))
        //now merge
        //let firstToMerge = mergeSort(array.slice(0, midPoint))
        //let secondToMerge = mergeSort(array.slice(midPoint, array.length))
        //iterate comparing item by item and merge
    }
}

//console.log(mergeSort([9, 3, 7, 5, 6, 4, 8, 2]))

console.log(mergeSort([54, 1, 124]))