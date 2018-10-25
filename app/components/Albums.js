import React from 'react';

export default function Albums(props) {
  const {
    getDetails,
    albumCover,
    renderFavorites,
    isFavorite,
    setFavorite,
    id,
    title,
    artist,
  } = props;

  return (
    <div className="col-md-2 col-sm-4 col-6" onClick={getDetails}>
      <div
        className="albums__item"
        style={{ backgroundImage: `url('./app/assets/${albumCover}')` }}
      />
      <div
        className="albums__item-favorite"
        style={{ display: renderFavorites ? 'block' : 'none' }}
      >
        {isFavorite ? (
          <img
            src="./app/assets/star-filled.svg"
            alt="Favorite Icon"
            onClick={event => {
              setFavorite(event, false, id);
            }}
          />
        ) : (
          <img
            src="./app/assets/star.svg"
            alt="Favorite Icon"
            onClick={event => {
              setFavorite(event, true, id);
            }}
          />
        )}
      </div>
      <div className="albums__description">
        <h3 className="heading-tertiary">{title}</h3>
        <p className="paragraph">{artist}</p>
      </div>
    </div>
  );
}
