const fs = require('fs');

//DAY 1 part 1 v1
// fs.readFile('./challenge1.txt', (err, data) => {
//     console.time('day 1 challenge')
//     const input = data.toString();
//     const inputArray = input.split("");
//     let floor = 0;
//     for(let i = 0 ; i <= inputArray.length ; i++){
//         if(inputArray[i] === '('){
//             floor += 1;
//         } else if (inputArray[i] === ')') {
//             floor -= 1;
//         }
//     }
//     console.log(floor);   
//     console.timeEnd('day 1 challenge')
// })


//DAY 1 part 1 v2
// fs.readFile('./challenge1.txt', (err, data) => {
//     console.time('day 1 challenge v2')
//     const input = data.toString();
//     const inputArray = input.split("");
//     let up = 0;
//     let down = 0;
//     for(let i = 0 ; i <= inputArray.length ; i++){
//         if(inputArray[i] === '('){
//             up += 1;
//         } 
//         else if (inputArray[i] === ')'){
//             down += 1;
//         }
//     }
//     console.log(up - down);   
//     console.timeEnd('day 1 challenge v2')
// })

//DAY 1 part 2 v1
fs.readFile('./challenge1.txt', (err, data) => {
    console.time('day 1 challenge v2')
    const input = data.toString();
    const inputArray = input.split("");
    let position = 0;
    let floor = 0;
    for(let i = 0 ; i <= inputArray.length ; i++){
        position += 1;
        if(inputArray[i] === '('){
            floor += 1;
        } 
        else if (inputArray[i] === ')'){
            floor -= 1;
        }
        if (floor === -1){
            break;
        }
    }
    console.log(position);
    console.timeEnd('day 1 challenge v2')
})