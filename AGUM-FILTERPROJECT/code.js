const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },  

  {
    id: 7,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 10,
    cat: "Sport",
  }, 

  {
    id: 8,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 5,
    cat: "Sport",
  }, 




  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];
const productList = document.getElementById("productList");
      const priceRange = document.querySelector(".priceRange");
      const priceValue = document.querySelector(".priceValue");
      const searchInput = document.getElementById("searchInput");
      let currentCategory = "All";
      let currentSearchTerm = "";

      function renderProducts(products) {
        productList.innerHTML = products
          .map(
            (product) => `
              <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <span class="name">${product.name}</span>
                <span class="priceText">$${product.price}</span>
              </div>
            `
          )
          .join("");
      }

      renderProducts(data);

      function updateProductList() {
        const maxPrice = parseInt(priceRange.value);
        const filteredProducts = data
          .filter((product) =>
            (currentCategory === "All" || product.cat === currentCategory) &&
            (product.name.toLowerCase().includes(currentSearchTerm.toLowerCase())) &&
            (product.price <= maxPrice)
          );

        renderProducts(filteredProducts);
        priceValue.textContent = `$${maxPrice}`;
      }

      searchInput.addEventListener("input", () => {
        currentSearchTerm = searchInput.value;
        updateProductList();
      });

      function filterProducts(categoryElement, category) {
        currentCategory = category;
        updateProductList();

        const categoryButtons = document.querySelectorAll('.cat');
        categoryButtons.forEach(button => button.classList.remove('active'));
        categoryElement.classList.add('active');
      }

      const categoryButtons = document.querySelectorAll('.cat');
      categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
          filterProducts(this, this.dataset.category);
        });
      });

      function updateFilteredProductsByPrice() {
        const maxPrice = parseInt(priceRange.value);
        const filteredProducts = data
          .filter((product) =>
            (currentCategory === "All" || product.cat === currentCategory) &&
            (product.name.toLowerCase().includes(currentSearchTerm.toLowerCase())) &&
            (product.price <= maxPrice)
          );

        renderProducts(filteredProducts);
        priceValue.textContent = `$${maxPrice}`;
      }

      priceRange.addEventListener("input", () => {
        updateFilteredProductsByPrice();
      });

      // Initial rendering of products
      updateProductList();