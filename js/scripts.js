'use strict'

window.addEventListener('load',()=>{
    const menu = document.querySelector('#hamburguer');
    const nav = document.querySelector('.nav');
    const drop = document.querySelectorAll('.dropBtn');
    const dropContent = document.querySelectorAll('.dropContent');
    menu.addEventListener('click',()=>{
        menu.classList.toggle('open');
        nav.classList.toggle('openMenu');

    });
    for(let i = 0; drop.length; i++){
       drop[i].addEventListener('click',()=>{
           console.log(drop[i]);
           dropContent[i].classList.toggle('max-height');
           console.log(dropContent[2]);
       });

    }
   


});