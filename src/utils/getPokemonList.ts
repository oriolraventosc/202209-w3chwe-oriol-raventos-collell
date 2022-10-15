import type { PokemonInfoLists } from "./types";

const pokemonsList = async () => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
  const response = await fetch(apiUrl);
  const pokemonListUrl = (await response.json()) as PokemonInfoLists;
  return pokemonListUrl;
};

export default pokemonsList;
