//alert("Hey!");

// 1 for loop
/* var temp=5;
for(i=0;i<temp;i++)
{
    console.log(temp+i);
} 
 */

//2 While loop
/* const crew=['luffy','zoro','Nami','Sanji'];
let i=0;
while(i<crew.length){
    console.log(crew[i]);
    i+=1;
} */

//3 do while
/* let m=0
do{
    console.log('The value of m is:',m);
    m++;
}while(m<4);
 */
// ifelse ladda
/* 
const password='p@ss';
 if (password.length>=12 && password.includes('@')){
     console.log("mighty password");
    
}
else if(password.length>=8 || password.includes('@')&&password.length>5){     
    console.log('Strong');
    //password.length>=8 condition 1 and 
    //password.includes('@')&&password.length>5 2nd condition

}
else
{
    console.log("weak pass");

}  */

/* let user=false
if (!user){
    console.log("User Absent!");
}
 */


 //break and continue
/* let scores=[50,20,0,100,70,14]

for(let i=0;i<scores.length;i++)
{
    if (scores[i]===0)
    {
        continue;
    } 
    
    console.log("Your score is:",scores[i]);
    if(scores[i]==100)
    {
        console.log(`You scored ${scores[i]}, You won`);
        break;
    }
}
 */

//switch case
/* let grade='D';
switch(grade){
    case'A':
    console.log("You've got an A");
    break;
    case'B':
    console.log("You've got an B");
    break;
    case'C':
    console.log("You've got an C");
    break;
    case'D':
    console.log("You've got an D");
    break;
    case'E':
    console.log("You've got an E");
    break;

    default:
        console.log("invalid Grade");
} */

//scope of variable
