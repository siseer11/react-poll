import React from "react";
import firebase from '../components/firebase';
import Input from '../components/Input';
import {withRouter} from 'react-router-dom';

class CompleteAuthorization extends React.Component {
	state = {
		avatar : '',
		displayName : '',
	}

	componentDidMount(){
		if(!firebase.auth().currentUser){
			this.props.history.push('/signUp')
		}
	}

	inputsChangeHandler = (e) => {
		this.setState({
			displayName : this.usernameInput.refs.input.value,
			avatar : this.avatarInput.refs.input.value,
		})
	}

	formSubmited = (e) => {
		e.preventDefault();
		const {displayName : username,avatar} = this.state;
		let user = firebase.auth().currentUser;
		const history = this.props.history;
		console.log(username , this.state.username)
		user.updateProfile({
			displayName : username,
			photoURL : avatar
		}).then(function() {
			setTimeout(()=>{
				history.push('/')
			},1000)
		}).catch(function(error) {
			console.log('error' + error)
		});

		firebase.database().ref(`users/${user.uid}`).update({
			avatar : avatar,
			displayName : username
		}).then((s)=>console.log('succes'))
		.catch((err)=>console.log(err))



	}


  render() {
		const {username,avatar} = this.state;
    return (
			<form onSubmit={this.formSubmited}>
				<Input
					type='text'
					value={username}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.usernameInput = element}
					>Username:</Input>
				<Input
					type='text'
					value={avatar}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.avatarInput = element}
					>Avatar:</Input>
				<input type='submit' value='Complete' />
			</form>
		);
  }
}

export const CompleteAuth = withRouter(CompleteAuthorization)