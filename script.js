const menu = document.getElementsByClassName('nav-menu')[0],
    hamburger = document.getElementsByClassName('hamburger')[0],
    navLinks = document.querySelectorAll('.nav-links');
    
hamburger.addEventListener('click' , showMenu);
navLinks.forEach(n => n.addEventListener('click' , closeMenu));
function showMenu() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    
}

function closeMenu() {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
}