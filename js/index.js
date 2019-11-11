const imgBtn = document.querySelector('#img');
const share = document.querySelector('.share');
const imgs = document.querySelectorAll('img');
const card = document.querySelector('.card');
const close = document.querySelector('.close');

function closeShareButtons(){
    if(share.style.transform === 'translateY(-21vh)'){
        share.style.transform = 'translateY(42vh)';
        close.style.visibility = 'hidden';
        imgs.forEach(image => image.style.opacity = '.2');
        imgBtn.style.opacity = '1';
    }
}

function shareButtons(){
    share.style.transform = 'translateY(-21vh)';
    imgs.forEach(image => image.style.opacity = '1');
    close.style.visibility = 'visible';
    console.log(share.style.transform);
}

// imgBtn.addEventListener('click', myFunc);



