// max find
//     let arr = [1, 2466, 34, 67, 2930, 75900];
//     let max = arr[0]
//     for (i = 0; i < arr.length; i++) {

//         if (max < arr[i]) {
//             max = arr[i];
//         }
// console.log(max);
//     }




// min find
// let arr = [1006, 2466, 34, 67, 2930, 75900];
// let min = arr[0]
// for (i = 0; i < arr.length; i++) {

//     if (min > arr[i]) {
//         min = arr[i];
//     }
// console.log(min);
// }



//    sorting array details with for loop 
let arr = [67, 878, 34, 1200000, 77, 697];
console.log("Original Array: ",arr)
for (let i=0 ; i<arr.length; i++ ) {
    let minIndex = i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j;
            }
            }
            var temp = arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex] =temp;
            }
            console.log("Sorted Array: ",arr)


// let numbers = [4, 6, 3, 1, 2];
// console.log('Original Number List :', numbers);
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             const temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }
// console.log("sort array",numbers);

