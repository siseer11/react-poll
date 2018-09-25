import React from "react";
import {Link} from 'react-router-dom';

export const NavBar = ({ userInfo , page }) => (
  <div className="nav-bar">
		<p>{page}</p>
			<Link className='right-content' to={`profile/${userInfo.userId}`}>
				<p className='user-name'>{userInfo.userName}</p>
				<div className='user-avatar' style={{backgroundImage : `url(${userInfo.avatar})`}}></div>
			</Link>
	</div>
);
