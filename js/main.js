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

// scroll effect
//Get the button:
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 