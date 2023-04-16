const categories = document.querySelector('#categories').children.length;
console.log('Number of categories:', categories);

// const ulEl = Array.from(document.querySelectorAll('.item'));
// console.log(ulEl);
// ulEl.forEach((number, index) =>
// { const category = number.firstElementChild.textContent;
//   const quantityElem = number.lastElementChild.children.length;
//   console.log(`Category: ${category} \nElements: ${quantityElem}`);
// });

const ulElMy = document.querySelectorAll('.item');
// console.log(ulElMy);


ulElMy.forEach((element) => {
  const category = element.firstElementChild.textContent;
  const quantityElem = element.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
});
