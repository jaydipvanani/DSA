let arr = [1,2,3,4,5,6,7,8,9,10];
let position = 6;
let element = 100;
 
for (let j = arr.length ; j >= position ; j--) {
    // console.log(arr[j]);
    arr[j] = arr[j-1];
    
}
 arr[position-1] = element;
 console.log(arr);