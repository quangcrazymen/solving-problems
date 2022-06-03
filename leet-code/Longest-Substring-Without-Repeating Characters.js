//Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
let s = 'abcabcbb'
s = "bbbbb"
s = "pwwkew"
s = "dvdf"
let lengthOfLongestSubstring = function (s) {
    arr = s.split("")
    let max = 0
    let i = 0
    let visited = new Set()
    while (i < arr.length) {
        let count = 1
        for (let element of arr.slice(i + 1)) {
            visited.add(arr[i])
            if (!visited.has(element)) {
                count++
                visited.add(element)
            }
            else break
        }
        visited.clear()
        count > max ? max = count : max
        i++
    }
    console.log(max)
    return max
};

lengthOfLongestSubstring(s)

//WEIRD BEHAVIOR
//lINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#modifying_the_array_during_iteration
// arr.forEach(
//     (a,index,array) => {
//         let count = 0
//         console.log(array[index])
//         array = arr.slice(1)
//         console.log(array)
//         console.log(arr)
//     }
// )
// console.log(arr)

// THIS KEYWORD
// LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// function logger(){
//     let obj={
//         a:2,
//         b:function(){
//             return this.a;
//         }
//     }
//    console.log(obj.b())
// }
// logger()