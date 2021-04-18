//todos - ul
//add -form , adder-textfield
//event methods- https://developer.mozilla.org/en-US/docs/Web/Events

const addNew=document.querySelector('.add');//new add
const newEle=document.querySelector('.todos');//list ul
const googl=document.querySelector('.search input');//refernce to search -> input & not entire search 


//add todo
const generateTemplate=(UserInp)=>{
    const ele=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${UserInp}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `
    newEle.innerHTML+=ele//todo selector
};

addNew.addEventListener('submit',e=>{
    e.preventDefault();
    const UserInp=addNew.adder.value.trim();
    
    if (UserInp.length){
        generateTemplate(UserInp);
        addNew.reset();
    }
});


//del todos 

//attach listener to ul for event delegation
//(ul->li->i) Tree model

newEle.addEventListener('click',e=>{
    //here e checks for classname 'del' condidtion
   if (e.target.classList.contains('delete')){
    //delete class is in i tag which is in li tag , hence we delete li as whole
    e.target.parentElement.remove(); 
   }
});



//Search & Filter todos



//making array of 'li' elements
//testin inp==list(~)
 const filterHash=(hash)=>{
    Array.from(newEle.children)
    .filter((todo)=>!todo.textContent.includes(hash))
    .forEach((todo)=>todo.classList.add('filtered'));



    //removin mask filter when goin bac i.e deleting inp in search
    //making array of 'li' elements
    //testin inp==list
    Array.from(newEle.children)
    .filter((todo)=>todo.textContent.includes(hash))
    .forEach((todo)=>todo.classList.remove('filtered'));

}; 


googl.addEventListener('keyup',()=>{
    
    const hash=googl.value.trim().toLowerCase();
    
    //console.log(hash);
    filterHash(hash);
});
