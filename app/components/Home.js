import React from 'react';
import Header from './Header';
import Collections from './Collections';
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

  askForAlbumCollection = async() => {
    const collections = await getAlbumCollections();
    this.setState(() => ({ collections }))
  }

  userLooged(id) {
    this.setState(() => ({ userLoggedId: id }));
    //User is logged in: ask for the his 'favorites'
    this.askForUserFavorites(this.state.userLoggedId);
  }

  askForUserFavorites = async(id) => {
    const userFavorites = await getUserFavorites(id);
    this.setState((state) => ({ userFavorites: userFavorites }));
  }

  

  render() {
    return (
      <div className='container'>
        <Header callback={this.userLooged.bind(this)}/>
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
