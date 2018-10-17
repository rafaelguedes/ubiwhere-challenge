import React from 'react';

class Albums extends React.Component {

    constructor(props) {
        super(props);
        console.log("Albums Prop", props.albums)
    }  

    render() {
        return (
            this.props.albums.map((album) => (
            <div key={album.id}>
                <div className='albums__item' style={{backgroundImage: `url('./app/assets/album1.jpg')`}}></div>
                <div className="albums__description">
                    <h3 className="heading-tertiary">{album.title}</h3>
                    <p className="paragraph">Album name</p>
                </div>
            </div>
            ))
        );
    }
}

export default Albums;
