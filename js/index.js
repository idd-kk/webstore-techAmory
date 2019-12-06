/******* GLOABL VARIABLES/DATA ********/

const products = [
    {
        id: `100`,
        name: `Sew-on neuron 3D File`,
        imgOne: `img/store-pic/neuron-01.png`,
        imgTwo: `img/store-pic/neuron-01.png`,
        imgThree: `img/store-pic/neuron-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 1,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `3d`,
        subCategory: `aplique`
    }, {
        id: `101`,
        name: `Sew-on Neuron Aplique`,
        imgOne: `img/store-pic/neuron-real.jpg`,
        imgTwo: `img/store-pic/neuron-real.jpg`,
        imgThree: `img/store-pic/neuron-real.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 30,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `3dprint`,
        subCategory: `aplique`
    }, {
        id: `102`,
        name: `Side Sling Bag with Induction Charger`,
        imgOne: `img/store-pic/bag-with.png`,
        imgTwo: `img/store-pic/bag-with.png`,
        imgThree: `img/store-pic/bag-with.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 300,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`,
        subCategory: `bag`
    }, {
        id: `103`,
        name: `Side Sling Bag`,
        imgOne: `img/store-pic/bag.png`,
        imgTwo: `img/store-pic/bag.png`,
        imgThree: `img/store-pic/bag.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 200,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `bag`,
    }, {
        id: `104`,
        name: `Side Sling Bag with custom aplique`,
        imgOne: `img/store-pic/print-file-bag-01.png`,
        imgTwo: `img/store-pic/print-file-bag-01.png`,
        imgThree: `img/store-pic/print-file-bag-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 230,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `bag`,
    }, {
        id: `105`,
        name: `Face Mask Maker Kit`,
        imgOne: `img/store-pic/maker-kit-face-mask-01.png`,
        imgTwo: `img/store-pic/maker-kit-face-mask-01.png`,
        imgThree: `img/store-pic/maker-kit-face-mask-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 50,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `maker`, 
        subCategory: `mask`,
    }, {
        id: `106`,
        name: `Face Mask`,
        imgOne: `img/store-pic/breathing_mask1.69.jpg`,
        imgTwo: `img/store-pic/breathing_mask1.68.jpg`,
        imgThree: `img/store-pic/breathing_mask1.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 100,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `mask`,
    }, {
        id: `107`,
        name: `Face Mask Printable Pattern File`,
        imgOne: `img/store-pic/print-file-face-mask-01.png`,
        imgTwo: `img/store-pic/print-file-face-mask-01.png`,
        imgThree: `img/store-pic/print-file-face-mask-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 5,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `2d`, 
        subCategory: `mask`,
     }, {
        id: `108`,
        name: `Light-Up Jacket`,
        imgOne: `img/store-pic/jacket.png`,
        imgTwo: `img/store-pic/jacket.png`,
        imgThree: `img/store-pic/jacket.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 500,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `apparel`, 
        subCategory: `outer`,
     }, {
        id: `109`,
        name: `Light-up Jacket Maker Kit`,
        imgOne: `img/store-pic/maker-kit-jacket-01.png`,
        imgTwo: `img/store-pic/maker-kit-jacket-01.png`,
        imgThree: `img/store-pic/maker-kit-jacket-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 250,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `maker`, 
        subCategory: `outer`,
      }, {
        id: `110`,
        name: `light-up jacket with custom aplique`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 560,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `apparel`, 
        subCategory: `outer`,
      }, {
        id: `111`,
        name: `bomber jacket`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 200,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `apparel`, 
        subCategory: `outer`,
      }, {
        id: `112`,
        name: `bomber jacket with custom aplique`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 260,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `apparel`, 
        subCategory: `outer`,
      }, {
        id: `113`,
        name: `commuter backpack`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 300,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `bag`,
      }, {
        id: `114`,
        name: `commuter backpack with battery pack`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 400,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `bag`,
      }, {
        id: `115`,
        name: `digital nomad backpack`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 400,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `bag`,
      }, {
        id: `116`,
        name: `digital nomad backpack with battery pack`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 500,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `accessory`, 
        subCategory: `bag`,
      }, {
        id: `117`,
        name: `crystal horns 3D file`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 5,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `3d`, 
        subCategory: `dressup`,
      }, {
        id: `118`,
        name: `sew-on circuits 3D file`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 1,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `3d`, 
        subCategory: `aplique`,
      }, {
        id: `119`,
        name: `sew-on circuits aplique`,
        imgOne: ``,
        imgTwo: ``,
        imgThree: ``,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 30,
        priceBtc: `API plug-in goes here`,
        priceSale: null,
        inStock: null,
        selectSize: null,
        selectColor: null,
        selectMaterial: null,
        category: `3dprint`, 
        subCategory: `aplique`,
      }, 
];

/************* FUNCTIONS *************/

// Function: getProductAsHtmlString
// Parameters: product:Object
// Return: String of HTML (<article>)

function getProductAsHtmlString(products) {

    return `
    
    <article class="product ${products.id}">

    <header>
      <img src="${products.imgOne}">
      <img src="${products.imgTwo}" class="img-thumb">
      <img src="${products.imgThree}" class="img-thumb">
    </header>

    <h3>${products.name}</h3>
    <p>${products.description}</p>

    <footer>
      <data value="39">$ ${products.priceReg}</data>

      <button type="button" class="button">Add to Cart</button>

    </footer>
    </form>
  </article>
    
    `;
}

function renderProducts(arr) {

// map() Array to a newe Array
const arrOfHtml = arr.map(getProductAsHtmlString);

// join() Array into a String 
const strOfHtml = arrOfHtml.join('\n');

// innerHtml String into Elements 
document.getElementById('products').innerHTML = strOfHtml;

}

// filtering products by category and subcategory 
function filterByCat(products) {
  // When a parameter gets sent to a filter, it gets stored as "this"
  return products.category == this;
}

function filterBySubCat(products) {
  // When a parameter gets sent to a filter, it gets stored as "this"
  return products.subCategory == this;
}

function searchByCat(event) {
  const searchTerm = event.target.value; // From the dropdown/select field
  const arrCatCheck = products.filter(filterByCat, searchTerm)
  renderProducts(arrCatCheck);
}

function searchBySubCat(event) {
  const searchTerm = event.target.value; // From the dropdown/select field
  const arrCatCheck = products.filter(filterBySubCat, searchTerm)
  renderProducts(arrCatCheck);
}

/************* EXECUTABLE *************/

renderProducts(products)

document.getElementById('catSearch').addEventListener('change', searchByCat)
document.getElementById('subCatSearch').addEventListener('change', searchBySubCat)