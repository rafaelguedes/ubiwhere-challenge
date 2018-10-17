import React from 'react';
import Albums from './Albums';

class Collections extends React.Component {

  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <div>
        <div className='albums__heading'>
            <h1 className='heading-secondary'>{this.props.genre}</h1>
        </div>
        <div className='row'>
            <div className='col-md-2 col-sm-4 col-6'>
              <Albums albums={this.props.albums}/>
            </div>
        </div>
      </div> 
    );
  }
}

export default Collections;
