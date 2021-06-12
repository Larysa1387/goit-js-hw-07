const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const KEY = 't9AQpoYkrEtRVSYxwnNseTc1nTuCbUhF';

let searchQuery = 'Adele';
let location = '';

function fetchApiEvent() {
  const url = `${BASE_URL}/events?keyword=${searchQuery}&apikey=${KEY}&locale=${location}`;
  // keyword=${this.searchQuery}&page=${this.page}
  return fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data); //Нам приходит массив объектов из hits
        const { _embedded } = data;
        console.log(_embedded.events);
        return _embedded.events;
        // this.incrementPage();
      });
}

fetchApiEvent();

const refs = {
  searchForm: document.getElementById('search-form'),
  // btnLoadMore: document.querySelector('[data-action="load"]'),
  // cardsList: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearchClick);
function onSearchClick(e) {
  searchQuery = e.target.value;

  console.log(searchQuery);
  fetchApiEvent().then(_embedded=> {
    console.log(_embedded.events);
  });



  // if (searchService.query.trim() !== '') {
  //   searchService.fetchQueryItems()
  //     .then(hits => {
  //       if (hits.length === 0) { return onFetchError() };
  //       if (hits.length !== 0) {
  //         refs.btnLoadMore.classList.remove('is-hidden');
  //       }
  //       if (hits.length < 12) {
  //         refs.btnLoadMore.classList.add('is-hidden');
  //       }
  //       creatPageMarkup(hits);
  //     });
  // }
}
