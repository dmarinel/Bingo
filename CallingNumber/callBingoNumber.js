const callBingoNumber = () =>{
    let min = 1;
    let max = 75;
    const boxOfNumber = []
    
    let num = Math.floor(Math.random() * (max - min)) + min;
    if (!boxOfNumber.includes(num) ) {
        boxOfNumber.push(num)
    }
    
    console.log(boxOfNumber);
    return boxOfNumber
} 

module.exports = {
    callBingoNumber
}