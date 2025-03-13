let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(name, price) {
    console.log("hello from add to basket");
    let product = { name, price };
    basket.push(product);

    localStorage.setItem("basket", JSON.stringify(basket));
    alert(`${name} has been added to the cart!`);

    displayCart();
}

function displayCart() {
    console.log("hello from displayCart");

    let currentBasket = localStorage.getItem("basket");
    let totalPrice = document.getElementById("total-price");
    let parsedBasket = JSON.parse(currentBasket) || [];
    
    let content = document.getElementById("cart-tbody");
    content.innerHTML = "";

    let total = 0;

    parsedBasket.forEach((item, index) => {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        let priceCell = document.createElement("td");
        priceCell.textContent = item.price;

        let removeCell = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeFromBasket(index);
        };

        removeCell.appendChild(removeButton);
        
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(removeCell);
        
        content.appendChild(row);

        total += parseFloat(item.price);
    });

    totalPrice.textContent = total.toFixed(2);
}

function removeFromBasket(index) {
    basket.splice(index, 1); 
    localStorage.setItem("basket", JSON.stringify(basket)); 
    displayCart(); 
}

function deleteFromBasket(name, price) {
    localStorage.removeItem("basket"); 
    document.getElementById("cart-tbody").innerHTML="" 
    document.getElementById("total-price").textContent="0.00"; 
          
}


