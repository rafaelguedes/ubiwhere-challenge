import React from 'react';
import Header from './Header';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    //this.props.location.state; 
  }  

  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <Header />
        <main className='details'>
          <div className="details__artist row no-gutters">
            <div class="details__artist-pic col-12" 
              style={{backgroundImage: `linear-gradient(to right bottom, rgba(29, 185, 84, 0.8), rgba(66, 64, 64, 0.8)),url("../app/assets/${this.props.location.state.artistPic}")`}}>
            </div>
          </div>
          <div className="details__album row no-gutters">
              <div className="details__album-pic-container col-12">
                  <div className="details__album-pic" style={{backgroundImage: `url('../app/assets/${this.props.location.state.albumCover}')`}}></div>
              </div>
          </div>
          <div className="details__info row no-gutters">
              <div className="details__info-album col-12">
                  <h2 className="details__info-album-heading heading-secondary">{this.props.location.state.title}</h2>
                  <h3 className="heading-tertiary">Production: {this.props.location.state.producer}</h3>
                  <h3 className="heading-tertiary">Release Date: {this.props.location.state.date}</h3>
              </div>
              <div className="details__info-artist col-12">
                  <h3 className="heading-tertiary">About the artist</h3>
                  <p className="paragraph">{this.props.location.state.bio}</p>
              </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Detail;
