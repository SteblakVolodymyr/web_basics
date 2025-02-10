document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Дякуємо за ваш інтерес!</h2>
            <p>Більше інформації про наші послуги буде надіслано на вашу електронну пошту.</p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
});


