import type { PokemonInfo } from "./types.js";
import pokemonsList from "./getPokemonList.js";
import PokemonCard from "../components/PokemonCard/PokemonCard.js";
import PokemonDetailsBasicInformation from "../components/PokemonDetailsBasicInformation/PokemonDetailsBasicInformation.js";

const typeEveryPokemonData = async (urlData: string) => {
  const responseData = await fetch(urlData);
  const typedPokemonData = (await responseData.json()) as PokemonInfo;
  return typedPokemonData;
};

export const showPokemonDetails = async (parentElement: HTMLElement) => {
  const allPokemonsList = await pokemonsList();
  const pokemonsResults = allPokemonsList.results;
  pokemonsResults.forEach(async (individualPokemon) => {
    const pokemonIndividualData = await typeEveryPokemonData(
      individualPokemon.url
    );
    const pokemon = new PokemonDetailsBasicInformation(
      parentElement,
      pokemonIndividualData
    );
    pokemon.render();
  });
};
