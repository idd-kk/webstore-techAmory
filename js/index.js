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
        priceBtc: `API plug-in`,
        priceSale: 0.5,
        inStock: null,
        selectOne: null,
        selectTwo: null,
        selectThree: null,
        category: `3D Model`,
        subCategory: `sew-on`,
    }, {
        id: `101`,
        name: `Sew-on Neuron Aplique`,
        imgOne: `img/store-pic/neuron-real.jpg`,
        imgTwo: `img/store-pic/neuron-real.jpg`,
        imgThree: `img/store-pic/neuron-real.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: `getSizeMaterialPrice`,
        priceBtc: `API plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `size`,
        selectTwo: `color`,
        selectThree: `material`,
        category: `Aplique`,
        subCategory: `Sew-on`,
    }, {
        id: `102`,
        name: `Side Sling Bag with Induction Charger`,
        imgOne: `img/store-pic/bag-with.png`,
        imgTwo: `img/store-pic/bag-with.png`,
        imgThree: `img/store-pic/bag-with.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 300,
        priceBtc:`API key plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `size`,
        selectTwo: `color`,
        selectThree: `material`,
        category: `Accessory`, 
        subCategory: `Bag`,
    }, {
        id: `103`,
        name: `Side Sling Bag`,
        imgOne: `img/store-pic/bag.png`,
        imgTwo: `img/store-pic/bag.png`,
        imgThree: `img/store-pic/bag.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 200,
        priceBtc:`API key plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `Size`,
        selectTwo: `Color`,
        selectThree: `material`,
        category: `Accessory`, 
        subCategory: `Bag`,
    }, {
        id: `104`,
        name: `Side Sling Bag Printable Pattern File`,
        imgOne: `img/store-pic/print-file-bag-01.png`,
        imgTwo: `img/store-pic/print-file-bag-01.png`,
        imgThree: `img/store-pic/print-file-bag-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 5,
        priceBtc:`API key plug-in`,
        priceSale: 2.5,
        inStock: null,
        selectOne: null,
        selectTwo: null,
        selectThree: null,
        category: `Printable Pattern`, 
        subCategory: `Bag`,
    }, {
        id: `105`,
        name: `Face Mask Maker Kit`,
        imgOne: `img/store-pic/maker-kit-face-mask-01.png`,
        imgTwo: `img/store-pic/maker-kit-face-mask-01.png`,
        imgThree: `img/store-pic/maker-kit-face-mask-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 45,
        priceBtc:`API key plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `size`,
        selectTwo: `color`,
        selectThree: `material`,
        category: `Maker Kit`, 
        subCategory: `Face Mask`,
    }, {
        id: `106`,
        name: `Face Mask`,
        imgOne: `img/store-pic/breathing_mask1.69.jpg`,
        imgTwo: `img/store-pic/breathing_mask1.68.jpg`,
        imgThree: `img/store-pic/breathing_mask1.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 250,
        priceBtc:`API key plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `size`,
        selectTwo: `color`,
        selectThree: `material`,
        category: `Accessory`, 
        subCategory: `Face Mask`,
    }, {
        id: `107`,
        name: `Face Mask Printable Pattern File`,
        imgOne: `img/store-pic/print-file-face-mask-01.png`,
        imgTwo: `img/store-pic/print-file-face-mask-01.png`,
        imgThree: `img/store-pic/print-file-face-mask-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 5,
        priceBtc:`API key plug-in`,
        priceSale: 2.5,
        inStock: `getInStockNumber`,
        selectOne: null,
        selectTwo: null,
        selectThree: null,
        category: `Printable Pattern`, 
        subCategory: `Face Mask`,
     }, {
        id: `108`,
        name: `Light-Up Jacket`,
        imgOne: `img/store-pic/jacket.png`,
        imgTwo: `img/store-pic/jacket.png`,
        imgThree: `img/store-pic/jacket.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 500,
        priceBtc:`API key plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `size`,
        selectTwo: `color`,
        selectThree: `material`,
        category: `Apparel`, 
        subCategory: `Outerwear`,
     }, {
        id: `109`,
        name: `Light-up Jacket Maker Kit`,
        imgOne: `img/store-pic/maker-kit-jacket-01.png`,
        imgTwo: `img/store-pic/maker-kit-jacket-01.png`,
        imgThree: `img/store-pic/maker-kit-jacket-01.png`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        priceReg: 200,
        priceBtc:`API key plug-in`,
        priceSale: null,
        inStock: `getInStockNumber`,
        selectOne: `size`,
        selectTwo: `color`,
        selectThree: `material`,
        category: `Maker Kit`, 
        subCategory: `Outerwear`,
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
    </header>

    <h3>${products.name}</h3>
    <p>${products.description}</p>

    <fieldset>
        <legend>Sizes</legend>
        <ol>
            <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
            <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
            <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
        </ol>
    </fieldset>

    <form>
      <fieldset>
        <legend>Colours</legend>
        <ul>
          <li><label><input type="radio" name="colour" value="r"> <span>Red</span></label></li>
          <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
          <li><label><input type="radio" name="colour" value="b"> <span>Blue</span></label></li>
        </ul>
      </fieldset>

      <form>
      <fieldset>
        <legend>Material</legend>
        <ul>
          <li><label><input type="radio" name="material" value="f"> <span>felt</span></label></li>
          <li><label><input type="radio" name="material" value="l"> <span>Leather</span></label></li>
          <li><label><input type="radio" name="material" value="sc"> <span>SELFCLEAR acrylic fiber </span></label></li>
        </ul>
      </fieldset>

      <footer>
        <data value="39"><del>$50.00</del> <ins>$39.00</ins></data>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>

        <button type="button"><span class="material-icons">favorite</span></button>
        <a href="#">see more</a>
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

/************* EXECUTABLE *************/

renderProducts(products)