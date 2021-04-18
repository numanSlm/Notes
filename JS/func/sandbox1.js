//alert('Hello World');
//mutable variable is by let 
//JS is case sens
                                          //use semicolon to end statement
let age=23
console.log(age)
age=28
console.log(age)
//let is sam as var
var year=2020
console.log(age,year)
year=2040
console.log(year)

//constant val
const vim=45
console.log(vim)
let email="nario@python.com"
 
console.log(email)
ind=email.slice(2,5)    //slicer 'rio' 
console.log(ind)

let fname='Numan'
let fsname='numan'
let lname='Shaikh'
let lsname='shaikh'
console.log(fname.toUpperCase())// blue = method used correctly
console.log(fname.toLowerCase())

let fullName=fname+' '+lname
console.log(fullName)

console.log(fullName.substr(4,8))// relative slicer (start,no.of ele to select)

console.log(email.replace('n','w'))//case sens
//BIDMAS
console.log(5*(10-3)**2);

//String formatters
//normal
likes=10;
title ='Ecma';
let str='The blogs name is '+title+" and it has "+likes+" likes.";
console.log(str);

//template or string formatters
let str1=`The blogs name is ${title} and it has ${likes} likes`;
console.log(str1);

//push pop destrcutive methods
let lst=['zoro','luffy','hero'];
console.log(lst);
console.log(lst.push("nami"));//only prints total no,of ele in stack
console.log(lst.pop());//pop and dislpay ele

//Truth val
console.log(email.includes('!'),"email");
console.log(str.includes('10'),'str');
console.log(lst.includes('Sanji'),'array');
console.log(age==90,'age truth');

console.log(fsname>fname);/// lower case > uppercase
console.log(fsname>lname);

//Js converst str to num
console.log('lose comparison');

console.log(age==90);
console.log(age=='28');
console.log(age!='28');

console.log('strict comparison//dont convert');

console.log(age===28);
console.log(age==='28');
console.log(age!=='28');

//type conversion
var score='100';
console.log(score+1);
scr_num=Number(score);
console.log(scr_num+1);
console.log(typeof scr_num);
/*str cannot be converted to num NAN
but num can be comverted to */


//bolean conver
/* Some vals are true and others false
namely truthy falsy
all nums pos or neg are true except 0
all strings are true except blank strings
 */
tuu=Boolean(100)
nuu=Boolean(0)
console.log(tuu,typeof tuu);
console.log(nuu,typeof nuu);

/* Some vals are true and others false
namely truthy falsy
 */