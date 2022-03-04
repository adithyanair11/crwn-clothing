import React from "react";
import {Link} from 'react-router-dom';
import './header.component.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export const Header = connect(mapStateToProps)(({currentUser}) => {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>)
                    :
                    (<Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>)
                }
            </div>
        </div>
    );
})