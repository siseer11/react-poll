import React from "react";
import Input from '../components/Input';
import firebase from "../components/firebase";
import {withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
	state = {
		'email' : '',
		'password' : '',
	}

	setUserData = (userId,email) => {
		firebase.database().ref('users/' + userId).set({
			uid: userId,
			email: email
		}).then((s)=>console.log('succes')).catch((err)=>console.log(err));
		console.log('done')
	}

	submitHandler = (e) => {
		e.preventDefault();
		const {email , password} = this.state;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email,password)
			.then((userData)=> {
				//store initial data about user;
				this.setUserData(userData.user.uid , userData.user.email)
				this.props.history.push(`${this.props.location.pathname}/complete`)
			})
			.catch((error) => {
				console.log(error)
			})
			
	}

	inputsChangeHandler = (e) => {
		this.setState({
			email : this.emailInput.refs.input.value,
			password : this.passwordInput.refs.input.value,
		})
	}

  render() {
		const {email : emailValue , password : passwordValue} = this.state;
    return (
			<form onSubmit={this.submitHandler}>
				<Input
					type='email'
					value={emailValue}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.emailInput = element}
					>Email:</Input>
				<Input
					type='password'
					value={passwordValue}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.passwordInput = element}
					>Password:</Input>
				
				<input type='submit' value='Sig-up' />
			</form>
		);
  }
}

export const SignUpFormRouted =  withRouter(SignUpForm);