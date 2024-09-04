// index.js
import  loadHome  from './homeModule.js';
import { loadMenu } from './menuModule.js';
import { loadContact } from './contactModule.js';
import "./styles.css"

document.addEventListener('DOMContentLoaded', () => {
    // Load the Home tab by default
    loadHome();

    // Add event listeners for tab buttons
    document.getElementById('home-tab').addEventListener('click', loadHome);
    document.getElementById('menu-tab').addEventListener('click', loadMenu);
    document.getElementById('contact-tab').addEventListener('click', loadContact);
});
