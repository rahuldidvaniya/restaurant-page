// contactModule.js
export function loadContact() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    const contactSection = document.createElement('section');
    contactSection.className = 'contact';
    contactSection.innerHTML = `
        <h2>Contact Us</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@restaurant.com</p>
        <p>Address: 123 Gourmet Street, Flavor Town, FT 12345</p>
    `;
    contentDiv.appendChild(contactSection);
}
