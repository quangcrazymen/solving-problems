//Problem link:
// https://leetcode.com/problems/add-two-numbers/
function ListNode(val, next) {
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

}
// console.log(1+2)
// console.log(addTwoNumbers(1,2))
// console.log([1,2,4].reverse())
// console.log([1,2,4].splice(0,1))
let number1 = []

let myPrint = (l1) => {
    l1.next !== null? myPrint(l1.next) : null
    number1.push(l1.val)
}
myPrint(f)
console.log(number1)

//Test join function
console.log(typeof(["1","2","3"].join("")))
const aString = ["1","2","3"].join("")
console.log(typeof(Number(aString)))

// write a sub-function to turn array to linked-list