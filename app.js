// Sample products (add more up to 50+)
const products = [
  // Electronics
  { id: 1, name: "Smartphone", price: 15000, category: "electronics", image: "images/product1.jpg" },
  { id: 2, name: "Laptop", price: 60000, category: "electronics", image: "images/product2.jpg" },
  { id: 3, name: "Headphones", price: 5000, category: "electronics", image: "images/product3.jpg" },
  { id: 4, name: "Camera", price: 10000, category: "electronics", image: "images/product4.jpg" },
  { id: 5, name: "Smartwatch", price: 7500, category: "electronics", image: "images/product5.jpg" },
  { id: 6, name: "Tablet", price: 8700, category: "electronics", image: "images/product6.jpg" },
  { id: 7, name: "Gaming Console", price: 4500, category: "electronics", image: "images/product7.jpg" },
  { id: 8, name: "Bluetooth Speaker", price: 1500, category: "electronics", image: "images/product8.jpg" },
  { id: 9, name: "Desktop PC", price: 5000, category: "electronics", image: "images/product9.jpg" },
  { id: 10, name: "Drone", price: 25000, category: "electronics", image: "images/product10.jpg" },

  // Clothing - Dresses, Shirts, Pants, Shoes
  { id: 11, name: "T-Shirt", price: 200, category: "clothing", image: "images/product11.jpg" },
  { id: 12, name: "Jeans", price: 750, category: "clothing", image: "images/product12.jpg" },
  { id: 13, name: "Summer Dress", price: 670, category: "clothing", image: "images/product13.jpg" },
  { id: 14, name: "Jacket", price: 900, category: "clothing", image: "images/product14.jpg" },
  { id: 15, name: "Sneakers", price: 1000, category: "clothing", image: "images/product15.jpg" },
  { id: 16, name: "Formal Shirt", price: 650, category: "clothing", image: "images/product16.jpg" },
  { id: 17, name: "Skirt", price: 580, category: "clothing", image: "images/product17.jpg" },
  { id: 18, name: "Blazer", price: 1100, category: "clothing", image: "images/product18.jpg" },
  { id: 19, name: "Hoodie", price: 1700, category: "clothing", image: "images/product19.jpg" },
  { id: 20, name: "Heels", price: 800, category: "clothing", image: "images/product20.jpg" },

  // Household Items
  { id: 21, name: "Sofa", price: 7000, category: "household", image: "images/product21.jpg" },
  { id: 22, name: "Dining Table", price: 5000, category: "household", image: "images/product22.jpg" },
  { id: 23, name: "Chair Set", price: 1500, category: "household", image: "images/product23.jpg" },
  { id: 24, name: "Bed Frame", price: 6000, category: "household", image: "images/product24.jpg" },
  { id: 25, name: "Mattress", price: 1500, category: "household", image: "images/product25.jpg" },
  { id: 26, name: "Refrigerator", price: 9000, category: "household", image: "images/product26.jpg" },
  { id: 27, name: "Microwave Oven", price: 1800, category: "household", image: "images/product27.jpg" },
  { id: 28, name: "Washing Machine", price: 7500, category: "household", image: "images/product28.jpg" },
  { id: 29, name: "Vacuum Cleaner", price: 2500, category: "household", image: "images/product29.jpg" },
  { id: 30, name: "Air Conditioner", price: 12000, category: "household", image: "images/product30.jpg" },

  // More Clothing
  { id: 31, name: "Winter Coat", price: 1500, category: "clothing", image: "images/product31.jpg" },
  { id: 32, name: "Cap", price: 250, category: "clothing", image: "images/product32.jpg" },
  { id: 33, name: "Saree", price: 600, category: "clothing", image: "images/product33.jpg" },
  { id: 34, name: "Kurta", price: 450, category: "clothing", image: "images/product34.jpg" },
  { id: 35, name: "Lehenga", price: 800, category: "clothing", image: "images/product35.jpg" },
  { id: 36, name: "Kurti", price: 550, category: "clothing", image: "images/product36.jpg" },
  { id: 37, name: "Sandals", price: 650, category: "clothing", image: "images/product37.jpg" },
  { id: 38, name: "Sports Shoes", price: 1000, category: "clothing", image: "images/product38.jpg" },
  { id: 39, name: "Ethnic Dress", price: 1200, category: "clothing", image: "images/product39.jpg" },
  { id: 40, name: "Kids Dress", price: 450, category: "clothing", image: "images/product40.jpg" },

  // Books
  { id: 41, name: "Fiction Novel", price: 250, category: "books", image: "images/product41.jpg" },
  { id: 42, name: "Science Textbook", price: 600, category: "books", image: "images/product42.jpg" },
  { id: 43, name: "History Book", price: 900, category: "books", image: "images/product43.jpg" },
  { id: 44, name: "Cookbook", price: 550, category: "books", image: "images/product44.jpg" },
  { id: 45, name: "Children’s Story Book", price: 200, category: "books", image: "images/product45.jpg" },
  { id: 46, name: "Comic Book", price: 150, category: "books", image: "images/product46.jpg" },
  { id: 47, name: "Programming Guide", price: 700, category: "books", image: "images/product47.jpg" },
  { id: 48, name: "Self Help Book", price: 350, category: "books", image: "images/product48.jpg" },
  { id: 49, name: "Travel Guide", price: 280, category: "books", image: "images/product49.jpg" },
  { id: 50, name: "Art Book", price: 400, category: "books", image: "images/product50.jpg" },

  // Extra Household & Gadgets
  { id: 51, name: "Mixer Grinder", price: 950, category: "household", image: "images/product51.jpg" },
  { id: 52, name: "Coffee Maker", price: 1000, category: "household", image: "images/product52.jpg" },
  { id: 53, name: "Smart TV", price: 6500, category: "electronics", image: "images/product53.jpg" },
  { id: 54, name: "Iron Box", price: 450, category: "household", image: "images/product54.jpg" },
  { id: 55, name: "Water Purifier", price: 2200, category: "household", image: "images/product55.jpg" }
];


