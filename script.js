// Mini panier interactif
const addCartButtons = document.querySelectorAll('.add-cart');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const closeCartBtn = document.getElementById('close-cart');
let items = [];

addCartButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const product = btn.parentElement;
        const name = product.querySelector('h3').textContent;
        const price = product.querySelector('.price').textContent;
        items.push({ name, price });
        updateCart();
        cart.classList.remove('cart-hidden');
        cart.style.display = 'block';
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    if (items.length === 0) {
        cartItems.innerHTML = '<li>Le panier est vide... comme les chances de Naël de finir 1er !</li>';
    } else {
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(li);
        });
    }
}

closeCartBtn.addEventListener('click', () => {
    cart.classList.add('cart-hidden');
    cart.style.display = 'none';
});
