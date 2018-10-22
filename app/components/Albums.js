import React from 'react';
import { postFavorite, deleteFavorite } from '../utils/api';

class Albums extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            isFavorite: props.isFavorite,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isFavorite !== nextProps.isFavorite) {
            this.setState(() => ({ isFavorite: nextProps.isFavorite }));
        }
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

    setFavorite(event, favorite) {
        event.stopPropagation();
        favorite 
            ? this.postFavorite() 
            : this.deleteFavorite(); 
    }

    postFavorite = async() => {
        const post = await postFavorite(this.props.userLoggedId, this.props.id);
    
        if(post.status === 200) {
            this.setState(() => ({ isFavorite: true }));
        } else {
            console.log("Something went wrong");
        }
    }

    deleteFavorite = async() => {

        const del = await deleteFavorite(this.props.userLoggedId, this.props.id);
        if(del.status === 200) {
            this.setState(() => ({ isFavorite: false }));
        } else {
            console.log("Something went wrong");
        }
    }

    render() {
        return (
            <div className='col-md-2 col-sm-4 col-6' onClick={this.handleClick}>
                <div className='albums__item' style={{backgroundImage: `url('./app/assets/${this.props.albumCover}')`}}></div>
                <div className="albums__item-favorite" style={{display: this.props.renderFavorites ? 'block' : 'none' }}>
                    {this.state.isFavorite 
                        ? <img src="./app/assets/star-filled.svg" onClick={(event) => {this.setFavorite(event, false)}}></img> 
                        : <img src="./app/assets/star.svg" onClick={(event) => {this.setFavorite(event, true)}}></img>}
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
