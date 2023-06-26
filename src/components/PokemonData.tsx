import { PokemonType } from '../types';

type PokemonDataProps = { pokemon: PokemonType }

function PokemonData({ pokemon } : PokemonDataProps ) {
  const { summary, foundAt, name } = pokemon;

  return (
    <>
      <section>
        <h2>{ `Summary` }</h2>
        <p>{ `${summary}` }</p>
      </section>
      <section>
        <h2>{ `Game Locations of ${name}` }</h2>
        <div className="pokemon-habitat">
          { foundAt.map(({ location, map }) => (
            <div key={ location }>
              <img
                src={ `${map}` }
                alt={ `${name} location` }
              />
              <p><em>{ location }</em></p>
            </div>
          )) }
        </div>
      </section>
    </>
  );
}

export default PokemonData;
