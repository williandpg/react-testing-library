type FavoriteInputProps = { 
  onUpdateFavoritePokemon: (a: boolean) => void,
  isFavorite: boolean
}

function FavoriteInput(props: FavoriteInputProps) {
  const { onUpdateFavoritePokemon, isFavorite } = props;

  return (
    <form className="favorite-form">
      <label htmlFor="favorite">
        { `Pokémon favoritado?` }
        <input
          type="checkbox"
          id="favorite"
          checked={ isFavorite }
          onChange={
            ({ target: { checked } }) => onUpdateFavoritePokemon(checked)
          }
        />
      </label>
    </form>
  );
}

export default FavoriteInput;
