import { recipeList } from './list.js';
import { searchRecipes } from './search.js';

const imgBtn = document.querySelector('#img');
const share = document.querySelector('.share');
const imgs = document.querySelectorAll('img');
const card = document.querySelector('.card');
const close = document.querySelector('.close');
const shareBtn = document.querySelector('#shareBtn');
const printBtn = document.querySelector('#printBtn');
const userInput = document.querySelector('#recipe-search');

function closeShareButtons(){
    // console.log('hmm');
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
    // console.log(share.style.transform);
}

function randomRecipe(e){
    let rando = Math.floor(Math.random() * recipeList.length);
    window.location.assign(`${recipeList[rando]}-recipe.html`);
}
function printPage(){
    window.print();
}

imgBtn.addEventListener('click', randomRecipe);
shareBtn.addEventListener('click', shareButtons);
printBtn.addEventListener('click', printPage);
close.addEventListener('click', closeShareButtons);
userInput.addEventListener('keypress' searchRecipes);



