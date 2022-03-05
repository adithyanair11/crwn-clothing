import React from "react";
import './custom-button.component.css';


export const CustomButton = ({children, isGoogleSignIn,inverted,...rest}) => {
    return(
        <button className=
        {
            `${inverted ? 'inverted' : ''}
            ${isGoogleSignIn?'google-sign-in': ''} custom-button`
        } 
        {...rest}>
            {children}
        </button>
    );
}