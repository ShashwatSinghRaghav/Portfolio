/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1500,
    reset: false
});

/*===========Service==============*/

const modalViews = document.querySelectorAll('.services__modal'),modalBtns = document.querySelectorAll('.services__button'),modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.casestudy__container',{delay: 400}); 
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__subtitle1',{delay: 400}); 
sr.reveal('.about__text',{delay: 400});
sr.reveal('.wrapper',{delay: 400}); 
sr.reveal('.box',{delay: 400}); 
sr.reveal('.about_subtitle_container',{delay: 400}); 
sr.reveal('.footer',{delay: 400}); 

// footer

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*services*/
sr.reveal('.work__container',{interval: 200}); 



/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




