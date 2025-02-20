const cart = []


function clearCart() {
    localStorage.setItem("cart", []);
    let total = document.querySelector("#basketTotal");
    total.innerHTML = 0;
    document.querySelector('.cart span').textContent = 0;
    document.querySelector(".cart-body").innerHTML = '';
    updateCartCount();
}
function addToCart(tag) {
    const product = products.find(p => p.tag === tag);
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    debugger;
    if (product) {
        const cartItem = cartItems.find(item => item.tag === tag);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCartDisplay();
        updateCartCount();
    }
}

function getCartCount() {
    debugger;
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = getCartCount();
    }
}
function updateCartDisplay() {
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-body");
    let total = document.querySelector("#basketTotal");
    let cartCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if ( cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <tr>
            <td>
                <img class="cart-image" src="images/${item.tag}.jpg">
                <span>${item.name}</span>
            </td>
            <td>£${item.price}</td>
            <td>${item.quantity}</td>
            <td>£${item.quantity * item.price}</td>
            </tr>
            `;
        });

        // just select the total and change the value inside the element, instead or re-rendering it
        total.innerHTML = "£" + cartCost;

    }
}

window.addToCart = addToCart;
window.getCartCount = getCartCount;
window.updateCartDisplay = updateCartDisplay;

document.addEventListener("DOMContentLoaded", function () {
    updateCartDisplay();
    updateCartCount();
    if(!cart && cart.length === 0){
        let cartfill = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartfill);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    let clearCartEl = document.getElementById('clear-cart');
    if(clearCartEl)
    {
        clearCartEl.addEventListener('click', clearCart);
    }

});

