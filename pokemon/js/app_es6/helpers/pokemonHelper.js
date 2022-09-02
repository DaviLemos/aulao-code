export class PokemonHelper {
  constructor() {
    throw new Error('NÃO INSTANCIA NÃO');
  }

  static adjustSprintes(pokemon_sprites) {
    let sprites = {};

    for (let i = 0; i < (Object.keys(pokemon_sprites).length - 2) / 2; i++) {
      let front_name = Object.keys(pokemon_sprites)[i + 4];
      let back_name = Object.keys(pokemon_sprites)[i];
      let front = pokemon_sprites[Object.keys(pokemon_sprites)[i + 4]];
      let back = pokemon_sprites[Object.keys(pokemon_sprites)[i]];

      sprites[front_name] = front;
      sprites[back_name] = back;
    }
    (sprites['other'] = {
      dream_world: pokemon_sprites.other.dream_world.front_default,
      official: pokemon_sprites.other['official-artwork'].front_default,
    }),
      (sprites['versions'] = pokemon_sprites.versions);

    return sprites;
  }

  static adjustStats(pokemon_stats) {
    let stats = {};
    pokemon_stats.forEach((element) => {
      let name_stats = element.stat.name;
      stats[name_stats] = element.base_stat;
    });
    return stats;
  }

  // static
}
