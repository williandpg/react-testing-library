import './not-found.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2>
        { `Page requested not found` }
      </h2>
      <img
        className="not-found-image"
        src={ `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif` }
        alt="Pikachu crying because the page requested was not found"
      />
    </div>
  );
}

export default NotFound;
