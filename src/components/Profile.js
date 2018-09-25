import React from "react";

import firebase from './firebase';

export default class Profile extends React.Component{
	
	componentDidMount(){
		firebase.database().ref(`users/${this.props.match.params.uid}`)
		.once('value')
		.then((snap)=>console.log(snap))
		.catch((error) => console.log(error))
		
	}

	render(){
		return(
			<div className="profile-wrapper">
				UserId: {this.props.match.params.uid}
			</div>
		)
	}

}
