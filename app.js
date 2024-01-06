const products = [
    {
        id: 0,
        image: "course-1.png",
        name: "Modern Psychology",
        price: 1300,
    },
    {
        id: 1,
        image: "course-2.png",
        name: "Modern Psychology",
        price: 1300,
    },
    {
        id: 2,
        image: "course-3.png",
        name: "Modern Psychology",
        price: 1300,
    },
    {
        id: 3,
        image: "course-4.png",
        name: "Modern Psychology",
        price: 1300,
    },
    {
        id: 4,
        image: "course-5.png",
        name: "Modern Psychology",
        price: 1300,
    },
    {
        id: 5,
        image: "course-6.png",
        name: "Modern Psychology",
        price: 1300,
    }
];

let cart = [];

function addtocart(id) {
    const productToAdd = products[id];
    cart.push(productToAdd);
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    const cartContainer = document.getElementById("cartItem");
    const subtotalContainer = document.getElementById("Sub-Total");
    const cartCount = document.getElementById("count");

    if (cart.length === 0) {
        cartContainer.innerHTML = "Your cart is empty";
        subtotalContainer.innerHTML = "$ " + total + ".00";
        cartCount.innerHTML = cart.length;
    } else {
        cartContainer.innerHTML = "";
        cartCount.innerHTML = cart.length;

        cart.forEach((item, index) => {
            const { image, name, price } = item;
            total += price;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size: 12px;'>${name}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            `;

            cartContainer.appendChild(cartItem);
        });

        subtotalContainer.innerHTML = "$ " + total + ".00";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const productListContainer = document.getElementById('root');
    const categories = [...products];

    productListContainer.innerHTML = categories.map((item, index) => {
        const { image, name, price } = item;

        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image} alt="${name}">
                </div>
                <div class='bottom'>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addtocart(${index})'>Add to cart</button>
                </div>
            </div>
        `;
    }).join('');
});
