// Fundaciones Panama Page JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });
    
    // Initialize map
    initializeMap();
    
    // Initialize form handlers
    initializeForms();
    
    // Initialize donation tracking
    initializeDonationTracking();
});

// Map Initialization
function initializeMap() {
    // Panama City coordinates
    const panamaCity = [8.9824, -79.5199];
    
    // Create map
    const map = L.map('foundationsMap').setView(panamaCity, 12);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Foundation locations data
    const foundations = [
        {
            name: 'Fundación Amigos de los Animales',
            location: [8.9824, -79.5199],
            description: 'Rescate y rehabilitación de animales abandonados',
            animals: '150+',
            volunteers: '50+'
        },
        {
            name: 'Hogar de Mascotas Panamá',
            location: [8.9924, -79.5299],
            description: 'Centro de adopción y cuidado temporal',
            animals: '200+',
            volunteers: '30+'
        },
        {
            name: 'Fundación Rescate Animal',
            location: [8.9724, -79.5099],
            description: 'Protección y bienestar animal',
            animals: '100+',
            volunteers: '25+'
        }
    ];
    
    // Add markers for each foundation
    foundations.forEach(foundation => {
        const marker = L.marker(foundation.location).addTo(map);
        
        const popupContent = `
            <div class="map-popup">
                <h3>${foundation.name}</h3>
                <p>${foundation.description}</p>
                <div class="popup-stats">
                    <span><strong>Animales:</strong> ${foundation.animals}</span><br>
                    <span><strong>Voluntarios:</strong> ${foundation.volunteers}</span>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
}

// Form Initialization
function initializeForms() {
    // Donation form handler
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', handleDonationSubmit);
    }
    
    // Volunteer form handler
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', handleVolunteerSubmit);
    }
    
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Donation Form Handler
function handleDonationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const donationData = {
        name: formData.get('name'),
        email: formData.get('email'),
        amount: formData.get('amount'),
        foundation: formData.get('foundation'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('¡Gracias por tu donación! Tu apoyo hace la diferencia. ❤️', 'success');
        e.target.reset();
        
        // Track donation
        trackDonation(donationData);
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Volunteer Form Handler
function handleVolunteerSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const volunteerData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        availability: formData.get('availability'),
        interests: formData.get('interests'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('¡Gracias por tu interés en ser voluntario! Te contactaremos pronto. 🤝', 'success');
        e.target.reset();
        
        // Track volunteer signup
        trackVolunteerSignup(volunteerData);
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Contact Form Handler
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('¡Mensaje enviado! Te responderemos pronto. 📧', 'success');
        e.target.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Donation Tracking
function initializeDonationTracking() {
    // Load donation statistics
    updateDonationStats();
    
    // Update stats every 30 seconds
    setInterval(updateDonationStats, 30000);
}

function updateDonationStats() {
    // Simulate real-time donation updates
    const totalDonations = Math.floor(Math.random() * 1000) + 5000;
    const monthlyDonations = Math.floor(Math.random() * 500) + 1000;
    const volunteers = Math.floor(Math.random() * 100) + 200;
    
    // Update display if elements exist
    const totalElement = document.getElementById('totalDonations');
    if (totalElement) {
        totalElement.textContent = totalDonations.toLocaleString();
    }
    
    const monthlyElement = document.getElementById('monthlyDonations');
    if (monthlyElement) {
        monthlyElement.textContent = monthlyDonations.toLocaleString();
    }
    
    const volunteersElement = document.getElementById('totalVolunteers');
    if (volunteersElement) {
        volunteersElement.textContent = volunteers.toLocaleString();
    }
}

// Analytics Functions
function trackDonation(data) {
    console.log('Donation tracked:', data);
    // Here you would send data to your analytics service
    // Example: Google Analytics, Facebook Pixel, etc.
}

function trackVolunteerSignup(data) {
    console.log('Volunteer signup tracked:', data);
    // Here you would send data to your analytics service
}

// Custom Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 10px;
            padding: 0;
            font-size: 14px;
        }
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Foundation Card Interactions
function showFoundationDetails(foundationId) {
    // This function would show detailed information about a foundation
    console.log('Showing details for foundation:', foundationId);
    
    // You could implement a modal or expand the card
    showNotification('Funcionalidad de detalles próximamente...', 'info');
}

// Social Media Sharing
function shareFoundation(foundationName, platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Conoce ${foundationName} en Petsear - Apoyando a las fundaciones de mascotas en Panamá`);
    
    let shareUrl = '';
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Export functions for global access
window.showFoundationDetails = showFoundationDetails;
window.shareFoundation = shareFoundation;
window.showNotification = showNotification; 