//let carts = document.querySelectorAll('.add-cart');

let basket = [

];

let products =[
    {
        name: 'Baklava',
        price: 4.50,
    },

    {
        name: 'Pistachio Baklava',
        price: 4.50,
    },

    {
        name: 'Cheesecake',
        price: 2.50,
    },

    {
        name: 'Loukoumades',
        price: 2.50,
    },

    {
        name: 'Spanakopita',
        price: 3.75,
    },

    {
        name: 'Koulourakia',
        price: 1.75,
    },

    {
        name: 'Cappcuino',
        price: 3.75,
    },

    {
        name: 'Americano',
        price: 2.75,
    },

    {
        name: 'Latte',
        price: 3.75,
    },

    {
        name: 'Frappe',
        price: 3.75,
    },

    {
        name: 'Iced Tea',
        price: 3.75,
    },

];


function addToBasket(name, price) {

    let basket = JSON.parse(sessionStorage.getItem("basket")) || [];
    basket.push({ name, price });
    sessionStorage.setItem("basket", JSON.stringify(basket));
    alert(`${name} has been added to the cart!`);
};

console.log(basket);

/*function deleteFromBasket(productIndex) {
    let product = products [productIndex]
    basket.slice(product);
};*/



