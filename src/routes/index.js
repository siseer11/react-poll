import React from "react";
import { BrowserRouter, Route, Switch , Redirect} from "react-router-dom";
import {Home} from '../components/Home';
import {SignUpFormRouted} from "../containers/SignUpForm";
import {CompleteAuth} from '../containers/CompleteAuth';
import {LogInWithRoute} from '../containers/LogIn';
import {LogOutRouted} from '../containers/LogOut';
import Profile from '../components/Profile';
import {Profiles} from '../components/Profiles';

export default ({loggedIn , userInfo}) =>
	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={()=><Home loggedIn={loggedIn} userInfo={userInfo}/>}/>
			<Route exact path='/signUp' component={SignUpFormRouted}/>
			<Route exact path='/logIn' render={() => <LogInWithRoute/>}/>
			<Route exact path='/logOut' render={() => <LogOutRouted  loggedIn={loggedIn} userInfo={userInfo}/>} />
			<Route exact path='/signUp/complete' component={CompleteAuth} />
			<Route exact path='/profile' component={Profiles}/>
			<Route exact path='/profile/:uid' component={Profile}/>
			<Redirect to='/' />
		</Switch>
	</BrowserRouter>


