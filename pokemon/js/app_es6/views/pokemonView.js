import { View } from './view';
export class PokemonView extends View {
  constructor(element) {
    super(element);
  }

  template(pokemons) {
    return `
    ${pokemons
      .map(
        (pokemon) => `<a href="pokemonInfo.html?${pokemon.name}">
                        <li class="pokemon-data" id=${pokemon.id}>
                          <img
                            class="type-background-${
                              pokemon.types.length != 1 &&
                              pokemon.types[0] == 'normal'
                                ? pokemon.types[1]
                                : pokemon.types[0]
                            } pokemon_background"
                            src=${pokemon.sprites.front_default}
                            alt= "${pokemon.name} Image"
                          />
                          <h3>${pokemon.name}</h3>
                          <div>
                            ${pokemon.types
                              .map(
                                (type) => `
                              <p class="type-default type-color-${type}">
                                ${type}
                              </p>
                            `
                              )
                              .join('')}
                          </div>        
                        </li>
                      </a>`
      )
      .join('')}`;
  }
}

// <ul class="list-index-pokemons">
// <li>
//   <div>
//     <img
//       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
//       alt=""
//     />
//     <h3>pidgey</h3>
//     <p>
//       <span style="background: #a4acaf"> normal</span>
//       <span
//         style="
//           background: linear-gradient(
//             #3dc7ef 0% 50%,
//             #bdb9b8 50% 100%
//           );
//         "
//       >
//         flying</span
//       >
//     </p>
//   </div>
// </li>
// <li>
//   <div>
//     <img
//       id="fire"
//       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//       alt=""
//       style=""
//     />
//     <h3>charmander</h3>
//     <p><span style="background: #fd7d24">fire</span></p>
//   </div>
// </li>
// <li>
//   <div></div>
// </li>
// <li>
//   <div></div>
// </li>
// <li>
//   <div></div>
// </li>
// </ul>
