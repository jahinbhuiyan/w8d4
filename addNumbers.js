rl = readline.createInterface({
input: process.stdin,
 output: process.stdout});


function addNumbers(sum, numsLeft, completionCallback) {

    if(numsLeft > 0){
        rl.question('Please input a number: ', (input) =>{
            console.log('The number is: ' + input);
        });
    }
}

