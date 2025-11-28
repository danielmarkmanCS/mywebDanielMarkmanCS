// Toggle dark/light mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#14ffec';
toggleButton.style.color = '#000';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

let isDarkMode = true;
toggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        isDarkMode = false;
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#e4e4e4';
        isDarkMode = true;
    }
});
