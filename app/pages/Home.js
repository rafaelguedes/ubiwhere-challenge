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
      userFavorites: [],
    };
  }

  componentDidMount() {
    this.askForAlbumCollection();
  }

  // Asks for the Album Collections: all the musics
  askForAlbumCollection = async () => {
    const collections = await getAlbumCollections();
    this.setState(() => ({ collections }));
  };

  // Asks for user's 'favorites'
  askForUserFavorites = async id => {
    const userFavorites = await getUserFavorites(id);
    this.setState(() => ({ userFavorites }));
  };

  // User is logged in - callback
  // If user is logged in: ask for his 'favorites'
  userLooged(id) {
    this.setState(() => ({ userLoggedId: id }));
    const { userLoggedId } = this.state;
    this.askForUserFavorites(userLoggedId);
  }

  render() {
    const { collections, userLoggedId, userFavorites } = this.state;
    const { history } = this.props;
    return (
      <div className="container">
        <Header renderLoginForm callback={this.userLooged.bind(this)} />
        <main className="albums">
          {collections ? (
            collections.map((collection, index) => (
              <Collections
                key={index}
                genre={collection.genre}
                albums={collection.albums}
                history={history}
                userLoggedId={userLoggedId}
                userFavorites={userFavorites}
              />
            ))
          ) : (
            <h1>No results.</h1>
          )}
        </main>
      </div>
    );
  }
}

export default Home;
