//sel 1st ele
const pclass=document.querySelector('.error');
console.log(pclass);

const pid=document.querySelector('div.error');
console.log(pid);

//all ele
const mclass=document.querySelectorAll('.error');
console.log(mclass);
console.log(mclass[0]);//0th element

mclass.forEach((err,ind)=>console.log(err,"The index is:", ind));



//get ele by id
 const idr=document.getElementById('title');
console.log(idr);
//get by class
const cls=document.getElementsByClassName('error');
console.log(cls);
//get by tag <>
const tg=document.getElementsByTagName('p');
console.log(tg); 

//Editing elements using querySelector
/* 
const slm=document.querySelector('title');
slm.innerText="This is Updated title";

const htm=document.querySelector('.error');//class
htm.innerHTML='<h2>Something Comforting</h2>';

const clsid=document.querySelector('div.error');//div
clsid.innerHTML='<h2>Div changed</h2>';

const clsid=document.getElementById('porter');//id
clsid.innerHTML='<h2>Div changed</h2>'; */


//advanced sel + modify 
const bew=document.querySelector('div.porter');
const album=['Shelter','Sad Machine','Wish'];

album.forEach(song=>bew.innerHTML+=`<p>The songs in the album are ${song} </p>`);


//link change
 const link=document.querySelector('a');  //search for ele
link.setAttribute('href','https://www.steampowered.com')//modify val
link.innerText="link to steam";//modify face

//val change
 
/* const msg=document.querySelector('div.fail');
console.log(msg.getAttribute('class')); op=fail  //syn: obj.getAttrib('type of container like id, class')////////////////////////////imp///////////////////////
msg.setAttribute('class','Pass');       //syn: obj.getAttrib('type of container like id, class','new value of container')
console.log(msg.getAttribute('class'));
msg.innerText='You have Passed';

msg.setAttribute('style','color:red');  //here style tag doesnt even exist yet it was changed
 */


//set attribute is destructive it will overwrite the entire value of that object
 const title=document.querySelector('#title');
console.log(title)
title.setAttribute('style','margin:50px')//this removes all the prev style atribs and assigne only the new attrib given

console.log(title.getAttribute('id'))
title.setAttribute('id','Name of New title')
console.log(title.getAttribute('id'))



//Constructive method to change css
console.log(title.style);                 //this is js helper
console.log(title.style.color);
title.style.margin='50px';            //note the syntax
title.style.color='Crimson';
title.style.fontSize='30px';    //camelcase for Font-size
title.style.margin='';              //empty strng delets val

console.log(title.style.fontSize);