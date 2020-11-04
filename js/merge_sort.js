'strict'


function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }


    const middle = Math.floor(arr.length /2);
    const arr1 = arr.slice(0, middle);
    const arr2 = arr.slice(middle);

    return sort(mergeSort(arr1) , mergeSort(arr2));
}


function sort(arr1, arr2){
    let sorted = [];
    let temp;

    while( arr1.length && arr2.length ){
        temp = (arr1[0] > arr2[0])? arr2.shift() : arr1.shift();
        sorted.push(temp);
    }

    sorted = arr1.length? sorted.concat(arr1) : sorted.concat(arr2);
    return sorted;
}

console.log(mergeSort([212,46,12,725,457,8,31,6,8,9,2314321,2]))