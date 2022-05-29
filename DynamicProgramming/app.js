console.log("hello")
// https://www.topcoder.com/thrive/articles/Dynamic%20Programming:%20From%20Novice%20to%20Advanced
// Introductory problems:
// Adding coin:
function findingSmallestNumberOfCoins(sum){
    let min = []
    for (let i=0;i<sum;i++){
        min.push(Infinity)
    }
    min[0]=0
    min.forEach(a=>console.log(a))

}
findingSmallestNumberOfCoins(5)

//https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/
