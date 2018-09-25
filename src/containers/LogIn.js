import React from "react";
import Input from "../components/Input";
import firebase from '../components/firebase';
import {withRouter} from 'react-router-dom';

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
      <form onSubmit={this.formSubmited}>
        <Input
          type="email"
          value={email}
          changeHandler={this.inputsChangeHandler}
          ref={element => (this.emailInput = element)}
        >
          Email:
        </Input>
        <Input
          type="password"
          value={password}
          changeHandler={this.inputsChangeHandler}
          ref={element => (this.passwordInput = element)}
        >
          Password:
        </Input>
				<input type='submit' value='Log in'/>
      </form>
    );
  }
}

export const LogInWithRoute = withRouter(LogIn);
