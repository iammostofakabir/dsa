function linearSearch(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return number + ' is found in the array. It is the ' + (i + 1) + 'th position of the array';
        }
    }
    return number + ' is not in the array';
}


let roll = [1, 4, 6, 8, 9, 11, 14, 15, 20, 25, 33, 83, 87, 97, 99, 100];

let find = 100;

let result = linearSearch(roll, find);
console.log(result);