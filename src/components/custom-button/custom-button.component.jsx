import React from "react";
import './custom-button.component.css';


export const CustomButton = ({children, isGoogleSignIn,...rest}) => {
    return(
        <button className={`${isGoogleSignIn?'google-sign-in': ''} custom-button`} {...rest}>
            {children}
        </button>
    );
}