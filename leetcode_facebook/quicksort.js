const quicksort = (array, left, right) => {
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        quicksort(array, left, partitionIdx - 1);
        quicksort(array, partitionIdx + 1, right);
    }
    console.log(array);
}

const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left;
    let j = i;
    while (j < right) {
        if (array[j] < pivot) {
            //Swap
            swap(array, i, j);
            i++;
        }
        j++;
    }
    swap(array, i, right);
    return i;
}

const swap = (array, l, m) => {
    //Swap
    const temp = array[l];
    array[l] = array[m];
    array[m] = temp;
}
const arr1 = [5, 3, 1, 6, 4, 2]
quicksort(arr1, 0, arr1.length - 1)