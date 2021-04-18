console.log("yo");
const correctAnswers=['B','A','B','B'];
const userForm=document.querySelector('.quiz-form');
const result= document.querySelector('.result')

userForm.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0
    const UserAnswers=[userForm.q1.value,userForm.q2.value,userForm.q3.value,userForm.q4.value];
    //take ip
    UserAnswers.forEach((ele,index)=>{
        if(ele==correctAnswers[index]){
            score+=25
        }
    });
    console.log(score);

    //show result
    scrollTo(10,10);
    //result.querySelector('span').textContent=`${score}%`;//show result normal
    result.classList.remove('d-none');
    
    let output=0;
    const timer=setInterval(() => {
        result.querySelector('span').textContent=`${output}%`;// % animation

        if(output===score){
            clearInterval(timer);
        }
        else{
            output+=1;
        }
},50);


});

//timeout fn
setTimeout(()=>{
    //callback fn 
    //alert('Hello');//eg
},3000);