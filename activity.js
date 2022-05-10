function fibonacci(number){
    if(number==1||number==2){
        return 1;
    }

    else{
        return fibonacci(number-1)+fibonacci(number-2);
    }
}


const fs = require('fs');

const file=fs.readFileSync('input.txt');
var number;
number=parseInt(file);
console.log("F(%d) = %d", number, fibonacci(number));

