function merge(arr1, arr2) {
    let output = [];
    let i = 0; let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]); i++;
        }
        else {
            output.push(arr2[j]); j++;
        }
    }
    while (i < arr1[i]) {
        output.push(arr1[i]); i++;
    }
    while (j < arr2[j]) {
        output.push(arr2[j]); j++;
    }
    return output;
}

function mergeSort(array){
    if(array.length<=1) return array;
    let mid = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return merge(left,right);
}

let roll = [3, 160, 191, 307, 102, 188];

let result = mergeSort(roll);
console.log(result);