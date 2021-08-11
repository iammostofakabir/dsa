function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        // if(min!=i){
        //     let temp;
        //     temp = array[i];
        //     array[i] = array[min];
        //     array[min] = temp;
        // }
    }
    return array;
}

let roll = [3, 160, 191, 307, 102, 188];

let result = selectionSort(roll);
console.log(result);