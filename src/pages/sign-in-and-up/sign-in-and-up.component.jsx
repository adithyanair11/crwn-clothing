import React from "react";
import './sign-in-and-up.component.css';
import { SignIn } from "../../components/sign-in/sign-in.component";
import {SignUp} from "../../components/sign-up/signup.componnet";
export const SignInUp = () => {
    return(
        <div className="sign-in-up">
            <SignIn />
            <SignUp />
        </div>
    );
}


