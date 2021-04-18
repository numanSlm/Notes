//works
console.log("yo 192.168.0.105")
const tryit=document.querySelector('.signup-form');//importing form
const username_feedback=document.querySelector('.username_feedback');
const password_feedback=document.querySelector('.password_feedback');

//used RegEx
const Usernamepattern=/^[a-zA-Z]{6,12}$/;
const passpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

//username
const userfunc=function(){
    const userNamer=tryit.username.value;//same as query selector sinc it has ID
    //tryit is quering signup form which in turn is being selected here
    
//use .test method
    if (Usernamepattern.test(userNamer)){
        username_feedback.textContent="Valid username";
        tryit.setAttribute('class','success');
                                }
    else{
        username_feedback.textContent="Invalid username";
        tryit.setAttribute('class','fail');
        }

};

//password
const passfunc=function(){
    
    const passworDer=tryit.password.value;
    const passpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (passpattern.test(passworDer)){
        password_feedback.textContent="Valid Password";
                              }
        else{
        password_feedback.textContent="Invalid password";
            }
           

}

 tryit.addEventListener('submit',e=>{   
    e.preventDefault();
    
    userfunc();
    passfunc();
}); 



//realtime username checking
//checks when button is released via keyup
 tryit.username.addEventListener('keyup',e=>{
    //console.log(e)
    userfunc();
}); 

//regex
const username="2138Numans14141"
const regex=/[a-zA-Z]{6,}/
//use 'test' in bulilt fn of regex
let result=regex.test(username);
console.log(result);


let sear= username.search(regex);//find position of pattern required
console.log(sear)


//only keyloggin 

/* //eg
window.addEventListener('load',(event)=>{
    console.log("window loaded");   
    event.preventDefault();
    console.log(event);
});

//keylog
this.addEventListener('keyup',e=>{
    console.log(e);
})
*/