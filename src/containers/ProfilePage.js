import React from "react";
import firebase from '../components/firebase'
import {Profile} from '../components/Profile'

export default class ProfilePage extends React.Component {
	state = {
		loading : true,
		userAvatar : '',
		displayName : '',
		userEmail : '',
		noUser : false
	}

	componentDidMount() {
		
		firebase.database().ref(`users/${this.props.match.params.uid}`)
			.once('value')
			.then((snap) => {
				if(snap.val()){
					const info = snap.val();
					this.setState({
						loading: false,
						userAvatar: info.avatar,
						displayName: info.displayName,
						userEmail: info.email
					})
				}else{
					this.setState({
						loading: false,
						noUser : true
					})
				}
				
			})
			.catch((error) => console.log(error))
	}

	render() {
		const {userAvatar,loading,displayName,userEmail,noUser} = this.state;
		return (
			<div className="profile-wrapper">
				{
					loading?(
						<h2>Loading user info...</h2>
					):(
						noUser?
						<h2>NO SUCH USER</h2>:
						<React.Fragment>
						<Profile 
							userAvatar = {userAvatar}
							displayName = {displayName}
							userEmail = {userEmail}
						/>
						{this.props.loggedUserInfo.userId == this.props.match.params.uid && <h2> MAH PROFILE </h2>}
						</React.Fragment>
					)
				}
				{
					
				}
			</div>
		)
	}

}
