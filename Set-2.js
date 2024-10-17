// Question 3 : Reverse the order of elements in an array in-place.
function reverseArray() {
    // Get the input value and split it into an array
    const input = document.getElementById('arrayInput').value;
    let arr = input.split(',').map(Number); // Convert input strings to numbers
    
    // Check for valid input
    if (arr.some(isNaN)) {
        document.getElementById("result3").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Reverse the array in place
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    // Display the reversed array
    document.getElementById("result3").innerHTML = "Reversed Array: " + arr.join(', ');
}

// Question 4 : Remove duplicate elements from a sorted array and return the new length.
function removeDuplicates() {
    // Get user input
    const input = document.getElementById('arrayInput').value;

    // Convert input string to an array of numbers
    const arr = input.split(',').map(Number);

    // Check for valid input
    if (arr.some(isNaN)) {
        document.getElementById("result4").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Initialize a variable to keep track of the index for unique elements
    let uniqueIndex = 0;

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // If the current element is different from the last unique element
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i]; // Update the position with the unique element
        }
    }

    // The new length of the array is uniqueIndex + 1
    const newLength = uniqueIndex + 1;

    // Get the updated array without duplicates
    const updatedArray = arr.slice(0, newLength);

    // Display the new length and updated array
    document.getElementById("result4").innerHTML = `New Length: ${newLength} <br> Updated Array: [${updatedArray.join(', ')}]`;
}