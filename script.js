const colorOptions = document.querySelectorAll('.color-option');
const items = document.querySelectorAll('.item');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.classList.contains('reset') ? '#f0f0f0' : option.classList[1];
        document.body.style.backgroundColor = color;
        items.forEach(item => {
            item.style.backgroundColor = color;
        });
    });
});
