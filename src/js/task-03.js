const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// !====== через createElement
// const ulEl = document.querySelector('.gallery');
// console.log(ulEl)

// images.forEach(({url, alt}) => {
//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');
// imgEl.src = url;
// imgEl.alt = alt;
// imgEl.width = 300;
// liEl.appendChild(imgEl);
// ulEl.appendChild(liEl);
// });



const ulEl = document.querySelector('.gallery');
// console.log(images);

const createMark = ({url, alt}) => {
  return `
  <li><img src = ${url} width = 300 alt = '${alt}'></li>`
}

const createRows = images.map(createMark).join('');
// console.log(createRows)


ulEl.insertAdjacentHTML('afterbegin', createRows);