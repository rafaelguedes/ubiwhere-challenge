import React from 'react';
import Header from '../components/Header';
import Collections from '../components/Collections';
import { getAlbumCollections, getUserFavorites } from '../utils/api';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      userLoggedId: null,
      userFavorites: []
    }
  }

  componentDidMount() {
    this.askForAlbumCollection();
  }

  // Asks for the Album Collections: all the musics
  askForAlbumCollection = async() => {
    const collections = await getAlbumCollections();
    this.setState(() => ({ collections }))
  }

  // User is logged in - callback
  // If user is logged in: ask for his 'favorites'
  userLooged(id) {
    this.setState(() => ({ userLoggedId: id }));
    this.askForUserFavorites(this.state.userLoggedId);
  }
  
  // Asks for user's 'favorites'
  askForUserFavorites = async(id) => {
    const userFavorites = await getUserFavorites(id);
    console.log(userFavorites);
    this.setState(() => ({ userFavorites }));
  }

  render() {
    return (
      <div className='container'>
        <Header renderLoginForm={true} callback={this.userLooged.bind(this)}/>
        <main className='albums'>
          {this.state.collections ? 
            this.state.collections.map((collection, index) => (
              <Collections 
                key={index} 
                genre={collection.genre} 
                albums={collection.albums}
                history={this.props.history}
                userLoggedId={this.state.userLoggedId}
                userFavorites={this.state.userFavorites}/>
          ))
          : <h1>No results.</h1>}
        </main>
      </div>
    );
  }
}

export default Home;
