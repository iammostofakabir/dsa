function binarySearch(array, number) {
    let lowIndex = 0; let midIndex; let highIndex = array.length - 1;
    while (lowIndex <= highIndex) {
        midIndex = parseInt((lowIndex + highIndex) / 2);
        if (number == array[midIndex]) {
            break;
        }
        if (number < array[midIndex]) {
            highIndex = midIndex - 1;
        }
        else {
            lowIndex = midIndex + 1;
        }
    }
    if (lowIndex > highIndex) {
        return number + ' is not in the array';
    }
    else {
        return array[midIndex] + ' is found in the array. It is the ' + (midIndex + 1) + 'th position of the array';
    }
}

let roll = [1, 4, 6, 8, 9, 11, 14, 15, 20, 25, 33, 83, 87, 97, 99, 100];

let find = 100;

let result = binarySearch(roll, find);
console.log(result);