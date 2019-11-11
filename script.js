const imgBtn = document.querySelector('#img');
const share = document.querySelector('.share');
const imgs = document.querySelectorAll('img');
const card = document.querySelector('.card');
const close = document.querySelector('.close');

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

// imgBtn.addEventListener('click', myFunc);




