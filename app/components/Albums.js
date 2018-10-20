import React from 'react';

class Albums extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const id = this.props.id;

        this.props.history.push({
            pathname: '/detail/' + id,
            state: {
                artistPic: this.props.artistPic,
                albumCover: this.props.albumCover,
                title: this.props.title,
                producer: this.props.producer,
                date: this.props.date,
                bio: this.props.bio
            }
        });
    }

    render() {
        return (
            <div className='col-md-2 col-sm-4 col-6' onClick={this.handleClick}>
                <div className='albums__item' style={{backgroundImage: `url('./app/assets/${this.props.albumCover}')`}}></div>
                <div className="albums__item-favorite" style={{display: this.props.renderFavorites ? 'block' : 'none' }}>
                    {this.props.isFavorite 
                        ? <img src="./app/assets/star-filled.svg"></img> 
                        : <img src="./app/assets/star.svg"></img>}
                </div>
                <div className="albums__description">
                    <h3 className="heading-tertiary">{this.props.title}</h3>
                    <p className="paragraph">{this.props.artist}</p>
                </div>
            </div>
        );
    }
}

export default Albums;
