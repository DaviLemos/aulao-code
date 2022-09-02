import { HttpService } from '../services/httpService';
import { PokemonHelper } from '../helpers/pokemonHelper';
import { Pokemon } from '../models/pokemon';
export class PokemonService {
  constructor() {
    this._http = new HttpService();
  }

  importPokemon(id) {
    return this._http
      .get('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((pokemon_data) => JSON.parse(pokemon_data))
      .then(
        (pokemon_json) =>
          new Pokemon(
            pokemon_json.id,
            pokemon_json.name.split('-').join(' '),
            pokemon_json.weight,
            pokemon_json.height,
            pokemon_json.types.length !== 0
              ? [...pokemon_json.types.map((item) => item.type.name)]
              : pokemon_json.types,
            PokemonHelper.adjustStats(pokemon_json.stats),
            PokemonHelper.adjustSprintes(pokemon_json.sprites)
          )
      )
      .catch((erro) => {
        console.log(erro);
        throw new Error('Não foi possivel pegar o pokemon');
      });
  }

  obterPokemons() {
    return Promise.all([]);
  }
}
