document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-header');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('active');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('active');
        });
    });
});
