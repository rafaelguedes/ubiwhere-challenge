import React from 'react';

class Albums extends React.Component {

    constructor(props) {
        super(props);
        console.log("Albums Prop", props)
    }  

    render() {
        return (
            <div className='col-md-2 col-sm-4 col-6'>
                <div className='albums__item' style={{backgroundImage: `url('./app/assets/${this.props.albumCover}')`}}></div>
                <div className="albums__description">
                    <h3 className="heading-tertiary">{this.props.title}</h3>
                    <p className="paragraph">{this.props.artist}</p>
                </div>
            </div>
        );
    }
}

export default Albums;
