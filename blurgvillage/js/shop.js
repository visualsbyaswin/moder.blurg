const products = [
  {
    id: 1,
    name: "nike hat",
    price: 499,
    image: "images/product1.jpg",
    badge: "New",
  },
  {
    id: 2,
    name: "Vintage Tee",
    price: 399,
    image: "images/product2.jpg",
    badge: "Sale",
  },
  { id: 3, name: "Classic shirt", price: 599, image: "images/product3.jpg" },
  { id: 4, name: "Retro chain", price: 449, image: "images/product4.jpg" },
  {
    id: 5,
    name: "old watch",
    price: 699,
    image: "images/product5.jpg",
    badge: "Hot",
  },
  { id: 6, name: "Vintage rings", price: 349, image: "images/product6.jpg" },
  { id: 7, name: "Classic chains", price: 549, image: "images/product7.jpg" },
  {
    id: 8,
    name: "Retro baggy",
    price: 499,
    image: "images/product8.webp",
    badge: "New",
  },
  {
    id: 9,
    name: "Track pant",
    price: 499,
    image: "images/product11.jpg",
    badge: "New",
  },
  {
    id: 10,
    name: "Vtg tshirt",
    price: 299,
    image: "images/product9.jpg",
    badge: "New",
  },
  {
    id: 11,
    name: "Vtg tshirt",
    price: 199,
    image: "images/product10.jpg",
    badge: "New",
  },
  {
    id: 12,
    name: "Vtg tshirt",
    price: 199,
    image: "images/product12.jpg",
    badge: "New",
  },
  {
    id: 13,
    name: "Vtg tshirt",
    price: 199,
    image: "images/product13.jpg",
    badge: "New",
  },
  {
    id: 14,
    name: "winter tshirt",
    price: 199,
    image: "images/product14.jpg",
    badge: "New",
  },
];





let cart = 0;

// Render Products
const productGrid = document.getElementById("productGrid");
products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
                <div class="product-image">
                        <a href="checkout.html">
     <img src="${product.image}" alt="${product.name}">
        </a>
                  
                    ${
                      product.badge
                        ? `<div class="product-badge">${product.badge}</div>`
                        : ""
                    }
                    <button class="quick-view">Quick View</button>
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">₹${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${
                      product.id
                    })">Add to Cart</button>
                </div>
            `;
  productGrid.appendChild(card);
});





function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
