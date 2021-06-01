'use strict'

window.addEventListener('load',()=>{
    var scWidth = screen.width;
    console.log(scWidth)
    const secImg = document.querySelector('#secImg');
    const secImg3 = document.querySelector('#secImg3');
    const menu = document.querySelector('#hamburguer');
    const nav = document.querySelector('.nav');
    const drop = document.querySelectorAll('.dropBtn');
    const dropContent = document.querySelectorAll('.dropContent');
    
    menu.addEventListener('click',()=>{
        menu.classList.toggle('open');
        nav.classList.toggle('openMenu');

    });
    for(let i = 0; i < drop.length; i++){
       drop[i].addEventListener('click',()=>{
           console.log(drop[i]);
           dropContent[i].classList.toggle('max-height');
           console.log(dropContent[2]);
       });

    }//MEnu drop
   
    
    if(scWidth < 768){
        secImg.setAttribute('src','img/illustration-editor-mobile.svg');
    }else{
        secImg.setAttribute('src','img/illustration-editor-desktop.svg')
        secImg3.setAttribute('src', 'img/illustration-laptop-desktop.svg');

    }
    console.log(secImg3);

});