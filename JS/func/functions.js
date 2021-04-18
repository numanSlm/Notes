// Normal Functions

/* function greet(){
    console.log('Hello');
}
greet();

//Area Function
function areaCalc(radius)
{
    result= 3.14*radius**2;
    return result
}
area =areaCalc(5);
console.log(area);

//Volume function
function vol(area){
    volume=area *(4/3);
    return volume
}
v=vol(area);
console.log(v)

 */



//Funtional expressions 

// Syntax:
//datatype func_name = function(parameter){};// semicolon important here in fn expressions

const pi=Math.PI;
const r=10;
const areaCircle=function(radii){
    return pi*radii**2;
};

const rez=areaCircle(r);
console.log("Normal area is",rez);

const volCircle=function(rez){
    return rez*(4/3)*r;
};

const v=volCircle(rez); 
console.log("volume is",v); 
//functional exp are not hoisted to top, but normal ones are 


//Arrow function struct: no "function" keyword required, use for short funcs
const func_name=(param1,param2)=>{
    return pass//no return req with 1 param
};

const calcArea=radius=>Math.PI*radius**2;
console.log("Arrow func",calcArea(5));

const greet=()=>console.log("hello there");
greet();

 

//CALLBACK fUNCTION     ///////////////////////////////Didnt understand much

//declaring fun
const myfunc=(callbackFunc)=>{
    let value=70;
    callbackFunc(value);
};

//calling function by passing another function as an args
myfunc(function(value){console.log(value);}); 

//foreach as method iterates thro list as callback

let crew=['luffy','zoro','sanji','nami'];
//syntax obj.method(function)
console.log("====================================")
crew.forEach(function(person){
    console.log(person);
});
console.log("====================================")

//as arrow func

//  obj.method(func_param=>return);
crew.forEach((person,index)=>console.log(index,person));//1st arg is element always,2nd is index




//another example

let members=['bablu','dablu','tiblu'];
//p,i are iterables to list p=element i=index
const logPerson=(p,i)=>console.log(`The member is ${p} with index ${i+1}`);

members.forEach(logPerson);


//dom manip
const ul=document.querySelector('.people');
gang=['Killu','Billu','Willu']
let html=``;
gang.forEach((p,i)=>{
    html+=`<li> The member is ${p} with index ${i} </li>`
    });

ul.innerHTML=html