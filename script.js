// Interactive Filtering for Shop Categories
const filterPills = document.querySelectorAll('.pill');
const productCards = document.querySelectorAll('.product-card');

if (filterPills.length > 0) {
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const filterValue = pill.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Search Overlay Toggle
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });
}

if (closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

// Direct WhatsApp Order Function
function orderOnWhatsApp(productName, productPrice) {
    const phoneNumber = "961XXXXXXXX"; // استبدل الرقم برقم الواتساب الخاص بالمحل
    const message = `Hello Hamdan Men's Wears! 👋\nI would like to order this item:\n\n*Product:* ${productName}\n*Price:* ${productPrice}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Wishlist interaction simulation
let wishlistCount = 0;
const cartBadge = document.getElementById('cartBadge');
const wishlistBtns = document.querySelectorAll('.wishlist-btn');

wishlistBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.color = '#000000';
            wishlistCount++;
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.color = '#000';
            wishlistCount = Math.max(0, wishlistCount - 1);
        }
        if (cartBadge) cartBadge.textContent = wishlistCount;
    });
});

// ==========================================
// Categories Slider & Arrows Engine (NEW)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('categoriesTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (track && nextBtn && prevBtn) {
        const scrollAmount = 405; // مسافة الحركة لكل كبسة

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            track.parentElement.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            track.parentElement.scrollLeft -= scrollAmount;
        });
    }
});

