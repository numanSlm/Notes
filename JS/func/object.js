//Object Literals
//eg 1
  let user={
    name:"numan",
    age:20, 
    clg:'SIES',
    fav_anime:['Naruto','One Piece','HXH'],
    login:()=>console.log("The user is logged in!"),
    anime_list(){                                               //SAME AS  anime_list:function(){}
        console.log(this.fav_anime) //only printing array
        this.fav_anime.forEach((element,id)=>console.log(element,id+1));//user.fav_anime.forEach
    }
};
//THE ENTIRE USER IS JUST ONE OBJ
//console.log(user);
console.log(user.age);
console.log(user['clg']);

user.login();
user.anime_list();//WHEN YOU CALL METHOD LIKE THIS ONE jS SETS THE VALUE OF'THIS' KEYWORD TO THE OBJECT HERE THIS=USER
//console.log(this);
console.log('=================================================');

user.fav_anime.forEach((element,id)=>console.log(element,id+1));




//eg 2 storing objexts in arrays
//obj_name={ele1,ele2,ele3};
//user2 is 1 obj with 4 elements, while blogs itself has 2 objects and those 2 obj have 2 ele each
console.log('=================================================');
let user2={
    name:"numan",
    age:20,
    clg:'SIES',
    blogs:[
        {title:"how to make cofee",like:10},
        {title:"how to lose",like:90}
    ],
    login:()=>console.log("The user has written following blogs"),
    blogsName(){
        this.blogs.forEach(i=>{
            console.log(i.title,i.like)
        });
    }
};

user2.login();
user2.blogsName();
//console.log(this)//logs window object
//never use .this with arrow functopns since they return window object  