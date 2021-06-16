 

const next_btn = document.querySelector('#detail');
const previous_btn = document.querySelector('#visit');
const container = document.querySelector('.container');

previous_btn.addEventListener('click', () => {
    container.classList.add('previous-mode');
});

next_btn.addEventListener('click', () => {
    container.classList.remove('previous-mode');
});