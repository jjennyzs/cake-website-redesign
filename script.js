let menuOpen = false;
let megaOpen = false;

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-mobile');
const menuButton = document.getElementById('menu-button');
const mega = document.getElementById('menu-desktop');

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
      mega.className = mega.className + ' sm-g-4 '

   } else {
      mega.className = mega.className + ' sm-hide';
      mega.className = mega.className.replace(' sm-g-4', '')

   }
   console.log(megaOpen);
}

hamburger.addEventListener('click', toggleMenu);
menuButton.addEventListener('click', toggleMega)