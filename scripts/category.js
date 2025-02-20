const products =[
    {
        name: 'Baklava',
        tag: 'baklavabrown',
        price: 4.50,
    },

    {
        name: 'Pistachio Baklava',
        tag: 'baklava',
        price: 4.50,
    },

    {
        name: 'Cheesecake',
        tag: 'cheesecake',
        price: 2.50,
    },

    {
        name: 'Loukoumades',
        tag: 'loukoumades',
        price: 2.50,
    },

    {
        name: 'Spanakopita',
        tag: 'spanakopita',
        price: 3.75,
    },

    {
        name: 'Koulourakia',
        tag: 'koulourakia',
        price: 1.75,
    },

    {
        name: 'Cappcuino',
        tag: 'cappucino',
        price: 3.75,
    },

    {
        name: 'Americano',
        tag: 'coffee',
        price: 2.75,
    },

    {
        name: 'Latte',
        tag: 'latte',
        price: 3.75,
    },

    {
        name: 'Frappe',
        tag: 'frappe',
        price: 3.75,
    },

    {
        name: 'Iced Tea',
        tag: 'icedtea',
        price: 3.75,
    },

]

document.addEventListener("DOMContentLoaded", function () {

    const menuContainer = document.getElementById("menu-container");

    products.forEach(product => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("menu-item-image-container");

        const img = document.createElement("img");
        img.classList.add("menu-image");
        img.src = `images/${product.tag}.jpg`;
        img.alt = `An image of ${product.name}`;

        const textContainer = document.createElement("div");
        textContainer.classList.add("menu-item-text-container");

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("menu-item-name");
        nameSpan.textContent = product.name.toUpperCase();

        const priceSpan = document.createElement("span");
        priceSpan.classList.add("menu-item-price");
        priceSpan.textContent = `£${product.price.toFixed(2)}`;

        const button = document.createElement("button");
        button.classList.add("add-cart");
        button.textContent = "Add to cart";
        button.addEventListener("click", () => addToCart(product.tag));

        textContainer.appendChild(nameSpan);
        textContainer.appendChild(priceSpan);
        textContainer.appendChild(button);
        imgContainer.appendChild(img);
        menuItem.appendChild(imgContainer);
        menuItem.appendChild(textContainer);

        menuContainer.appendChild(menuItem);
    });

});

