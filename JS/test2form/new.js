window.addEventListener('load',(event)=>{
    console.log("window loaded");   
    event.preventDefault();
    console.log(event);
});

window.addEventListener('keyup',e=>{
    console.log(e);
})