export interface PokemonInfo {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
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
