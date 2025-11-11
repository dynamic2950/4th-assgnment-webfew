const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

//MOBILE MENU TOGGLE

menuBtn.addEventListener('click' , function() {
    navLinks.classList.toggle('active');

});

//CLOSE MENU TOGGLE ON LINK CLICK


document.querySelectorAll('.nav-links a').forEach( link => {
    link.addEventListener('click' , function() {
        navLinks.classList.remove('active');

    const icon = menuBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
    });
});