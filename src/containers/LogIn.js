import React from "react";
import Input from "../components/Input";
import firebase from '../components/firebase';
import {withRouter} from 'react-router-dom';
import { PersonSVG, PasswordSVG } from "../svgs/svgs";

class LogIn extends React.Component {
	state = {
		email : '',
		password : ''
	}
	
	componentDidMount(){
		console.log(firebase.auth().currentUser)
		if(firebase.auth().currentUser){
			this.props.history.push('/profile/Y6wW4CzE2RMIJLFPjxfRyaPv0ns1');
		}
	}

	formSubmited = (e) =>{
		e.preventDefault();
		const {email,password} = this.state;
		const history = this.props.history;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((u)=>{
				/* user good to go, login passed */
				history.push('/');
			}) 
			.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode + ' ' + errorMessage);
			});
	}

	inputsChangeHandler = () => {
		this.setState({
			email : this.emailInput.refs.input.value,
			password : this.passwordInput.refs.input.value,
		})
	}

  render() {
		const {email , password} = this.state;
    return (
			<form 
				className='full-form-center' 
				onSubmit={this.formSubmited}
			>
        <Input
					placeholder='Email'
          type="email"
          value={email}
          changeHandler={this.inputsChangeHandler}
					ref={element => (this.emailInput = element)}
					icon={<PersonSVG/>}
        >
          Email:
        </Input>
        <Input
					placeholder='Password'
          type="password"
          value={password}
          changeHandler={this.inputsChangeHandler}
					ref={element => (this.passwordInput = element)}
					icon={<PasswordSVG/>}
        >
          Password:
        </Input>
				<input
				 type='submit' 
				 value='Log in'
				 className='main-submit-btn' 
				 />
      </form>
    );
  }
}

export const LogInWithRoute = withRouter(LogIn);
