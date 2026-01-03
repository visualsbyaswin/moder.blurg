     // Quantity selector
        const decreaseBtn = document.getElementById('decrease');
        const increaseBtn = document.getElementById('increase');
        const quantityInput = document.getElementById('quantity');

        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            const maxValue = parseInt(quantityInput.max);
            if (currentValue < maxValue) {
                quantityInput.value = currentValue + 1;
            }
        });

        // Size selection
        const sizeButtons = document.querySelectorAll('.size-btn');
        sizeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Accordion functionality
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                accordionItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Add to cart functionality
        const addToCartBtn = document.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const selectedSize = document.querySelector('.size-btn.active');
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }
            const quantity = quantityInput.value;
            alert(`Added ${quantity} x Baggy Denim Trousers (${selectedSize.textContent}) to cart!`);
        });

    const featuredproductitems=[
    {
    id: 9,
    name: "Track pant",
    price: 499,
    image: "images/product11.jpg",
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
    id: 2,
    name: "Vintage Tee",
    price: 399,
    image: "images/product2.jpg",
    badge: "Sale",
  },
  {
    id: 10,
    name: "Vtg tshirt",
    price: 299,
    image: "images/product9.jpg",
    badge: "New",
  },
]
const featuredgrid=document.getElementById("Featured-grid");
featuredproductitems.forEach((consume)=>{
  const items=document.createElement("div");
  items.className="product-card";
  items.innerHTML=
  `
                <div class="product-image">
                      <a href="checkout.html">
           <img src="${consume.image}" alt="${consume.name}">
        </a>
                  
                    ${
                      consume.badge
                        ? `<div class="product-badge">${consume.badge}</div>`
                        : ""
                    }
                    <button class="quick-view">Quick View</button>
                </div>
                <div class="product-info">
                    <div class="product-title">${consume.name}</div>
                    <div class="product-price">₹${consume.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${
                      consume.id
                    })">Add to Cart</button>
                </div>
  `

  featuredgrid.appendChild(items)
})
