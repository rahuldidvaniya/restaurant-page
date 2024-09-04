// contentModule.js
export default function homepage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Create and append the hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'hero';
    heroSection.innerHTML = `
        <div class="hero-content">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the finest dining with our exquisite dishes and exceptional service.</p>
            <a href="#contact" class="cta-button">Reserve a Table</a>
        </div>
    `;
    contentDiv.appendChild(heroSection);

    // Create and append the about section
    const aboutSection = document.createElement('section');
    aboutSection.className = 'about';
    aboutSection.innerHTML = `
        <h2>About Us</h2>
        <p>We serve the finest dishes made with the freshest ingredients. Our chefs bring years of experience to create a unique dining experience that will delight your taste buds.</p>
    `;
    contentDiv.appendChild(aboutSection);

    // Create and append the timing section
    const timingSection = document.createElement('section');
    timingSection.className = 'timing';
    timingSection.innerHTML = `
        <h2>Opening Hours</h2>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
    `;
    contentDiv.appendChild(timingSection);

    // Create and append the location section
    const locationSection = document.createElement('section');
    locationSection.className = 'location';
    locationSection.innerHTML = `
        <h2>Find Us</h2>
        <p>123 Gourmet Street, Flavor Town, FT 12345</p>
    `;
    contentDiv.appendChild(locationSection);
}
