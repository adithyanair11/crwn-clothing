import React from "react";
import {Link} from 'react-router-dom';
import './header.component.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropDown } from "../cart-dropdown/cart-dropdown.component";

const mapStateToProps = ({user:{currentUser},showCart:{hidden}}) => ({
    currentUser,
    hidden
});

export const Header = connect(mapStateToProps)(({currentUser,hidden}) => {
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
                <CartIcon />
            </div>
            {
                hidden ? null :
                <CartDropDown />
            }
        </div>
    );
})