let menuOpen = false;
let megaOpen = false;

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-mobile');
const menuButton = document.getElementById('menu-button');
const mega = document.getElementById('menu-desktop');
const addCart = document.getElementById('add-to-cart');
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


if (hamburger) hamburger.addEventListener('click', toggleMenu);
if (menuButton) menuButton.addEventListener('click', toggleMega);
if (addCart) addCart.addEventListener('click', () => alert('Item added to cart!'));
if (backButton) {
   setInterval(() => changePic(1), 2000);
   backButton.addEventListener('click', () => changePic(-1));
}
if (nextButton) nextButton.addEventListener('click', () => changePic(1))

const checkOutButton = document.getElementById('checkout-btn');

checkOutButton.addEventListener('click', () => alert('Proceeding to payment page...'))


//Code by Samrat begins here//

const cakes = [
   { id: 1, name: "Chocolate Cake", description: "Rich and moist chocolate cake", price: 25.99, image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 2, name: "Vanilla Cake", description: "Classic vanilla cake with buttercream frosting", price: 22.99, image: "https://images.pexels.com/photos/3071821/pexels-photo-3071821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 3, name: "Red Velvet Cake", description: "Red velvet cake with cream cheese frosting", price: 27.99, image: "https://images.pexels.com/photos/15071192/pexels-photo-15071192/free-photo-of-close-up-shot-of-a-slice-of-yummy-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

function displayCakes() {
   const cakesContainer = document.getElementById('cakes');
   cakesContainer.innerHTML = '';

   cakes.forEach(cake => {
      const card = document.createElement('div');
      card.classList.add('cake-card');
      card.innerHTML = `
                   <div class="cake-image-container">
                       <img src="${cake.image}" alt="${cake.name}" class="cake-image">
                   </div>
                   <div class="cake-info">
                       <h3>${cake.name}</h3>
                       <p>${cake.description}</p>
                       <p>$${cake.price.toFixed(2)}</p>
                       <button class="px-8 rounded-lg" onclick="addToCart(${cake.id})"><h5>Add to Cart</h5></button>
                   </div>
               `;
      cakesContainer.appendChild(card);
   });
}

function addToCart(cakeId) {
   const cakeToAdd = cakes.find(cake => cake.id === cakeId);
   if (cakeToAdd) {
      const existingItem = cart.find(item => item.id === cakeToAdd.id);
      if (existingItem) {
         existingItem.quantity++;
      } else {
         cart.push({ ...cakeToAdd, quantity: 1 });
      }
      updateCart();
   }
}

function removeFromCart(cakeId) {
   const index = cart.findIndex(item => item.id === cakeId);
   if (index !== -1) {
      if (cart[index].quantity > 1) {
         cart[index].quantity--;
      } else {
         cart.splice(index, 1);
      }
      updateCart();
   }
}

function updateCartTotal() {
   const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
   document.getElementById('cart-total').textContent = total.toFixed(2);
}

function updateCart() {
   const cartItemsContainer = document.getElementById('cart-items');
   cartItemsContainer.innerHTML = '';

   cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
                   <span>${item.name} x ${item.quantity}</span>
                   <span>$${(item.price * item.quantity).toFixed(2)}</span>
                   <button id="remove" class="rounded-lg" onclick="removeFromCart(${item.id})">Remove</button>
               `;
      cartItemsContainer.appendChild(cartItem);
   });

   updateCartTotal();
}

displayCakes();

let cart = [];
