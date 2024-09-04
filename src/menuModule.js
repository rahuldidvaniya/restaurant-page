// menuModule.js
export function loadMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    const menuSection = document.createElement('section');
    menuSection.className = 'menu';
    menuSection.innerHTML = `
        <h2>Our Menu</h2>
        <ul>
            <li>Grilled Salmon - $25</li>
            <li>Steak and Potatoes - $30</li>
            <li>Caesar Salad - $15</li>
            <li>Chocolate Lava Cake - $10</li>
        </ul>
    `;
    contentDiv.appendChild(menuSection);
}
