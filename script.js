// const mobileMenu = document.querySelector('.mobile-menu');
// const imgBtn = document.querySelector('#img');
const share = document.querySelector('.share');
const imgs = document.querySelectorAll('img');
const card = document.querySelector('.card');
const close = document.querySelector('.close');


// function showMenu(e){
//     if(mobileMenu.style.display === 'none'){
//         console.log('it is none' ,mobileMenu.style.display);
//         mobileMenu.style.display = 'block';

//     }else{
//         console.log('it is block', mobileMenu.style.display);
//         mobileMenu.style.display = 'none';
//     }
// }
function closeShareButtons(){
    if(share.style.position === 'absolute'){
        share.style.position = '';
        close.style.visibility = 'hidden';
    }
}
function shareButtons(){
    share.style.position = 'absolute';
    imgs.forEach(image => image.style.opacity = '1');
    close.style.visibility = 'visible';

}
function myFunc(){
    window.print();
}
// imgBtn.addEventListener('click', myFunc);
// card.addEventListener('click', closeShareButtons);



