const getTodos=(status)=>{

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    //console.log(request,request.readyState);
    if(request.readyState===4 && request.status===200){
        const data=JSON.parse(request.responseText)
        status(undefined,data[0]);
    }
    else if(request.readyState===4){
        //console.log("Sorry couldnt fetch data");
        status('Couldnt fetch',undefined);
    }

});

request.open('GET','todo.json');
request.send();
};

getTodos((err,data)=>{
    console.log("callback fired")
    //console.log(err,data);
    if(err){
        console.log(err);
    }
    else if (data){
        console.log(data);
    }
});