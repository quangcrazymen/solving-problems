//Problem link:
// https://leetcode.com/problems/add-two-numbers/
function ListNode(val=undefined, next=null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const a = new ListNode(3, null)
const b = new ListNode(4, a)
const c = new ListNode(2, b)

const d = new ListNode(4, null)
const e = new ListNode(6, d)
const f = new ListNode(5, e)


let addTwoNumbers = function (l1, l2) {
    let number1 = []
    let number2 = []
    let myPrint1 = (l1) => {
        l1.next !== null? myPrint1(l1.next) : null
        number1.push(l1.val)
    }
    let myPrint2 = (l2) => {
        l2.next !== null? myPrint2(l2.next) : null
        number2.push(l2.val)
    }
    let arrayToNumber = (array)=>{
        let number = 0
        number = Number(array.join(""))
        return number   
    }
    myPrint1(f)
    myPrint2(c)
    //write a sub-function to turn number to array
    let sum = String(arrayToNumber(number1) + arrayToNumber(number2))
                .split("")
                .map(e=>Number(e))

    // write a sub-function to turn array to linked-list
    let result = new ListNode() 
    let i = sum.length
    console.log(i)
    function chainNode(sum,i){
        let nextNode = new ListNode()
        let newNode = new ListNode(sum[i],nextNode)
        if(i===0){
            return 
        }else{
            chainNode(sum, i-1)
        }
        return newNode
    }
    console.log(chainNode(sum,i))
}
// console.log(1+2)
// console.log(addTwoNumbers(1,2))
// console.log([1,2,4].reverse())
// console.log([1,2,4].splice(0,1))

addTwoNumbers(f,c)


//Test join function
console.log(typeof(["1","2","3"].join("")))
const aString = ["1","2","3"].join("")
console.log(typeof(Number(aString)))

