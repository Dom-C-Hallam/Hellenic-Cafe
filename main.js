let carts = document.querySelectorAll('.add-cart');

let basket = [

];

let products =[
    {
        name: 'Baklava',
        tag: 'baklavabrown',
        price: 4.50,
        inCart: 0,
    },

    {
        name: 'Pistachio Baklava',
        tag: 'baklava',
        price: 4.50,
        inCart: 0,
    },

    {
        name: 'Cheesecake',
        tag: 'cheesecake',
        price: 2.50,
        inCart: 0,
    },

    {
        name: 'Loukoumades',
        tag: 'loukoumades',
        price: 2.50,
        inCart: 0,
    },

    {
        name: 'Spanakopita',
        tag: 'spanakopita',
        price: 3.75,
        inCart: 0,
    },

    {
        name: 'Koulourakia',
        tag: 'koulourakia',
        price: 1.75,
        inCart: 0,
    },

    {
        name: 'Cappcuino',
        tag: 'cappucino',
        price: 3.75,
        inCart: 0,
    },

    {
        name: 'Americano',
        tag: 'coffee',
        price: 2.75,
        inCart: 0,
    },

    {
        name: 'Latte',
        tag: 'latte',
        price: 3.75,
        inCart: 0,
    },

    {
        name: 'Frappe',
        tag: 'frappe',
        price: 3.75,
        inCart: 0,
    },

    {
        name: 'Iced Tea',
        tag: 'icedtea',
        price: 3.75,
        inCart: 0,
    },

]
function addToBasket(productIndex) {
    let product = products [productIndex]
    basket.push(product);
};

function deleteFromBasket(productIndex) {
    let product = products [productIndex]
    basket.slice(product);
};

addToBasket(3)
deleteFromBasket(0)


