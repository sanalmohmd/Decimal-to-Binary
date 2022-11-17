function convertToBinary(x) {
    let bin = 0;
    let rem, i =1, step =1;
    while (x != 0){
        rem =x % 2;
        document.write(`Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;


    }
    document.write(`Binary: ${bin}`)
}

let number = prompt('Enter a decimal number');

convertToBinary(number);