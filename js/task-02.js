const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredient => {
//   const ingEl = document.createElement('li');
//   ingEl.classList.add('item');
//   ingEl.textContent = ingredient;

//   return ingEl;
// });
// ulEl.append(...elements);

const createIngredient = ingred => {
  return ingred.map(ingredient => {
    const ingEl = document.createElement('li');
    ingEl.classList.add('item');
    ingEl.textContent = ingredient;

    return ingEl;
  });
};

const elements = createIngredient(ingredients);
ulEl.append(...elements);
