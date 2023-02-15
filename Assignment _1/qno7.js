// Write a program to input any alphabet and check wether it is vowel or consonant?

let alphaBet='A';
// (not vowel)
// let alphaBet='b';

switch(alphaBet)
{
    case'a':
    case'A':
    console.log(`You entered vowel.`);
    break;
    case'e':
    case'E':
    console.log(`You entered vowel.`);
    break;
    case'i':
    case'I':
    console.log(`You entered vowel.`);
    break;
    case'o':
    case'O':
    console.log(`You entered vowel.`);
    break;
    case'u':
    case'U':
    console.log(`You entered vowel.`);
    break;
    default:
        console.log(`Not vowel.`);
}