window.onload = function() {
    const bellHooks = document.querySelector('.bellHooks');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector('.close');

    bellHooks.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
        modal.style.display = 'none';
        }
    });
}