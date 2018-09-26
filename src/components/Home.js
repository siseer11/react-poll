import React from "react";
import { Link } from "react-router-dom";
import {NavBar} from '../components/NavBar';

export const Home = ({loggedIn , userInfo}) => {

  return (
    <div className="home-wrapp">
      {!loggedIn?(
        <React.Fragment>
          <NavBar page={'Home'} userInfo={false}/>
        </React.Fragment>
      ):(
        <React.Fragment>
          <NavBar page={'Home'} userInfo={userInfo}/>
        </React.Fragment>
      )}

      <h2>HOOOOOme</h2>
    </div>
)};
