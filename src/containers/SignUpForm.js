import React from "react";
import Input from '../components/Input';
import firebase from "../components/firebase";
import {withRouter} from 'react-router-dom';
import { EmailSVG, PasswordSVG } from "../svgs/svgs";

class SignUpForm extends React.Component {
	state = {
		'email' : '',
		'password' : '',
	}

	setUserData = (userId,email) => {
		firebase.database().ref('users/' + userId).set({
			uid: userId,
			email: email,
			completed: false
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
			<form className='full-form-center' onSubmit={this.submitHandler}>
				<Input
					placeholder='Email'
					type='email'
					value={emailValue}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.emailInput = element}
					icon={<EmailSVG/>}
					>Email:</Input>
				<Input
					placeholder='Password'
					type='password'
					value={passwordValue}
					changeHandler={this.inputsChangeHandler}
					ref={(element) => this.passwordInput = element}
					icon={<PasswordSVG/>}
					>Password:</Input>
				
				<input 
					className='main-submit-btn' 
					type='submit' 
					value='Sig-up' 
					/>
			</form>
		);
  }
}

export const SignUpFormRouted =  withRouter(SignUpForm);