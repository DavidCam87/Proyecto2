document.addEventListener('DOMContentLoaded', function () {
  const sellerFilter = document.getElementById('sellerFilter');
  const priceFilter = document.getElementById('priceFilter');
  const searchBtn = document.getElementById('searchBtn');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const productsContainer = document.querySelector('.products');

  const products = [
    // ... (Incluye aquí al menos 9 productos más)
  ];

  // Inicializar vendedores en el filtro
  const uniqueSellers = [...new Set(products.map(product => product.seller))];
  uniqueSellers.forEach(seller => {
    const option = document.createElement('option');
    option.value = seller;
    option.text = seller;
    sellerFilter.add(option);
  });

  // Función para pintar productos en la página
  const renderProducts = (productList) => {
    productsContainer.innerHTML = '';
    productList.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%;">
        <p>Precio: $${product.price}</p>
        <p>Estrellas: ${product.stars}</p>
        <p>Reseñas: ${product.reviews}</p>
        <p>Vendedor: ${product.seller}</p>
      `;
      productsContainer.appendChild(productCard);
    });
  };

  // Filtrar productos por vendedor
  sellerFilter.addEventListener('change', function () {
    const selectedSeller = this.value;
    const filteredProducts = products.filter(product => product.seller === selectedSeller);
    renderProducts(filteredProducts);
  });

  // Filtrar productos por precio
  searchBtn.addEventListener('click', function () {
    const maxPrice = parseFloat(priceFilter.value);
    if (!isNaN(maxPrice)) {
      const filteredProducts = products.filter(product => product.price < maxPrice);
      renderProducts(filteredProducts);
    } else {
      alert('Ingrese un número válido en el filtro de precio.');
    }
  });

  // Limpiar filtros
  clearFiltersBtn.addEventListener('click', function () {
    sellerFilter.value = '';  // Resetear el filtro de vendedor
    priceFilter.value = '';   // Resetear el filtro de precio
    renderProducts(products); // Mostrar todos los productos
  });

  // Mostrar todos los productos al cargar la página
  renderProducts(products);
});
