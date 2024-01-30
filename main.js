const sellerFilter = document.getElementById('sellerFilter'); //getElementById para demostrar que se usarlo.
const priceFilter = document.querySelector('#priceFilter');
const searchBtn = document.querySelector('#searchBtn');
const clearFiltersBtn = document.querySelector('#clearFiltersBtn');
const productsContainer = document.querySelector('.products');

const products = [
  {
    name: 'KROMSLINE KVR-3FR-B-3 NEGRO VITROCERÁMICA 60CM',
    price: 109,
    stars: 4,
    reviews: 2,
    seller: 'KROMSLINE',
    image: "https://static.electrocosto.com/images/product/medium/50943_kroms-kvr-3fr-b-3.jpg"
  },
  {
    name: 'ARISTON HOTPOINT FRIGORIFICO',
    price: 539,
    stars: 0,
    reviews: 0,
    seller: 'ARISTON',
    image: "https://static.electrocosto.com/images/product/medium/66710_ariston-hotpoint-hafc9-ta23sx-o3.jpg"
  },
  {
    name: 'KROMSLINE LAVADORA',
    price: 269,
    stars: 0,
    reviews: 0,
    seller: 'KROMSLINE',
    image: "https://static.electrocosto.com/images/product/medium/51086_kroms-kla-m3-90-dw.jpg"
  },
  {
    name: 'TEKA FTM 240 BLANCO FRIGORIFICO',
    price: 224,
    stars: 5,
    reviews: 9,
    seller: 'TEKA',
    image: "https://static.electrocosto.com/images/product/medium/41898_teka-ftm-240.jpg"
  },
  {
    name: 'TEKA HBB 510 BLANCO HORNO',
    price: 205,
    stars: 4,
    reviews: 16,
    seller: 'TEKA',
    image: "https://static.electrocosto.com/images/product/medium/43342_teka-hbb-510-blanco.jpg"
  },
  {
    name: 'TEKA HSB 615 INOX HORNO',
    price: 213,
    stars: 5,
    reviews: 19,
    seller: 'TEKA',
    image: "https://static.electrocosto.com/images/product/medium/43351_teka-hsb-615-inox.jpg"
  },
  {
    name: 'BEKO DVN-05320-X INOX LAVAVAJILLAS',
    price: 308,
    stars: 4,
    reviews: 6,
    seller: 'BEKO',
    image: "https://static.electrocosto.com/images/product/medium/66632_beko-dvn-05320-x-inox.jpg"
  },
  {
    name: 'LG OLED55A16LA - TV 55" UHD 4K TELEVISOR',
    price: 679,
    stars: 5,
    reviews: 4,
    seller: 'LG',
    image: "https://static.electrocosto.com/images/product/medium/58393_lg-oled55a16la.jpg"
  },
  {
    name: 'LG 55UP75006LF - TELEVISOR 55" 4K UHD WebOS',
    price: 392,
    stars: 5,
    reviews: 11,
    seller: 'LG',
    image: "https://static.electrocosto.com/images/product/medium/59235_lg-55up75006lf.jpg"
  },
  {
    name: 'HP 15S-FQ1051NS BLANCO PORTATIL',
    price: 682,
    stars: 3,
    reviews: 5,
    seller: 'HP',
    image: "https://static.electrocosto.com/images/product/medium/49151_hp-15s-fq1051ns.jpg"
  },

];

// Iniciamos el filtro de vendedores
const uniqueSellers = new Set(products.map(product => product.seller));
uniqueSellers.forEach(seller => {
  const option = document.createElement('option');
  option.value = seller;
  option.text = seller;
  sellerFilter.add(option);
});
sellerFilter.value = '';

// Función para pintar productos en la página dinamicamente
const paintProducts = (productList) => {
  productsContainer.innerHTML = '';
  productList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <img class="productImage" src="${product.image}" alt="${product.name}" style="max-width: 100%;">
        <p>Precio: ${product.price}€</p>
        <p>Estrellas: ${product.stars}⭐</p>
        <p>Reseñas: ${product.reviews}</p>
        <p>Vendedor: ${product.seller}</p>
        <button id="viewBtn">Ver producto</button>
      `;

    productsContainer.appendChild(productCard);
  });
};
//! Filtrar productos por vendedor
sellerFilter.addEventListener('change', function () {
  const selectedSeller = this.value;
  const filteredProducts = products.filter(product => product.seller === selectedSeller);
  paintProducts(filteredProducts);
});

//! Filtrar productos por precio
searchBtn.addEventListener('click', function () {
  const selectedSeller = sellerFilter.value;
  const maxPrice = priceFilter.value;
  if (maxPrice || (maxPrice && selectedSeller)) {
    const filteredProducts = products.filter(product => {
      const sellerMatch = selectedSeller ? product.seller === selectedSeller : true;
      const priceMatch = maxPrice ? product.price < maxPrice : true;
      return sellerMatch && priceMatch;
    });
    paintProducts(filteredProducts);
  } else {
    alert('Ingrese un número válido en el filtro de precio.');
  }
});

// Limpiar filtros
clearFiltersBtn.addEventListener('click', function () {
  sellerFilter.value = '';  // Resetear el filtro de vendedor
  priceFilter.value = '';   // Resetear el filtro de precio
  paintProducts(products); // Mostrar todos los productos
});

// Mostrar todos los productos al cargar la página
paintProducts(products);
//------------------------------------------------------------------------------------------------------------------
//he añadido esta funcion para buscar por texto
const searchFilter = document.querySelector('#searchInput');
const magnifyingGlass = document.querySelector('.magnifyingGlass');

magnifyingGlass.addEventListener('click', () => {
  const searchText = searchFilter.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
  paintProducts(filteredProducts);
  searchFilter.value = ''; // Resetear el filtro de busqueda

})




