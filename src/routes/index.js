import React from "react";
import { BrowserRouter, Route, Switch , Redirect} from "react-router-dom";
import {Home} from '../components/Home';
import {SignUpFormRouted} from "../containers/SignUpForm";
import {CompleteAuth} from '../containers/CompleteAuth';
import {LogInWithRoute} from '../containers/LogIn';
import {LogOutRouted} from '../containers/LogOut';
import ProfilePage from '../containers/ProfilePage'
import {Profiles} from '../components/Profiles';
import CreatePollForm from '../containers/CreatePollForm';
import Polls from '../containers/Polls';
import PollPage from '../containers/PollPage'

export default ({loggedIn , userInfo , updateUserInfo}) =>
	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={()=><Home loggedIn={loggedIn} userInfo={userInfo}/>}/>
			<Route exact path='/signUp' component={SignUpFormRouted}/>
			<Route exact path='/logIn' render={() => <LogInWithRoute/>}/>
			<Route exact path='/logOut' render={() => <LogOutRouted  loggedIn={loggedIn} userInfo={userInfo}/>} />
			<Route exact path='/signUp/complete' render={() => <CompleteAuth updateUserInfo={updateUserInfo}/>} />
			<Route exact path='/profile' component={Profiles}/>
			<Route exact path='/polls' component={Polls}/>
			<Route exact path='/poll/:pollid' render={(props)=><PollPage loggedIn={loggedIn} userInfo={userInfo} {...props}/>}/>
			<Route exact path='/create-poll' render={()=><CreatePollForm userInfo={userInfo}/>}/>
			<Route exact path='/profile/:uid' render={(props)=><ProfilePage loggedUserInfo={userInfo} {...props}/>}/>
			<Redirect to='/' />
		</Switch>
	</BrowserRouter>
