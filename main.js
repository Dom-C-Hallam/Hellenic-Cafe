let carts = document.querySelectorAll('.add-cart');

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

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);

   if(cartItems != null) {

    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
        cartItems[product.tag].inCart += 1;
   } else {
    product.inCart = 1;
    cartItems = {
        [product.tag]: product
    }
   }
   

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();