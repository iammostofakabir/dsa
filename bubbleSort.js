function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        swap = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                swap = true;
            }
        }
        if (swap == false) {
            break;
        }
    }
    return array;
}

let roll = [3, 160, 191, 307, 102, 188];

let result = bubbleSort(roll);
console.log(result);