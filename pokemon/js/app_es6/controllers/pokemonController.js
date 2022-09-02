import { Pokemon } from '../models/pokemon';
import { HttpService } from '../services/httpService';
import { PokemonHelper } from '../helpers/pokemonHelper';
import { PokemonService } from '../services/pokemonService';
import { ListPokemon } from '../models/listPokemon';
import { PokemonView } from '../views/pokemonView';

class PokemonController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._listPokemons = new ListPokemon();
    this._pokemonView = new PokemonView($('#pokemonView'));
  }

  getPokemon(list) {
    this._listPokemons.empty();
    this._loop(0, list.length, list);
  }

  _loop(index, length, list) {
    if (index >= length) {
      this._pokemonView.update(this._listPokemons.pokemons);
      return;
    }
    new PokemonService()
      .importPokemon(list[index])
      .then((pokemon) => {
        this._listPokemons.add(pokemon);
        this._loop(index + 1, length, list);
      })
      .catch((err) => console.error(err));
  }

  createList(start, end) {
    let list = [];
    for (let i = start; i <= end; i++) {
      list.push(i.toString());
    }
    this.getPokemon(list);
  }

  searchPokemons(text) {
    let pokemons = document.querySelectorAll('.pokemon-data');

    if (text.length > 0) {
      for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        let pokemon_H3 = pokemon.querySelector('h3');
        let pokemon_name = pokemon_H3.textContent;
        let expression = new RegExp(text, 'i');
        if (!expression.test(pokemon_name)) {
          pokemon.style.display = 'none';
        } else {
          pokemon.style.display = 'inline-block';
        }
      }
    } else {
      for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        pokemon.style.display = 'inline-block';
      }
    }
  }
}

let pokemonController = new PokemonController();
export function pokemonCurrentInstance() {
  return pokemonController;
}
