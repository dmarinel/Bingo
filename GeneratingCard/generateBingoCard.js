const generateBingoCard = () =>{
    console.log('hola mundo2');
    
     let arr = [
        [], // b (1-15)
        [], // i (16-30)
        [], // n (31-45)
        [], // g (46-60)
        []  // o (51-75)
    ];

    const generateCard = arr.map((e,i) => {
        let min = (i * 15) + 1;
        let max = min + 15;

        for (let j = 0;e.length <5; j++) {
            let num = Math.floor(Math.random() * (max - min)) + min;
            // Evitar que se repitan numeros
            if(!e.includes(num)) {
                e.push(num);
            }
        }
        // Ordenar
     return e.sort((a,b) => a - b);
    })
    
    generateCard[2][2] = "FREE"
    return generateCard 
} 

module.exports = {
    generateBingoCard 
}