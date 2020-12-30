const toggleMenu = document.querySelector('#toggle');
const navbar = document.querySelector('.navbar');
const contents = document.querySelector('.contants');


toggleMenu.addEventListener('click', hideNavbar);

function hideNavbar(){
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none'
    }
}