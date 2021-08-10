function bubbleSort(array) {
    let i, j, temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let roll = [3, 160, 191, 307, 102, 188, 0, 2, 5, 78514, 1515, 12564, 32134, 4444, 1245];

let result = bubbleSort(roll);
console.log(result);