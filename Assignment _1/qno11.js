// 11. Write a js program to count a minimum number of notes in a given
// amount.

let amount=6900;

while (amount>0) {

    if(amount>=5000){
        console.log("Number of 5000 notes "+(amount/5000));
        amount=amount % 5000;
    }else if(amount>=2000){
        console.log("Number of 2000 notes "+(amount/2000));
        amount=amount % 2000;
    
    }else if(amount>=1000){
        console.log("Number of 1000 notes "+(amount/1000));
        amount=amount % 1000; 
    }
    if(amount>500){
        console.log("Number of 500 notes "+(amount/500));
        amount=amount % 500;
    }else if(amount>=100){
        console.log("Number of 100 notes "+(amount/100));
        amount=amount % 100;
    
    }else if(amount>=50){
        console.log("Number of 50 notes "+(amount/50));
        amount=amount % 50; 
    }
    else if(amount>=20){
        console.log("Number of 20 notes "+(amount/20));
        amount=amount % 20; 
    }
    else if(amount>=10){
        console.log("Number of 10 notes "+(amount/10));
        amount=amount % 10; 
    }

    break;
}
