import { pokemonCurrentInstance } from './controllers/pokemonInfoController';

let pokemonInfoController = pokemonCurrentInstance(
  window.location.search.substring(1)
);

pokemonInfoController.getPokemonInfos();
