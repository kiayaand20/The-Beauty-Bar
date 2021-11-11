const brands = [
  "Almay",
  "Alva",
  "Anna sui",
  "Annabelle",
  "Benefit",
  "Boosh",
  "Burt's bees",
  "Butter london",
  "C'est moi",
  "Cargo cosmetics",
  "China glaze",
  "Clinique",
  "Coastal classic creation",
  "Colourpop",
  "Covergirl",
  "Dalish",
  "Tenth",
  "Dior",
  "Dr. haschka",
  "Elf",
  "Essie",
  "Fenty",
  "Glossier",
  "Green people",
  "Iman",
  "L'oreal",
  "Bath cosmetics usa",
  "Maia's mineral galaxy",
  "Marcelle",
  "Marienatie",
  "Maybelline",
  "Milani",
  "Mineral fusion",
  "Misa",
  "Mistura",
  "Moov",
  "Naked",
  "Nyx",
  "Orly",
  "Peacemaking",
  "Penny wool organics",
  "Physicians formula",
  "Piggy paint",
  "Pure anada",
  "Help the minerals",
  "Revlon",
  "Sally b's skin yummies",
  "Salon perfect",
  "Sante",
  "Sinful colors",
  "Smashbox",
  "Sila",
  "Suncoat",
  "W3llpeople",
  "Wet n wild",
  "Zorah",
  "Zorah biocosmetiques"]

const ingredientsList =
  ["Canadian",
    "CertClean",
    "Chemical Free",
    "Dairy Free",
    "EWG Verified",
    "EcoCert",
    "Fair Trade",
    "Gluten Free",
    "Hypoallergenic",
    "Natural",
    "No Talc",
    "Non-GMO",
    "Organic",
    "Peanut Free Product",
    "Sugar Free",
    "USDA Organic",
    "Vegan",
    "Alcohol free",
    "Cruelty free",
    "Oil free",
    "Purpicks",
    "Silicone free",
    "Water-free"]

// const productType = [
//   "blush",
//   "bronzer",
//   "eyebrow",
//   "eyeliner",
//   "eyeshadow",
//   "foundation",
//   "lip liner",
//   "lipstick",
//   "mascara",
//   "nail polish"
// ]

let productDiv = document.querySelector("#product-name")

async function searchBrandData(e) {
  productDiv.innerHTML = ""
  let brand = e.target.value;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
  try {
    const res = await axios.get(url);
    const productData = res.data;
    console.log(productData);
    displayProducts(productData);
  } catch (error) {
    console.log(error);
  }
}

const brandSelector = document.querySelector("#brand-name")
brandSelector.addEventListener("change", searchBrandData)

function showBrandData() {
  for (let i = 0; i < brands.length; i++) {
    let option = document.createElement(`option`);
    option.value = brands[i];
    option.textContent = brands[i];
    brandSelector.appendChild(option)
  }
}
showBrandData();

async function searchPriceData(e) {
  let price = e.target.value;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=${price}`;
  try {
    const res = await axios.get(url);
    const productData = res.data;
    console.log(productData);
    displayProducts(productData);
  } catch (error) {
    console.log(error);
  }
}

const priceSelector = document.querySelector("#price")
priceSelector.addEventListener("change", searchPriceData)

async function searchIngredientData(e) {
  let ingredientsPreference = e.target.value;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${ingredientsPreference}`;
  try {
    const res = await axios.get(url);
    const productData = res.data;
    console.log(productData);
    displayProducts(productData);
  } catch (error) {
    console.log(error);
  }
}

const tagSelector = document.querySelector("#tags")
tagSelector.addEventListener("change", searchIngredientData)

function showIngredientData() {
  for (let i = 0; i < ingredientsList.length; i++) {
    let option = document.createElement(`option`);
    option.value = ingredientsList[i];
    option.textContent = ingredientsList[i];
    tagSelector.appendChild(option)
  }
}
showIngredientData();

async function searchProductData(e) {
  let product_type = e.target.value;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;
  try {
    const res = await axios.get(url);
    const productData = res.data;
    console.log(productData);
    displayProducts(productData);
  } catch (error) {
    console.log(error);
  }
}

const selector = document.querySelector("#product-type")
selector.addEventListener("change", searchProductData)

// function showProductData() {
//   for (let i = 0; i < productType.length; i++) {
//     let option = document.createElement(`option`);
//     option.value = productType[i];
//     option.textContent = productType[i];
//     tagSelector.appendChild(option)
//   }
// }
// showProductData();


function displayProducts(products) {
  products.forEach(product => {
    let div = document.createElement("div");
    div.classList.add("product")

    let productImage = document.createElement("img")
    productImage.classList.add("prdimg");
    productImage.src = product.api_featured_image;
    div.appendChild(productImage);
    productDiv.appendChild(div);
    console.log(product.api_featured_image)

    let productName = document.createElement("h4")
    productName.classList.add("prdname");
    productName.innerText = product.name;
    div.appendChild(productName);
    productDiv.appendChild(div);
    console.log(product.name);

    let productPrice = document.createElement("h4")
    productPrice.classList.add("prdprice");
    productPrice.innerText = product.price;
    div.appendChild(productPrice);
    productDiv.appendChild(div);
    console.log(product.price)
  })
}

let topbutton = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
