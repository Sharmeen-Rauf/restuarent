// Menu Data
const menuData = {
    all: [
        {
            id: 1,
            name: "Original Fried Chicken",
            description: "Crispy, golden fried chicken with our signature spice blend",
            price: "Rs. 450",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Original+Fried+Chicken",
            category: "chicken"
        },
        {
            id: 2,
            name: "Spicy Fried Chicken",
            description: "Extra spicy fried chicken for heat lovers",
            price: "Rs. 480",
            image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Spicy+Fried+Chicken",
            category: "chicken"
        },
        {
            id: 3,
            name: "Classic Burger",
            description: "Juicy chicken patty with fresh vegetables and special sauce",
            price: "Rs. 350",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Classic+Burger",
            category: "burgers"
        },
        {
            id: 4,
            name: "Chicken Wrap",
            description: "Tender chicken wrapped in soft tortilla with veggies",
            price: "Rs. 380",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Chicken-Wrap",
            category: "wraps"
        },
        {
            id: 5,
            name: "Chicken Biryani",
            description: "Fragrant basmati rice with succulent chicken pieces",
            price: "Rs. 550",
            image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Chicken+Biryani",
            category: "rice"
        },
        {
            id: 6,
            name: "Family Deal",
            description: "12 pieces fried chicken with 4 sides and drinks",
            price: "Rs. 2500",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Family+Deal",
            category: "deals"
        },
        {
            id: 7,
            name: "Chicken Strips",
            description: "Crispy chicken strips served with dipping sauce",
            price: "Rs. 420",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Chicken+Strips",
            category: "chicken"
        },
        {
            id: 8,
            name: "Zinger Burger",
            description: "Spicy zinger patty with crispy coating and fresh toppings",
            price: "Rs. 420",
            image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Zinger+Burger",
            category: "burgers"
        },
        {
            id: 9,
            name: "BBQ Wrap",
            description: "Grilled chicken with BBQ sauce and fresh vegetables",
            price: "Rs. 400",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=BBQ+Wrap",
            category: "wraps"
        },
        {
            id: 10,
            name: "Chicken Rice Bowl",
            description: "Steamed rice topped with chicken and vegetables",
            price: "Rs. 480",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Rice+Bowl",
            category: "rice"
        },
        {
            id: 11,
            name: "Combo Deal",
            description: "2 pieces chicken, fries, drink, and dessert",
            price: "Rs. 650",
            image: "https://via.placeholder.com/300x200/FF6B00/FFFFFF?text=Combo+Deal",
            category: "deals"
        },
        {
            id: 12,
            name: "Hot Wings",
            description: "Spicy chicken wings served with ranch dip",
            price: "Rs. 450",
            image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Hot+Wings",
            category: "chicken"
        }
    ]
};

// State Management
let currentLocation = "Karachi";
let orderType = "delivery";
let selectedCity = null;
let cart = [];
let currentCategory = "all";

// DOM Elements
const locationBtn = document.getElementById('locationBtn');
const locationModal = document.getElementById('locationModal');
const currentLocationBtn = document.getElementById('currentLocationBtn');
const selectLocationBtn = document.getElementById('selectLocationBtn');
const cityCards = document.querySelectorAll('.city-card');
const orderTypeBtns = document.querySelectorAll('.order-type-btn');
const currentLocationDisplay = document.getElementById('currentLocation');
const cartCount = document.getElementById('cartCount');
const categoryTabs = document.querySelectorAll('.category-tab');
const menuGrid = document.getElementById('menuGrid');
const locationSearch = document.getElementById('locationSearch');

// City mapping
const cityMap = {
    'karachi': 'Karachi',
    'hyderabad': 'Hyderabad',
    'lahore': 'Lahore',
    'islamabad': 'Islamabad',
    'multan': 'Multan',
    'sialkot': 'Sialkot',
    'faisalabad': 'Faisalabad',
    'rahimyarkhan': 'Rahim Yar Khan',
    'bahawalpur': 'Bahawalpur',
    'larkana': 'Larkana'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Location Modal
    locationBtn.addEventListener('click', () => {
        locationModal.classList.add('active');
    });

    // Close modal on outside click
    locationModal.addEventListener('click', (e) => {
        if (e.target === locationModal) {
            locationModal.classList.remove('active');
        }
    });

    // Order Type Selection
    orderTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            orderTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            orderType = btn.dataset.type;
            updateSelectButton();
        });
    });

    // City Selection
    cityCards.forEach(card => {
        card.addEventListener('click', () => {
            cityCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedCity = card.dataset.city;
            updateSelectButton();
        });
    });

    // Use Current Location
    currentLocationBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    alert('Location detected! Please select your city from the list.');
                },
                () => {
                    alert('Unable to detect location. Please select manually.');
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });

    // Select Location Button
    selectLocationBtn.addEventListener('click', () => {
        if (selectedCity && cityMap[selectedCity]) {
            currentLocation = cityMap[selectedCity];
            currentLocationDisplay.textContent = currentLocation;
            locationModal.classList.remove('active');
            selectedCity = null;
            cityCards.forEach(c => c.classList.remove('active'));
            updateSelectButton();
        }
    });

    // Category Tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderMenu();
        });
    });

    // Location Search
    locationSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        cityCards.forEach(card => {
            const cityName = card.dataset.city;
            const displayName = cityMap[cityName];
            if (displayName.toLowerCase().includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && locationModal.classList.contains('active')) {
            locationModal.classList.remove('active');
        }
    });
}

// Update Select Button State
function updateSelectButton() {
    if (selectedCity && orderType) {
        selectLocationBtn.disabled = false;
    } else {
        selectLocationBtn.disabled = true;
    }
}

// Render Menu
function renderMenu() {
    let itemsToRender = menuData.all;

    if (currentCategory !== 'all') {
        itemsToRender = menuData.all.filter(item => item.category === currentCategory);
    }

    menuGrid.innerHTML = itemsToRender.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(itemId) {
    const item = menuData.all.find(i => i.id === itemId);
    if (item) {
        const existingItem = cart.find(i => i.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        updateCartCount();
        showNotification(`${item.name} added to cart!`);
    }
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Make addToCart available globally
window.addToCart = addToCart;

