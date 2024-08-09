function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: if the array has 0 or 1 element, it's already sorted
    }

    const mid = Math.floor(arr.length / 2); // Find the midpoint of the array
    const left = arr.slice(0, mid); // Divide the array into left half
    const right = arr.slice(mid); // Divide the array into right half

    return merge(mergeSort(left), mergeSort(right)); // Recursively sort both halves and merge them
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // Move the pointer in the left array
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Move the pointer in the right array
        }
    }

    // Concatenate any remaining elements from the left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Concatenate any remaining elements from the right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

let a = [67, 44, 82, 17, 20];
let sortedArray = mergeSort(a);
console.log(sortedArray);
