import React from 'react';
import Albums from './Albums';
import { postFavorite, deleteFavorite } from '../utils/api';

class Collections extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        userFavorites: [],
        userLoggedId: null
    }
    this.setFavorite = this.setFavorite.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    // Get the local storage and set the state with it
    const storeState = JSON.parse(window.localStorage.getItem('albumsStore'));
    if(storeState) {
        this.setState(() => ({ userFavorites: storeState.userFavorites, userLoggedId: storeState.userLoggedId  }));
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
        this.setState(() => ({ userFavorites: this.props.userFavorites, userLoggedId: this.props.userLoggedId }));
    }
    // Set the local storage whenever state updates (persisting state when route changes or page reloads)
    window.localStorage.setItem('albumsStore', JSON.stringify(this.state));
  }

  //Toggle 'favorite' by clicking in the star svg
  setFavorite(event, favorite, id) {
    event.stopPropagation();
    favorite 
        ? this.postFavorite(this.state.userLoggedId, id) 
        : this.deleteFavorite(this.state.userLoggedId, id);
  }

  // Post favorite and set state
  postFavorite = async(user, album) => {
      const post = await postFavorite(user, album);
      if(post.status === 200) {
          this.setState((prevState) => ({
              userFavorites: [...prevState.userFavorites, {id: album}]
          }));
      } else {
          console.log("Something went wrong");
      }
  }

  // Delete favorite and set state
  deleteFavorite = async(user, album) => {
      const del = await deleteFavorite(user, album);
      if(del.status === 200) {
          const refreshFavorites = this.state.userFavorites.filter((favorite) => favorite.id !== album);
          this.setState(() => ({ userFavorites: refreshFavorites }));
      } else {
          console.log("Something went wrong");
      }
  }

  // Checks if a specific album belongs to the user's 'favorites'
  isFavorite(id) {
    return this.state.userFavorites.find(favorite => favorite.id === id) ?  true : false;
  }

  // Get the 'Details' page
  getDetails(id, artistPic, albumCover, title, producer, date, bio) {
    //const id = this.props.id;
    this.props.history.push({
        pathname: '/detail/' + id,
        state: {
            artistPic,
            albumCover,
            title,
            producer,
            date,
            bio
        }
    });
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
              artist={album.artist}
              albumCover={album.albumCover} 
              title={album.title} 
              renderFavorites={this.state.userLoggedId ? true : false} 
              setFavorite={this.setFavorite}
              isFavorite={this.isFavorite(album.id)}
              getDetails={() => this.getDetails(album.id, album.artistPic, album.albumCover, album.title, album.producer, album.date, album.bio)}/>
          ))}
        </div>
      </div> 
    );
  }
}

export default Collections;

