import React from "react";
import { Link } from "react-router-dom";
import {NavBar} from '../components/NavBar';

export const Home = ({loggedIn , userInfo}) => {

  return (
    <div className="home-wrapp">
      {!loggedIn?(
        <React.Fragment>
          <Link to="/login">LogIn</Link><br/>
          <Link to="/signUp">SignUp</Link>
        </React.Fragment>
      ):(
        <React.Fragment>
          <NavBar page={'Home'} userInfo={userInfo}/>
          <Link to="/logOut">logOut</Link>
        </React.Fragment>
      )}

      <h2>HOOOOOme</h2>
    </div>
)};
