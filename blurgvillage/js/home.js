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
];

let cart = 0;

// Render Products
const productGrid = document.getElementById("productGrid");
products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
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

// Add to Cart
function addToCart(id) {
  cart++;
  document.getElementById("cartCount").textContent = cart;
  document.getElementById("cart").classList.add("cart-bounce");
  setTimeout(() => {
    document.getElementById("cart").classList.remove("cart-bounce");
  }, 400);
}

// Scroll Effects
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Reveal on Scroll
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

// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Animate cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".review-card, .stat-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});
        // const lenis = new Lenis({
        //     duration: 1.2,
        //     smooth: true,
        //     smoothTouch: false
        // });

        // function raf(time) {
        //     lenis.raf(time);
        //     requestAnimationFrame(raf);
        // }

        // requestAnimationFrame(raf);


// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");
// const closeMenu = document.getElementById("closeMenu");

// // open menu
// menuToggle.addEventListener("click", () => {
//     navLinks.classList.add("active");
// });

// // close menu
// closeMenu.addEventListener("click", () => {
//     navLinks.classList.remove("active");
// });

// // close when clicking link
// document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//         navLinks.classList.remove("active");
//     });
// });


