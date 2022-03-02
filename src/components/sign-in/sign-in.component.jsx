import React from "react";
import { FormInput } from "../form-input/form-input.component";
import {CustomButton} from '../custom-button/custom-button.component';
import './sign-in.component.css';
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
handleSubmit = e => {
    e.preventDefault();
    this.setState({email:'',password:''});
}

handleChange = e => {
    const {value,name} = e.target;
    this.setState({[name]:value})
}
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span className="sub-text">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput name="email" 
                    value={this.state.email}
                    type="email"
                    label="email"
                    handleChange={this.handleChange}
                    required
                    />

                    <FormInput name="password" 
                    value={this.state.password} 
                    type="password"
                    label="password"
                    handleChange={this.handleChange}
                    required
                    />

                    <div className="button-container">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle}
                        isGoogleSignIn={true}>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}