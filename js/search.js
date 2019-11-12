import { recipeList } from './list.js';
export {searchRecipes};
const userInput = document.querySelector('#recipe-search');
const display = document.querySelector('.search-results');


function displayResults(arr){
    
    // console.log('first',arr[0]);
    // console.log('second',arr[1]);
    for(let i=0; i< arr.length; i++){
        // console.log(arr[i]);
        let a = document.createElement('a');
        let p = document.createElement('p');
        let textNode = document.createTextNode(arr[i]);
        a.setAttribute('href', `${arr[i]}-recipe.html`);
        p.setAttribute('class', 'results');
        a.appendChild(textNode);
        p.appendChild(a);
        display.appendChild(p);
        // console.log(display);
        
    }
    // let results = str.split(',');
    // console.log('received arr',arr);
    // arr.forEach(match => {
        
    //     let textNode = document.createTextNode(match);
    //     a.appendChild(textNode);
    //     p.appendChild(a);
    //     display.appendChild(p);
    //     a.setAttribute('href', '#');
    // });

    
    

}
function searchRecipes(e){
    if(window.location.pathname !== '/recipes/search-page.html'){
        window.location.pathname.assign('/recipes/search-page.html')
    }
    if(e.which === 13 && userInput.value !== ''){
        let haveIt = false;
        let results = [];
            recipeList.forEach(recipe => {
                if(recipe.toUpperCase().includes(userInput.value.toUpperCase())){
                    haveIt = true;
                    results.push(recipe);
                    // results.push(recipe.split(','));
                    // console.log(results);
                    // window.location = 'www.google.com';
                }
            });
            if(haveIt === false){
                alert(`Sorry, we don't have that in our database yet. But we'll log this in and include it soon.`);
            }
            displayResults(results);
        };

}
userInput.addEventListener('keypress', searchRecipes);
// console.log(recipeList);