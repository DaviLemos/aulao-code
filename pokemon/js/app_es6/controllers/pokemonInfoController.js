import { PokemonInfoView } from '../views/pokemonInfoView';
import { PokemonService } from '../services/pokemonService';

class PokemonInfoController {
  constructor(pokemon_name) {
    let $ = document.querySelector.bind(document);
    this._pokemon_name = pokemon_name;
    this._service = new PokemonService();
    this._pokemonView = new PokemonInfoView($('#class'));
  }

  getPokemonInfos() {
    this._service.importPokemon(this._pokemon_name).then((pokemon) => {
      let pokemon_sprites = pokemon.sprites;
      let keys = Object.keys(pokemon_sprites);
      let keys_titles = [];
      let data = [];
      for (let i = 0; i < keys.length - 2; i++) {
        console.log(keys[i]);
        if (
          pokemon_sprites[keys[i]] &&
          !keys_titles.includes(keys[i].split('_')[1])
        ) {
          // console.log(pokemon_sprites[keys[i]]);
          console.log(keys_titles);
          let keys_aux = keys[i].split('_');
          keys_titles.push(
            keys_aux.length === 3
              ? `${keys_aux[1]} ${keys_aux[2]}`
              : keys_aux[1]
          );

          data.push({
            title: keys[i].split('_').join(' '),
            sprites: [
              {
                sprite: pokemon_sprites[keys[i]],
                position: keys[i].split('_')[0],
              },
              {
                sprite: pokemon_sprites[keys[i + 1]],
                position: keys[i + 1].split('_')[0],
              },
            ],
          });
          // console.log(data);
        }
      }

      this._pokemonView.update(data);
    });
  }
}

export function pokemonCurrentInstance(pokemon_name) {
  let pokemonInfoController = new PokemonInfoController(pokemon_name);
  return pokemonInfoController;
}
