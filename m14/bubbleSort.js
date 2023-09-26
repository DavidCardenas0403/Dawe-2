const arr = [5, 8, 1, 3, 24, 15, 62, 4, 7, 13];

for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i-1; j++) {
        if (arr[j] > arr[j+1]) {
            const arrJ = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = arrJ
        }
    }
}

console.time("bubble")
console.log(arr);
console.timeEnd("bubble")