(function () {
  "use strict";

  let products = [];
  const grid = document.getElementById("productGrid");
  const countEl = document.getElementById("resultCount");
  const noResults = document.getElementById("noResults");
  const filterCat = document.getElementById("filterCat");
  const sortBy = document.getElementById("sortBy");
  const searchBox = document.getElementById("searchBox");

  async function loadProducts() {
    try {
      const res = await fetch("data/products.json");
      products = await res.json();
      render();
    } catch (e) {
      grid.innerHTML = '<p style="padding:2rem;text-align:center;color:#718096">Could not load product data.</p>';
    }
  }

  function getFiltered() {
    const cat = filterCat.value;
    const q = searchBox.value.toLowerCase().trim();
    let list = products;

    if (cat) list = list.filter(function (p) { return p.category === cat; });
    if (q) list = list.filter(function (p) {
      return p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
    });

    var sort = sortBy.value;
    if (sort === "price-asc") list.sort(function (a, b) { return a.price_usd - b.price_usd; });
    else if (sort === "price-desc") list.sort(function (a, b) { return b.price_usd - a.price_usd; });
    else if (sort === "weight-asc") list.sort(function (a, b) { return a.weight_g - b.weight_g; });
    else if (sort === "weight-desc") list.sort(function (a, b) { return b.weight_g - a.weight_g; });
    else list.sort(function (a, b) { return a.name.localeCompare(b.name); });

    return list;
  }

  function renderCard(p) {
    var handRange = p.hand_length_cm_min + "\u2013" + p.hand_length_cm_max + " cm";
    var prosHtml = p.pros.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join("");
    return '<div class="product-card cat-' + p.category + '">' +
      '<div class="card-top">' +
        '<div><h3>' + esc(p.brand) + " " + esc(p.name) + '</h3>' +
        '<span class="brand">' + esc(p.category.charAt(0).toUpperCase() + p.category.slice(1)) + '</span></div>' +
        '<span class="price">$' + p.price_usd.toFixed(2) + '</span>' +
      '</div>' +
      '<div class="meta">' +
        '<span>Hand: ' + handRange + '</span>' +
        '<span>Weight: ' + p.weight_g + 'g</span>' +
        (p.grip_width_mm ? '<span>Grip: ' + p.grip_width_mm + 'mm</span>' : '') +
      '</div>' +
      '<p class="desc">' + esc(p.description) + '</p>' +
      '<div class="pros-list">' + prosHtml + '</div>' +
      '<span class="best-for">Best for: ' + esc(p.best_for) + '</span>' +
    '</div>';
  }

  function render() {
    var list = getFiltered();
    countEl.textContent = list.length + " product" + (list.length !== 1 ? "s" : "") + " found";
    if (list.length === 0) {
      grid.innerHTML = "";
      noResults.style.display = "block";
      return;
    }
    noResults.style.display = "none";
    grid.innerHTML = list.map(renderCard).join("");
  }

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  filterCat.addEventListener("change", render);
  sortBy.addEventListener("change", render);
  var debounceTimer;
  searchBox.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(render, 200);
  });

  loadProducts();
})();
