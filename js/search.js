import { recipeList } from './list.js';
export default {searchRecipes};

const userInput = document.querySelector('#recipe-search');
const display = document.querySelector('.search-results');
let foodSearch = sessionStorage.getItem('foodSearch');


function ifFromIndexSearch(){
    if(foodSearch === null){
        return;
    }else{
        let haveIt = false;
        let results = [];
            recipeList.forEach(recipe => {
                if(recipe.toUpperCase().includes(foodSearch.toUpperCase())){
                    haveIt = true;
                    results.push(recipe);
                }
            });
            if(haveIt === false){
                alert(`Sorry, we don't have that in our database yet. But we'll log this in and include it soon.`);
            }
            displayResults(results);

    }
}

function displayResults(arr){
    display.textContent = '';
    for(let i=0; i< arr.length; i++){
        let a = document.createElement('a');
        let p = document.createElement('p');
        let textNode = document.createTextNode(arr[i]);
        a.setAttribute('href', `/recipes/${arr[i]}-recipe.html`);
        p.setAttribute('class', 'results');
        a.appendChild(textNode);
        p.appendChild(a);
        display.appendChild(p); 
    }
}
function searchRecipes(e){
    if(e.which === 13 && userInput.value !== ''){
        let haveIt = false;
        let results = [];
            recipeList.forEach(recipe => {
                if(recipe.toUpperCase().includes(userInput.value.toUpperCase())){
                    haveIt = true;
                    results.push(recipe);
                }
            });
            if(haveIt === false){
                alert(`Sorry, we don't have that in our database yet. But we'll log this in and include it soon.`);
            }
            displayResults(results);
        };   

}
ifFromIndexSearch();
userInput.addEventListener('keypress', searchRecipes);
