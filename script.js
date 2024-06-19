let menuOpen = false;
let megaOpen = false;

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-mobile');
const menuButton = document.getElementById('menu-button');
const mega = document.getElementById('menu-desktop');
const addToCart = document.getElementById('add-to-cart');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const display = document.getElementById('display');

const toggleMenu = () => {
   menuOpen = !menuOpen;
   if (menuOpen === true) {
      menu.className = menu.className.replace(' hidden', '');
   } else {
      menu.className = menu.className + ' hidden';
   }
}

const toggleMega = () => {
   megaOpen = !megaOpen;
   if (megaOpen === true) {
      mega.className = mega.className.replace(' sm-hide', '');
      mega.className = mega.className + ' sm-g-4 ';

   } else {
      mega.className = mega.className + ' sm-hide';
      mega.className = mega.className.replace(' sm-g-4', '');

   }
}

const addItem = () => {
   alert('Item added to cart');
}

// function addItem() {
//    alert('Item added to cart');
// }

let picIndex = 0;

const changePic = move => {
   const newIndex = picIndex += move;
   if (newIndex === 20) {
      picIndex = 0;
   } else if (newIndex === -1) {
      picIndex = 19;
   }
   display.src = './public/image/slides/' + picIndex + '.jpg';
}

setInterval(() => changePic(1), 2000);

hamburger.addEventListener('click', toggleMenu);
menuButton.addEventListener('click', toggleMega);

if (addToCart) {
   addToCart.addEventListener('click', addItem);
}

backButton.addEventListener('click', () => changePic(-1));
nextButton.addEventListener('click', () => changePic(1))