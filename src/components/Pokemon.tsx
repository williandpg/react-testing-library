import { Link } from 'react-router-dom';

import { PokemonType } from '../types';

import './pokemon.css';

type PokemonProps = {
  pokemon: PokemonType,
  showDetailsLink: boolean,
  isFavorite: boolean
};

function Pokemon(props: PokemonProps) {
  const { isFavorite, showDetailsLink, pokemon } = props;
  const { averageWeight, id, image, name, type } = pokemon;
  const { measurementUnit, value } = averageWeight;

  return (
    <div className="pokemon">
      <div className="pokemon-overview">
        <p data-testid="pokemon-name">{`${name}`}</p>
        <p data-testid="pokemon-type">{`${type}`}</p>
        <p data-testid="pokemon-weight">
          {`Average weight: ${value} ${measurementUnit}`}
        </p>
        {showDetailsLink && <Link to={ `/pokemon/${id}` }>More details</Link>}
      </div>
      <img src={ `${image}` } alt={ `${name} sprite` } />
      {isFavorite && (
        <img
          className="favorite-icon"
          src="/star-icon.svg"
          alt={ `${name} is marked as favorite` }
        />
      )}
    </div>
  );
}

export default Pokemon;
