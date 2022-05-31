//Problem link:
// https://leetcode.com/problems/add-two-numbers/
function ListNode(val=undefined, next=null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const a = new ListNode(9, null)
const b = new ListNode(9, a)
const c = new ListNode(9, b)

const d = new ListNode(9, null)
const e = new ListNode(9, d)
const f = new ListNode(9, e)
const g = new ListNode(9, f)

//Nice try but not good enough
let addTwoNumbers = function (l1, l2) {
    let number1 = []
    let number2 = []
    // use for loop for
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
    let node = new ListNode()
    function chainNode(node,sum,i){
        if(i===0) return 
        node.val = sum[i-1]
        let nextNode = new ListNode(undefined,null)
        if (i!==1) node.next =nextNode;
        chainNode(nextNode,sum, i-1)
    }
    chainNode(node,sum,i)
    console.log(node)
    return node
}
//Adding to number version 2: c, f
let addTwoNumbers2 =function(l1,l2){
    let result = []
    let remain = 0
    while(l1!==null || l2!==null){
        let a = l1 !== null ? l1.val:0
        let b = l2 !== null ? l2.val:0
        let sum = a + b 
        if(sum +remain >= 10){
            newValue = (sum+remain) % 10  
            remain = 1 
        }
        else{
            newValue = sum +remain
            remain = 0
        }
        result.push(newValue)
        l1!==null? l1=l1.next:null
        l2!==null? l2=l2.next:null
    } 
    remain === 1? result.push(1):undefined
    console.log(result)
    let node = new ListNode()
    let i = result.length
    function chainNode(node,result,i){
        if(i===0) return 
        node.val = result[i-1]
        let nextNode = new ListNode(undefined,null)
        if (i!==1) node.next =nextNode;
        chainNode(nextNode,result, i-1)
    }
    chainNode(node,result.reverse(),i)
    console.log(node)
    return node
}
addTwoNumbers2(c,g)

// console.log(1+2)
// console.log(addTwoNumbers(1,2))
// console.log([1,2,4].reverse())
// console.log([1,2,4].splice(0,1))

// addTwoNumbers(f,c)


//Test join function
//console.log(typeof(["1","2","3"].join("")))
//const aString = ["1","2","3"].join("")
// console.log(typeof(Number(aString)))

