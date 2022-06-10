function insertionSort(array) {
    for (let i = 1; i <= array.length; i++) {
        let temp = array[i];
        let j = i - 1
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

let roll = [3, 160, 191, 307, 102, 188];

let result = insertionSort(roll);
console.log(result);