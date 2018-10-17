import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <div className='row'>
                    <div className='header__title col-12 col-md-3'>
                        <h1 className='heading-primary'>Juke<span className='header__title-span'>box</span>&nbsp;&#10074;&#10074;</h1>
                    </div>
                    <div className='header__form col-12 col-md-9'>
                        <form className='header__form-group form-inline input-group-lg'>
                            <input type='text' className='header__form-group-input form-control' placeholder='Your e-mail'></input>
                            <input type="password" className="header__form-group-input form-control" placeholder='Your password'></input>
                            <button type="submit" className="header__form-group-btn btn-lg btn-primary btn-login">Log In</button> 
                        </form>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;