import React, { Component } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shoppage/shoppage.component';
import {Header} from './components/header/header.component';
import {SignInUp} from './pages/sign-in-and-up/sign-in-and-up.component';
import { CheckOutPage } from "./pages/checkoutpage/checkoutpage.component";
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/user.selects'
class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/check-out" component={CheckOutPage}/>
          <Route exact path="/sign-in" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUp/>)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToprops)(App);