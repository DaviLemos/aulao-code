export class ListPokemon {
  constructor() {
    this._pokemons = [];
  }

  add(pokemon) {
    this._pokemons.push(pokemon);
  }

  empty() {
    this._pokemons = [];
  }

  length() {
    return this._pokemons.length;
  }

  get pokemons() {
    return this._pokemons;
  }
}
