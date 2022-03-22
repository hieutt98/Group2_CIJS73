// 1 false
// 2 True 
// 3 True
// 4 {foo: 1, bar: 2}
// 5 SyntaxError
// 6 undefined
// 7 error
// 8 [1, 23, 4]
// 9 3
// 10 a = 3, b = 12
// 11 error
// 12 [1, 2, 3, 4, 5]
// 13 16

/*Input: "abcdef"
Ouput: "fedcba"*/

function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 
    return joinArray;
}
 
let result = reverseString("abcdef");
console.log(result)

/*Input: [1, 2, 3, 5, 4, 2, 6, 4]
Output: [1, 2, 3, 5, 4, 6]*/


let arr = [1, 2, 3, 5, 4, 2, 6, 4]
let uniqueArray = arr.filter(function(item,index,arr2){
    return index == arr2.indexOf(item);
})
console.log(uniqueArray);