import { useParams } from 'react-router-dom';

import { FavoritePokemonIdsObjType, PokemonType } from '../types';
import Pokemon from '../components/Pokemon';
import PokemonData from '../components/PokemonData';
import FavoriteInput from '../components/FavoriteInput';

import './pokemon-details.css';

type PokemonDetailsProps = {
  favoritePokemonIdsObj: FavoritePokemonIdsObjType,
  onUpdateFavoritePokemon: (pokemonId: number, isFavorite: boolean) => void,
  pokemonList: PokemonType[],
};

function PokemonDetails(props: PokemonDetailsProps) {
  const {
    favoritePokemonIdsObj,
    onUpdateFavoritePokemon,
    pokemonList,
  } = props;
  const { id: idParam } = useParams();
  const pokemon = pokemonList.find(
    ({ id }) => id === parseInt(idParam as string, 10),
  ) as PokemonType;
  const isFavorite = favoritePokemonIdsObj[parseInt(idParam as string)];

  return (
    <section className="pokemon-details">
      <h2>{ `${pokemon.name} Details` }</h2>
      <Pokemon
        pokemon={ pokemon }
        showDetailsLink={ false }
        isFavorite={ isFavorite }
      />
      <PokemonData pokemon={ pokemon } />
      <FavoriteInput
        isFavorite={ isFavorite }
        onUpdateFavoritePokemon={
          (checked) => onUpdateFavoritePokemon(pokemon.id, checked)
        }
      />
    </section>
  );
}

export default PokemonDetails;
