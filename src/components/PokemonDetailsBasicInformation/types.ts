interface BasicPokemonInfoExtra {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  };
  stats: [
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } }
  ];
}
export default BasicPokemonInfoExtra;
