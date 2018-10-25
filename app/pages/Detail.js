import React from 'react';
import Header from '../components/Header';

export default function Detail(props) {
  const { artistPic, albumCover, title, producer, date, bio } = props.location.state;
  return (
    <div className="container">
      <Header renderLoginForm={false} />
      <main className="details">
        <div className="details__artist row no-gutters">
          <div
            className="details__artist-pic col-12"
            style={{
              backgroundImage: `linear-gradient(to right bottom, rgba(29, 185, 84, 0.8), rgba(66, 64, 64, 0.8)),
              url("../app/assets/${artistPic}")`,
            }}
          />
        </div>
        <div className="details__album row no-gutters">
          <div className="details__album-pic-container col-12">
            <div
              className="details__album-pic"
              style={{ backgroundImage: `url('../app/assets/${albumCover}')` }}
            />
          </div>
        </div>
        <div className="details__info row no-gutters">
          <div className="details__info-album col-12">
            <h2 className="details__info-album-heading heading-secondary">{title}</h2>
            <h3 className="heading-tertiary">Production: {producer}</h3>
            <h3 className="heading-tertiary">Release Date: {date}</h3>
          </div>
          <div className="details__info-artist col-12">
            <h3 className="heading-tertiary">About the artist</h3>
            <p className="paragraph">{bio}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
