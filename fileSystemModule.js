const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err){
        console.log('errorr');
    }
    console.log('async', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//APPEND
// fs.appendFile('./hello.txt', ' welcome to my file', err => {
//     if (err){
//         console.log('errrorr');
//     }
// })

//WRITE
// fs.writeFile('./bye.txt', 'bye bye my file', (err) => {
//     if(err){
//         console.log(errorrr);
//     }
// });

//DELETE
// fs.unlink('./bye.txt',(err) => {
//     if(err){
//         console.log(errorrr);
//     }
// });
