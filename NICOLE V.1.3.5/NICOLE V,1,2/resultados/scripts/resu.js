// Puedes agregar funcionalidad adicional aquí si es necesario.
document.querySelector('search-button').addEventListener('click', function() {
    alert('Función de búsqueda no implementada todavía.');
});

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item'); 
    const prevButton = document.getElementById('prevButton'); 
    const nextButton = document.getElementById('nextButton'); 
    let currentIndex = 0; 

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active'); 
            if (i === index) {
                item.classList.add('active'); 
            }
        });
    }

    showItem(currentIndex);

    
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

      prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        showItem(currentIndex);
    });
});

