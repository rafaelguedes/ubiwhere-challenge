import React from 'react';
import Header from './Header';
import Collections from './Collections';
import { getAlbumCollections } from '../utils/api';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    this.queryForAlbumCollection();
  }

  queryForAlbumCollection = async() => {
    const collections = await getAlbumCollections();
    this.setState(() => ({ collections }))
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <main className='albums'>
          {this.state.collections ? 
            this.state.collections.map((collection, index) => (
              <Collections 
                key={index} 
                genre={collection.genre} 
                albums={collection.albums}
                history={this.props.history}/>
          ))
          : <h1>No results.</h1>}
        </main>
      </div>
    );
  }
}

export default Home;
