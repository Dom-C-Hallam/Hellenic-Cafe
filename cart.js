let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(name, price) {
    console.log("hello from add to basket");
    let product = {name, price}; // Variable called product that stores the name and price of the function as values.
    basket.push(product); // This pushes the products stored as values in product to the empty array, in this case name and price.

    for (let i=0; i < basket.length; i++) {
        console.log(basket[i]);
    } 
    // Expression 1, sets the value of index to 0.
    // Expression 2, if the index is less than the length of the basket array.
    // Expression 3, increase the index by one.
    let basketString = JSON.stringify(basket); // This line turns the value of the array into a readable string.
    console.log(basketString);
    localStorage.setItem("basket", basketString);
    
    alert(`${name} has been added to the cart!`);

    displayCart(); // Added this function call to ensure the display is dynamically updated.

};

function displayCart() {
    console.log("hello from displayCart");

    let currentBasket = localStorage.getItem("basket");
    let totalPrice = document.getElementById("total-price"); 
    let parsedBasket = JSON.parse(currentBasket) || [];
    console.log(parsedBasket);
   
    let content = document.getElementById("cart-tbody");
    //content.innerHTML = parsedBasket[0].name;
    content.innerHTML = "";

    let total = 0;

    parsedBasket.forEach((item, index) => {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        let priceCell = document.createElement("td");
        priceCell.textContent = item.price; 

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        content.appendChild(row);

        total += parseFloat(item.price);

    });

    totalPrice.textContent = total.toFixed(2);
}

function deleteFromBasket(name, price) {
    localStorage.removeItem("basket");
    document.getElementById("cart-tbody");
}



