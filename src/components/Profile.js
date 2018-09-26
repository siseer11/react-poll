import React from 'react';
import {PropTypes} from 'prop-types';

export const Profile = ({userAvatar , displayName , userEmail}) => (
  <div className='profile'>
    <div className='profile-avatar' style={{backgroundImage : `url(${userAvatar})` , width: 200 ,height : 200 , backgroundSize:'cover'}}/>
    <div className='user-info'>
      <p>Username : {displayName}</p>
      <p>Email : {userEmail}</p>
    </div>
  </div>
)

Profile.propTypes = {
  userAvatar : PropTypes.string,
  displayName : PropTypes.string.isRequired,
  userEmail : PropTypes.string.isRequired,
}

Profile.defaultProps = {
  userAvatar : 'https://vignette.wikia.nocookie.net/powerlisting/images/2/26/Unknown_Character.png/revision/latest?cb=20161025113858',
}