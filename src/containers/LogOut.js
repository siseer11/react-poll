import React from "react";
import { Redirect , withRouter } from "react-router-dom";
import firebase from "../components/firebase";


class LogOut extends React.Component {
  signOutHandler = e => {
		e.preventDefault();
		const history = this.props.history;
    firebase
      .auth()
      .signOut()
      .then(() => {
				console.log("User loged out");
				history.replace('/');
      })
      .catch(error => {
        console.log(error);
      });
	};
	
	componentDidMount(){
		if(!this.props.loggedIn){
			this.props.history.replace('/');
		}
		
	}

  render() {
    const { loggedIn, userInfo } = this.props;
    return (
      <div className="logout-page">
        <p>
          {userInfo.userName} if you really want to log-out , click this{" "}
          <a onClick={this.signOutHandler} href="#">
            <b>link</b>
          </a>
        </p>
      </div>
    );
  }
}

export const LogOutRouted = withRouter(LogOut)