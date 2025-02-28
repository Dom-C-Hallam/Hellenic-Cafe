//let carts = document.querySelectorAll('.add-cart');

let basket = [

];

/*let products =[
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

];*/


function addToBasket(name, price) {
    console.log("hello from add to basket");
    let product = {name, price};
    basket.push(product);

    for (let i=0; i < basket.length; i++) {
        console.log(basket[i]);
    }
    let basketString = JSON.stringify(basket);
    console.log(basketString);
    localStorage.setItem("basket", basketString);
    /*let basket = JSON.parse(sessionStorage.getItem("basket")) || [];
    basket.push({ name, price });
    sessionStorage.setItem("basket", JSON.stringify(basket));
    alert(`${name} has been added to the cart!`);*/
};

function displayCart() {
    console.log("hello from displayCart");

    let currentBasket = localStorage.getItem("basket");
   
    let parsedBasket = JSON.parse(currentBasket);
    console.log(parsedBasket);
    // Loop through parsedBasket
    // for each loop add an entry to the table
    // use the index to get the name and price from parsed basket
    //
    let content = document.getElementById("test-container" );
    content.innerHTML = parsedBasket[0].name;

};


/*function deleteFromBasket(productIndex) {
    let product = products [productIndex]
    basket.slice(product);
};*/



