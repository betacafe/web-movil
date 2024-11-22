// Función para abrir el modal con la información del producto
function openModal(product) {
    const modal = document.getElementById('product-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const grainDetails = document.getElementById('modal-grain-details');
    const roast = document.getElementById('modal-roast');
    const rating = document.getElementById('modal-rating');
    const image = document.getElementById('modal-image');

    // Cambiar contenido según el producto
    if (product === 'product1') {
        title.innerText = 'Café Brasil 250g';
        description.innerText = 'Café de tueste medio con notas de cacao y nuez.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Medio';
        rating.innerText = 'Puntaje: ★★★★☆';
        image.src = 'cafe prueba.svg';
    } else if (product === 'product2') {
        title.innerText = 'Café Brasil 500g';
        description.innerText = 'Café 100% orgánico, ideal para los paladares más exigentes.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Oscuro';
        rating.innerText = 'Puntaje: ★★★★★';
        image.src = 'cafe prueba.svg';
    }

    // Mostrar el modal
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = 1, 10); // Retardo para que la animación se vea bien
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 300); // Desaparece después de la animación
}
