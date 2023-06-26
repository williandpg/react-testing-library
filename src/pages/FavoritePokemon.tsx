import { PokemonType } from '../types';

import './favorite-pokemon.css';
import { Pokemon } from '../components';

type FavoritePokemonProps = { pokemonList: PokemonType[] };

function FavoritePokemon(props: FavoritePokemonProps) {
  const { pokemonList } = props;
  const isEmpty = pokemonList.length === 0;

  return (
    <div>
      <h2>Favorite Pokémon</h2>
      { isEmpty ? (
        <div>
          <p>{ `No favorite Pokémon found` }</p>
        </div>
      ) : (
        pokemonList.map((pokemon) => (
          <div key={ pokemon.id } className="favorite-pokemonList">
            <Pokemon 
              pokemon={ pokemon } 
              showDetailsLink={ true }
              isFavorite
            />
          </div>
        ))
      ) }
    </div>
  );
}

FavoritePokemon.defaultProps = {
  pokemonList: [],
};

export default FavoritePokemon;
