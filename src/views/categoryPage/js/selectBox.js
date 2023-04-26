import { getUrlParams } from './getUrlParams.js';
import { getProduct } from './product.js';
const selectBox = document.getElementById('select-category');

function initSelectBox() {
  const optionList = document.querySelectorAll('option');
  optionList.forEach((option) => {
    if (option.value === getUrlParams('categoryId')) {
      option.setAttribute('selected', 'true');
    }
  });
}

function selectCategory() {
  selectBox.addEventListener('change', () => {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    const categoryId = selectBox.value;
    getProduct(categoryId);
  });
}

const selectBoxEvent = () => {
  initSelectBox();
  selectCategory();
};

export { selectBoxEvent };
