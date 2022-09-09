// let array = [
//     {
//         id: 1,
//         on: true
//     },
//     {
//         id: 2,
//         on: false
//     },
//     {
//         id: 3,
//         on: true
//     },
//     {
//         id: 4,
//         on: true
//     },
//     {
//         id: 5,
//         on: false
//     },
//     {
//         id: 6,
//         on: false
//     },
// ]
// let object = {
//     id: 6,
//     on: false
// }

// for(let a in object){
//     console.log(object[6])
// }
// for(let a in array){
//     for(let i in a){
//         console.log(a[i])
//     }
// }

// const transformArrayToObject = (inputArr) => {
//     // Code Here
//     let obj = {}
//     for(let i=0;i<inputArr.length;i+=2){
//         obj[inputArr[i]]=inputArr[i+1]
//     }
//     return obj
// };
// console.log(transformArrayToObject(["a", 1, "b", 2]))
// console.log(transformArrayToObject([1, "a", 2, "b"]))
// console.log(transformArrayToObject([1, 1, 2, 2]))
// console.log(transformArrayToObject([undefined, 1, 2, 2]))

// const obj1={"a":1,"b":2}
// let ele1="23"
// let ele2="323"
// let obj2 = {...obj1,ele1:ele2}
// console.log(obj2)


// const findTwoElementWrapper = (...args) => {
//   return findTwoElementsWithDefinedSum(...args)?.reduce((a, b) => a + b);
// };

// console.log(findTwoElementWrapper([1, 2, 3, 4, 5, 6], 10))
// console.log(findTwoElementsWithDefinedSum([1, 2, 3, 4, 5, 6], 13))
// console.log(findTwoElementWrapper([-3, -5, 4, -2, 1, 6], -1))
// console.log(findTwoElementWrapper([0, -5, 4, -2, 1, 6], -5))
// console.log(findTwoElementWrapper([0, 0, 0, 0, 5], 0))


// function findTwoElementsWithDefinedSum(inputArr, sum) {
//     // Code Here
//     let i=1
//     for(let num1 of inputArr){
//         for(let num2 of inputArr.slice(i)){
//             if(num1+num2===sum) return [num1,num2]
//         }
//         i+=1
//     }
//     return undefined;
// }
const findTopNFrequentNumber = (inputArr, k) => {
    //code here
    inputArr.sort()
    let obj = {}
    while(inputArr.length){
        if(!obj.hasOwnProperty(inputArr[0])){
            obj[inputArr[0]]=1
        }
        if(inputArr[0]===inputArr[1]){
            obj[inputArr[0]]+=1
            inputArr=inputArr.slice(1)
        }
        else{
            inputArr=inputArr.slice(1)
        }
    }
    let result=[]
    // for(let i=0;i<k;i++){
    // }
    for(element in obj){
        console.log(element)
    }
    return obj;
  };
console.log(findTopNFrequentNumber([1, 1, 1, 2, 2, 3], 2))
console.log(findTopNFrequentNumber([0, 0, 1, 2], 1))
console.log(findTopNFrequentNumber([1, 2, 3], 1))
console.log(findTopNFrequentNumber([0, 0, 0, 0, 1, 1, 2, 2, 3], 3))