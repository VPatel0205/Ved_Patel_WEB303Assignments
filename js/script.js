// Import countries from external file
import { countries } from './countries.js';

// Function to populate the country dropdown
function populateCountries() {
    const countrySelect = document.getElementById('country');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.text = country.name;
        countrySelect.appendChild(option);
    });
}

// Function to check form criteria and enable/disable the submit button
function checkForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheckbox = document.getElementById('termsCheckbox');
    const country = document.getElementById('country').value;
    const submitButton = document.getElementById('submitButton');

    const isUsernameValid = username.trim() !== '';
    const isPasswordValid = password.length >= 12;
    const isConfirmPasswordValid = confirmPassword === password;
    const isTermsChecked = termsCheckbox.checked;
    const isCountrySelected = country !== '';

    submitButton.disabled = !(isUsernameValid && isPasswordValid && isConfirmPasswordValid && isTermsChecked && isCountrySelected);
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from redirecting

    // Display welcome message
    const username = document.getElementById('username').value;
    const country = document.getElementById('country').value;
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Welcome, ${username}! You've selected ${country} as your country.`;
    welcomeMessage.style.display = 'block';
}

// Initialize the country dropdown on page load
window.onload = function () {
    populateCountries();
};
