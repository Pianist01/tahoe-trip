console.log('Script working');

const navIcon = document.querySelector('.nav-container');
const nav = document.querySelector('.navigation');
const navExit = document.querySelector('.exit');

navIcon.addEventListener('click', (e) => {
    e.preventDefault();
    nav.style.transform = 'scaleY(1)';
});

navExit.addEventListener('click', (e) => {
    e.preventDefault()
    nav.style.transform = 'scaleY(0)';
});

const eatPage = document.querySelector('.eat-page');
const naturePage = document.querySelector('.nature-page');
const funPage = document.querySelector('.fun-page');
const explorePage = document.querySelector('.explore-page');
const photoPage = document.querySelector('.photo-page');

const links = document.querySelectorAll('.page-link');

console.log(links);

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('a has been clicked');
        console.log(`Clicked at ${index}`);
        if(index === 0) {
          eatPage.style.transform = 'scaleX(1)';
          console.log('Style one');
        } else if(index === 1) {
            naturePage.style.transform = 'scaleX(1)';
            console.log('Style two');
        } else if(index === 2) {
            funPage.style.transform = 'scaleX(1)';
            console.log('Style three');
        } else if(index === 3) {
            explorePage.style.transform = 'scaleX(1)';
            console.log('Style four');
        } else if(index === 4) {
            photoPage.style.transform = 'scaleX(1)';
            console.log('Style five')
        }
    });
});
