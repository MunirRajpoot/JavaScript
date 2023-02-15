    // write a program to check whether a number is divisible by 5 and 11 or not?
    
    // (23 is not divisible by 5 and 11)
    // let num=23;
    // (55 is divisible by 5)
    // let num=55;
    // (22 is divisilbe by 11)
    // let num=22;
    if(num%5===0){
        console.log(`Number is divisible by 5.`);
    }
    else if(num%11===0){
        console.log(`Number is divisible by 11.`);
    }
    else{
        console.log(`Number is not divisible by by 5 and 11`);
    }