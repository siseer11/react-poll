import React from "react";
import firebase from '../components/firebase';
import Input from '../components/Input';
import {withRouter} from 'react-router-dom';
import {UserNameSVG} from '../svgs/svgs';
import {AvatarSVG} from '../svgs/svgs';

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
			displayName : username,
			completed: true
		}).then((s)=>console.log('succes'))
		.catch((err)=>console.log(err));

		this.props.updateUserInfo({
			avatar : avatar,
			userName : username
		})

	}


  render() {
		const {username,avatar} = this.state;
    return (
			<form 
				className='full-form-center' 
				onSubmit={this.formSubmited}
			>
				<Input
					type='text'
					value={username}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.usernameInput = element}
					placeholder='Username'
					icon={<UserNameSVG />}
					>Username:</Input>
				<Input
					type='text'
					value={avatar}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.avatarInput = element}
					placeholder='Avatar (url)'
					icon={<AvatarSVG />}
					>Avatar:</Input>
				<input 
					className='main-submit-btn' 
					type='submit' 
					value='Complete' 
				/>
			</form>
		);
  }
}
				 
export const CompleteAuth = withRouter(CompleteAuthorization)