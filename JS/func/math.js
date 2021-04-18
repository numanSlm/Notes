/* console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=9.5876760;
console.log(Math.round(area));  // round 0.5 > +1 (9.5=10)

console.log(Math.floor(area)); 
console.log(Math.ceil(area)); 

const mno=3.143
console.log(Math.ceil(mno)); 
console.log(Math.trunc(mno));
/////////////////////////////////////////////////////////////////
//1. range =R
var radon=Math.random();
console.log(radon);

//2,range=0 to 1
var bin=Math.random();
console.log(Math.round(bin));

//2,range=0 to 100
var dec=Math.random();
console.log(Math.round(dec*100));
 */

//Stack and heap 

//Primitive
let scoreOne=100;
let scoreTwo=scoreOne;
console.log(`The score 1 is ${scoreOne} and score 2 is ${scoreTwo}`);

scoreOne=60;
console.log(`The score 1 is ${scoreOne} and score 2 is ${scoreTwo}`);


//Referenced  copies pointer

let User1={name:'Numan', age:20};
let User2=User1;

console.log(User1, User2);

User1.age=29
console.log(User1, User2);