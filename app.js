const brands = [
  "almay",
  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
  "c'est moi",
  "cargo cosmetics",
  "china glaze",
  "clinique",
  "coastal classic creation",
  "colourpop",
  "covergirl",
  "dalish",
  "tenth",
  "dior",
  "dr. haschka",
  "elf",
  "essie",
  "fenty",
  "glossier",
  "green people",
  "iman",
  "l'oreal",
  "bath cosmetics usa",
  "maia's mineral galaxy",
  "marcelle",
  "marienatie",
  "maybelline",
  "milani",
  "mineral fusion",
  "misa",
  "mistura",
  "moov",
  "naked",
  "nyx",
  "orly",
  "peacemaking",
  "penny wool organics",
  "physicians formula",
  "piggy paint",
  "pure anada",
  "help the minerals",
  "revlon",
  "sally b's skin yummies",
  "salon perfect",
  "sante",
  "sinful colors",
  "smashbox",
  "sila",
  "suncoat",
  "w3llpeople",
  "wet n wild",
  "zorah",
  "zorah biocosmetiques"]
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
    "alcohol free",
    "cruelty free",
    "oil free",
    "purpicks",
    "silicone free",
    "water free"]

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
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_tags${ingredientsPreference}`;
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
    productName.innerText = product.name;
    div.appendChild(productName);
    productDiv.appendChild(div);
    console.log(product.name);

    let productPrice = document.createElement("h4")
    productPrice.innerText = product.price;
    div.appendChild(productPrice);
    productDiv.appendChild(div);
    console.log(product.price)
  })
}