let cart = [];

// Render products by category
function renderProducts(filterText = "", filterCategory = "all") {
  const categories = ["electronics", "clothing", "household", "books"];
  categories.forEach(cat => {
    const container = document.getElementById(cat);
    container.innerHTML = "";
    products
      .filter(p => (filterCategory === "all" || p.category === filterCategory))
      .filter(p => p.category === cat)
      .filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()))
      .forEach(p => {
        container.innerHTML += `
          <div class="product">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        `;
      });
  });
}

// Add to Cart
function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

// Remove from cart
function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  updateCart();
}

// Update cart display
function updateCart() {
  document.getElementById("cartCount").innerText = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div>
        ${item.name} - ₹${item.price} x ${item.qty}
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
  });
  cartTotal.innerText = total.toFixed(2);
}

// Search & Filter
document.getElementById("search").addEventListener("input", (e) => {
  renderProducts(e.target.value, document.getElementById("categoryFilter").value);
});
document.getElementById("categoryFilter").addEventListener("change", (e) => {
  renderProducts(document.getElementById("search").value, e.target.value);
});

// Cart modal
const cartModal = document.getElementById("cartModal");
document.getElementById("cartBtn").onclick = () => cartModal.style.display = "flex";
cartModal.querySelector(".close").onclick = () => cartModal.style.display = "none";

// Checkout modal
const checkoutModal = document.getElementById("checkoutModal");
document.getElementById("checkoutBtn").onclick = () => {
  cartModal.style.display = "none";
  checkoutModal.style.display = "flex";
};
checkoutModal.querySelector(".close").onclick = () => checkoutModal.style.display = "none";

// Checkout form
document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully! Thank you for shopping with MYWISH.");
  cart = [];
  updateCart();
  checkoutModal.style.display = "none";
});

// Initial render
renderProducts();
