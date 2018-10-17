import React from 'react';
import Albums from './Albums';

class Collections extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }  

  render() {
    return (
      <div>
        <div className='albums__heading'>
            <h1 className='heading-secondary'>{this.props.genre}</h1>
        </div>
        <div className='row'>
          {this.props.albums.map((album, index) => (
            <Albums key={album.id} 
              albumCover={album.albumCover} 
              title={album.title} 
              artist={album.artist} />
          ))}
        </div>
      </div> 
    );
  }
}

export default Collections;
