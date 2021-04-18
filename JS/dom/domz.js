/* const content=document.querySelector('p')
console.log(content.classList);
content.classList.add('fail');
content.classList.remove('fail');
 */
// 

const paras=document.querySelectorAll('p');

paras.forEach(i=>{
    if (i.textContent.includes('fail')){
        i.classList.add('fail');

    }
    if (i.textContent.includes('pass')){
        i.classList.add('pass');
        
    }
    if(i.textContent.includes('bhai')){
        i.classList.add('bhai')
    }
})


const title=document.querySelector('.title');
title.classList.toggle('test');//changing title id

console.log(title.classList)

const linker=document.querySelectorAll('a')
linker[0].setAttribute('href','https://egghead.io/');
linker[0].innerText="goto egghead"

linker[1].setAttribute('href','https://steampowered.com/');
linker[1].innerText="goto steam"

linker.forEach(aTags=>{
    aTags.setAttribute('target','_blank')
})