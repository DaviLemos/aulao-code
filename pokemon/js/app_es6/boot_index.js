import { itemCurrentInstance } from './controllers/itemController';
import { pokemonCurrentInstance } from './controllers/pokemonController';

let pokemon_list = [1, 4, 7, 25];
let item_list = [4, 17, 18, 28];

let pokemonController = pokemonCurrentInstance();
let itemController = itemCurrentInstance();

pokemonController.getPokemon(pokemon_list);
itemController.getItem(item_list, 'https://pokeapi.co/api/v2/item/');
