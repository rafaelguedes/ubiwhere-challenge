import React from 'react';
import Albums from './Albums';

class Collections extends React.Component {

  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <div>
        <div className='albums__heading'>
            <h1 className='heading-secondary'>{this.props.genre}</h1>
        </div>
        <div className='row'>
          {this.props.albums.map((album, index) => (
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
              history={this.props.history} />
          ))}
        </div>
      </div> 
    );
  }
}

export default Collections;
