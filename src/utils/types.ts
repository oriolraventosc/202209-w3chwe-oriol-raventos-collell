export interface PokemonInfo {
  id: number;
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

export interface PokemonInfoLists {
  count: number;
  next: string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}
