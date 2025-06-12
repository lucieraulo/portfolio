const navButtons = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');

let currentSelect = 0;
sections[currentSelect].classList.add('visible');
sections[currentSelect].style.display = "flex";
navButtons[currentSelect].classList.add('current-select');

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(currentSelect, index);
        sections[currentSelect].classList.remove('visible');
        sections[currentSelect].style.display = "none";
        navButtons[currentSelect].classList.remove('current-select');
        currentSelect = index;
        sections[currentSelect].classList.add('visible');
        sections[currentSelect].style.display = "flex";
        navButtons[currentSelect].classList.add('current-select');
        console.log(sections[currentSelect]);
    })
});