import React from 'react';
import Albums from './Albums';

class Collections extends React.Component {

  constructor(props) {
    super(props);
  }

  isFavorite(id) {
     return this.props.userFavorites.find(favorite => favorite.id === id) ?  true : false;
  }

  render() {
    
    return (
      <div>
        <div className='albums__heading'>
            <h1 className='heading-secondary'>{this.props.genre}</h1>
        </div>
        <div className='row'>
          {this.props.albums.map((album) => (
            <Albums 
              key={album.id} 
              id={album.id}
              artistPic={album.artistPic}
              artist={album.artist}
              albumCover={album.albumCover} 
              title={album.title} 
              producer={album.producer}
              date={album.date}
              bio={album.bio}
              history={this.props.history}
              renderFavorites={this.props.userLoggedId ? true : false} 
              isFavorite={this.isFavorite(album.id) ? true : false}
              />
          ))}
        </div>
      </div> 
    );
  }
}

export default Collections;
