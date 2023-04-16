const categories = document.querySelector('#categories').children.length;
console.log('Number of categories:', categories);

const ulElMy = document.querySelectorAll('.item');

ulElMy.forEach(element => {
  const category = element.firstElementChild.textContent;
  const quantityElem = element.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
});
