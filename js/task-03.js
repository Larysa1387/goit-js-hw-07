const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
const elementOfGallery = document.createElement('li');
// const imagesItemsEl = images.map(image => {
//   const elementOfGallery = document.createElement('li');
//   const imageOfGallery = document.createElement('img');
//   imageOfGallery.src = image.url;
//   imageOfGallery.alt = image.alt;
//   elementOfGallery.appendChild(imageOfGallery);
//   console.log(elementOfGallery);

//   return elementOfGallery;
// });
// galleryEl.append(...imagesItemsEl);

const makeListOfImagesMarkup = ({url, alt}) => {
return `<li><img src='${url}' alt = '${alt}' width = '240'></li>`;
};
// console.log(makeListOfImages(images[0]));

const makeListOfImages = images
  .map(makeListOfImagesMarkup)
  .join('');
console.log('~ makeListOfImages', makeListOfImages);

// galleryEl.appendChild(elementOfGallery);
galleryEl.insertAdjacentHTML("afterbegin", makeListOfImages);
console.log('~ elementOfGallery', elementOfGallery);
