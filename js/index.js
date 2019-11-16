import { recipeList } from './list.js';

const imgBtn = document.querySelector('#img');
const share = document.querySelector('.share');
const imgs = document.querySelectorAll('img');
const card = document.querySelector('.card');
const close = document.querySelector('.close');
const shareBtn = document.querySelector('#shareBtn');
const printBtn = document.querySelector('#printBtn');
const userInputIndex = document.querySelector('#recipe-search');
const findBtn = document.querySelector('#findBtn');

function closeShareButtons(){
    if(share.style.transform === 'translateY(-21vh)'){
        share.style.transform = 'translateY(42vh)';
        close.style.visibility = 'hidden';
        imgs.forEach(image => image.style.opacity = '.2');
        imgBtn.style.opacity = '1';
        share.style.background = '' ;
    }
}

function shareButtons(){
    share.style.transform = 'translateY(-21vh)';
    share.style.background = 'rgba(0, 0, 0, 0.705)';
    imgs.forEach(image => image.style.opacity = '1');
    close.style.visibility = 'visible';
}

function randomRecipe(){
    let rando = Math.floor(Math.random() * recipeList.length);
    window.location.assign(`recipes/${recipeList[rando]}-recipe.html`);
}
function printPage(){
    window.print();
}
function searchPage(e){
    if(e.which===13 && e.target.value !== ''){
        sessionStorage.setItem('foodSearch', e.target.value);
        location.assign('/recipes/search-page.html');
    }
    
}
function searchPageFromBtn(){
    if(userInputIndex.value !== ''){
        sessionStorage.setItem('foodSearch', userInputIndex.value);
        location.assign('/recipes/search-page.html');
    }else{
        alert('Please enter a search term');
    }
}

imgBtn.addEventListener('click', randomRecipe);
shareBtn.addEventListener('click', shareButtons);
printBtn.addEventListener('click', printPage);
close.addEventListener('click', closeShareButtons);
userInputIndex.addEventListener('keypress' ,searchPage);
findBtn.addEventListener('click', searchPageFromBtn);




