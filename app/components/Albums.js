import React from 'react';

export default function Albums(props) {
    return (
        <div className='col-md-2 col-sm-4 col-6' onClick={props.getDetails}>
            <div className='albums__item' style={{backgroundImage: `url('./app/assets/${props.albumCover}')`}}></div>
            <div className="albums__item-favorite" style={{display: props.renderFavorites ? 'block' : 'none' }}>
                {props.isFavorite
                    ? <img src="./app/assets/star-filled.svg" onClick={(event) => {props.setFavorite(event, false, props.id)}}></img> 
                    : <img src="./app/assets/star.svg" onClick={(event) => {props.setFavorite(event, true, props.id)}}></img>}
            </div>
            <div className="albums__description">
                <h3 className="heading-tertiary">{props.title}</h3>
                <p className="paragraph">{props.artist}</p>
            </div>
        </div>
    );
}

