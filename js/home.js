console.log('Script working');

const navIcon = document.querySelector('.nav-container');
const nav = document.querySelector('.navigation');
const navExit = document.querySelector('.exit');

navIcon.addEventListener('click', (e) => {
    e.preventDefault();
    nav.style.transform = 'scaleY(1)';
    console.log('click');
});

navExit.addEventListener('click', (e) => {
    e.preventDefault()
    nav.style.transform = 'scaleY(0)';
});
