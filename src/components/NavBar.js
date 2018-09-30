import React from "react";
import {Link} from 'react-router-dom';
import {PollSVG} from '../svgs/svgs';

const UserOn = ({infos}) => (
	<React.Fragment>
		<Link to={'polls'} >
			<p>polls</p>
		</Link>
		<Link to={'create-poll'} >
			<p>create</p>
		</Link>
		<Link to={'logOut'} >
			<p>log out</p>
		</Link>
		<Link className='right-content' to={`profile/${infos.userId}`}>
			<p className='user-name'>{infos.userName}</p>
			<div className='user-avatar' style={{backgroundImage : `url(${infos.avatar})`}}></div>
		</Link>

	</React.Fragment>
)

const NoUserOn = props => (
	<React.Fragment>
		<Link to="/login">LogIn</Link>/
		<Link to="/signUp">SignUp</Link>
	</React.Fragment>
)

export const NavBar = ({ userInfo }) => (
  <div className="nav-bar">
		<div className='left-content'>
			<Link to='/'>
				<PollSVG classes='icon-30 icon-white'/>
			</Link>
		</div>
		<div className='right-content'>
			{
				userInfo?<UserOn infos={userInfo} />:<NoUserOn />
			}
		</div>
	</div>
);


NavBar.defaultProps = {
	userInfo : false
}