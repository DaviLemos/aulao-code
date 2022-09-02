import { pokemonCurrentInstance } from './controllers/pokemonController';

let pokemonController = pokemonCurrentInstance();

pokemonController.createList(1, 151);

document.querySelector('#search-select').onchange = function (e) {
  let range = e.target.value.split('-');
  console.log(range);
  pokemonController.createList(range[0], range[1]);
  // let limit = `?offset=${range[0]}&limit=${range[1]}`;
  // alert(limit);
};

let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function () {
  pokemonController.searchPokemons(this.value);
});
