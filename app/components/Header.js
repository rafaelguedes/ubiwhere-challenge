import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers, postUser } from '../utils/api';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            users: [],
            logged: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    handleClick(event) {
   
        if(this.state.logged) {
            this.setState(() => ({  user: '',email: '' }));
        } else {
            if(this.state.username && this.state.email) {
                //Ask for users: get the users from API and check if this user is already 'registered'
                this.askForUsers();
                event.preventDefault();
            }
        }
       
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    askForUsers = async() => {
        const users = await getUsers();
        this.setState(() => ({ users }));
        
        this.isRegistered();
    }

    isRegistered() {
        //Assuming that username must be unique: check for this username in the array of users
        //If the test returns undefined means that there's a new user and need to be posted on API
        this.state.users.find(user => user.username === this.state.username) 
            ? this.setState(() => ({ logged: true }))
            : this.registerUser()
    }

    registerUser = async() => {
        const post = await postUser(this.state.username, this.state.email);
        post.status === 200 ? this.setState(() => ({ logged: true })) : console.log("Something went wrong")
    }
 
    render() {
        return (
            <header className='header'>
                <div className='row'>
                    <div className='header__title col-12 col-md-3'>
                        <Link to={'/'} style={{ textDecoration: 'none', padding: 0, margin: 0 }}>
                            <h1 className='heading-primary'>
                                Juke<span className='header__title-span'>box</span>&nbsp;&#10074;&#10074;
                            </h1>
                        </Link>
                    </div>
                    <div className='header__form col-12 col-md-9'>
                        <form className='header__form-group form-inline input-group-lg'>
                            <input type='text' 
                                className='header__form-group-input form-control' 
                                placeholder='Your username' 
                                name='username' 
                                onChange={this.onChange} 
                                style={{display: this.state.logged ? 'none' : 'block' }}>
                            </input>
                            <input type="text" 
                                className="header__form-group-input form-control" 
                                placeholder='Your e-mail' 
                                name='email' 
                                onChange={this.onChange} 
                                style={{display: this.state.logged ? 'none' : 'block' }}>
                            </input>
                            <p className="header__form-greet paragraph paragraph--bold" 
                                style={{display: this.state.logged ? 'block' : 'none' }}>
                                Hi, {this.state.username}
                            </p>
                            <button type="submit" 
                                className="header__form-group-btn btn-lg btn-primary btn-login" 
                                onClick={this.handleClick}>
                                {this.state.logged ? 'Log Out' : 'Log In'}
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;