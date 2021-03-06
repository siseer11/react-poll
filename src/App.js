import React, { Component } from 'react';


import firebase from './components/firebase'
import Routes from './routes'

class App extends Component {
  state = {
    loggedIn : false,
    userInfo : {},
  }
  
  updateUserInfos = (obj) => { /* obj will have avatar , email , username , userId */
    this.setState((prevState) => ({ 
      userInfo : {
        ...prevState.userInfo,
        ...obj
      }
    }))
  }

  componentDidMount(){
    const copyThis = this;
    firebase.auth().onAuthStateChanged(function(user) {
      
      if (user) {
        console.log('frier on')
        copyThis.setState({
          loggedIn : true,
          userInfo : {
            userName : user.displayName,
            avatar : user.photoURL,
            userId : user.uid,
            email : user.email,
          },
        })
      } else {
        console.log('frier out')
        copyThis.setState({
          loggedIn : false,
          userInfo : {},
        })
      }
    });
  }

  render() {
    const {loggedIn,userInfo} = this.state;
    return (
      <div className="App">
        <Routes 
          loggedIn={loggedIn} 
          userInfo={this.state.userInfo}
          updateUserInfo={this.updateUserInfos}  
        />
      </div>
    );
  }
}

export default App;
