let array = [
    {
        id: 1,
        on: true
    },
    {
        id: 2,
        on: false
    },
    {
        id: 3,
        on: true
    },
    {
        id: 4,
        on: true
    },
    {
        id: 5,
        on: false
    },
    {
        id: 6,
        on: false
    },
]
let object = {
    id: 6,
    on: false
}

for(let a in object){
    console.log(object[6])
}
// for(let a in array){
//     for(let i in a){
//         console.log(a[i])
//     }
// }