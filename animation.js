const button=document.querySelector('.menu-button');
const mobileLeft=document.querySelector('.mobile__left');
const mobileRight=document.querySelector('.mobile__right');

button.addEventListener("click", function(){
    mobileLeft.classList.toggle('openMenu');
    mobileRight.classList.toggle('openMenu');
});