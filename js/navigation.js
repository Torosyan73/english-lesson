const openMobNav = document.querySelector('.open-mobile-menu');
const closeMobNav = document.querySelector('.close-mobile-menu');
const navigationNav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');
const body = document.body;

openMobNav.addEventListener('click', function() {
    navigationNav.classList.add('nav--show');
    body.classList.add('modal-open');
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            navigationNav.classList.remove('nav--show');
            body.classList.remove('modal-open');
        });
    });

});

closeMobNav.addEventListener('click', function() {
    navigationNav.classList.remove('nav--show');
    body.classList.remove('modal-open');
});
 