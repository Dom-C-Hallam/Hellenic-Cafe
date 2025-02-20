
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

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost'); 

    console.log("My cartCost is", cartCost); 
    console.log(typeof cartCost );
    if (cartCost !== null) { 
        
        cartCost = parseFloat(cartCost); localStorage.setItem("totalCost", cartCost + product.price); 

        } else { localStorage.setItem("totalCost", product.price); 

        } 
    }


