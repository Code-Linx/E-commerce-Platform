const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");

// Simulated product data
const products = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 25 },
];

// Simulated shopping cart
let shoppingCart = [];

// Display products
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price}$</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(productCard);
});

// Add product to cart
function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  shoppingCart.push(selectedProduct);
  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  shoppingCart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price}$`;
    cartItems.appendChild(listItem);
  });
}

// Checkout function (you can customize this based on your needs)
function checkout() {
  alert("Thank you for your purchase!");
  shoppingCart = []; // Reset the shopping cart
  updateCart();
}
