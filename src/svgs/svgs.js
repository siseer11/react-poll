import React from 'react'
import {PropTypes} from 'prop-types';


export const EmailSVG = ({classes}) => (
  <svg 
    className={classes}
    viewBox="0 0 20 20"
    width="100%"
    height='100%'
  >
    <title>envelope</title>
    <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"></path>
  </svg>
)

EmailSVG.propTypes = {
  classes : PropTypes.string,
}

export const PasswordSVG = ({classes}) => (
  <svg 
    className={classes} 
    viewBox="0 0 14 21"
    width="100%"
    height='100%'
  >
    <title>lock</title>
    <path d="M11.6685 8.93944V4.66742C11.6685 2.22436 9.28483 0 6.66774 0C4.04999 0 1.66694 2.22436 1.66694 4.66742V8.93944C0.632769 10.115 0 11.6512 0 13.3355C0 17.0121 2.99115 20.0032 6.66774 20.0032C10.3437 20.0032 13.3355 17.0121 13.3355 13.3355C13.3355 11.6512 12.702 10.115 11.6685 8.93944ZM7.00114 13.9089V16.336C7.00114 16.52 6.85178 16.6693 6.66775 16.6693C6.48305 16.6693 6.33436 16.52 6.33436 16.336V13.9089C6.13566 13.7935 6.00098 13.5808 6.00098 13.3355C6.00098 12.9681 6.29969 12.6687 6.66775 12.6687C7.03514 12.6687 7.33453 12.9681 7.33453 13.3355C7.33453 13.5808 7.19917 13.7935 7.00114 13.9089ZM11.0018 8.27867C9.83495 7.27718 8.32204 6.66775 6.66777 6.66775C5.01284 6.66775 3.5006 7.27718 2.33374 8.27867V4.66742C2.33374 2.61109 4.44008 0.666779 6.66777 0.666779C8.89546 0.666779 11.0018 2.61109 11.0018 4.66742V8.27867Z"></path>
  </svg>
)

PasswordSVG.propTypes = {
  classes : PropTypes.string,
}

export const PersonSVG = ({classes}) => (
  <svg 
    className={classes} 
    viewBox="0 0 20 20"
    width="100%"
    height='100%'
  >
    <title>lock</title>
    <path d="M18.5071 15.5871C17.9303 14.4361 16.0355 13.7426 13.4129 12.7819C13.0419 12.6465 12.6568 12.5052 12.2581 12.3561V10.2703C12.52 9.98387 13.1832 9.13097 13.2484 7.80645C13.431 7.6671 13.5768 7.40387 13.6606 7.0471C13.7942 6.48065 13.7239 5.8071 13.3065 5.43226C13.3348 5.35871 13.3697 5.27161 13.4019 5.18903C13.7103 4.41161 14.2852 2.96323 14.0606 1.83935C13.8065 0.568387 11.9568 0 10.2361 0C8.97806 0 7.44774 0.314839 7.01097 1.18323C6.5271 1.22774 6.15742 1.41935 5.90903 1.75419C5.2271 2.6729 5.73226 4.33935 6.00323 5.23419C6.02194 5.29742 6.04258 5.36387 6.05935 5.42129C5.63161 5.79355 5.55806 6.47484 5.69355 7.0471C5.77742 7.40387 5.92323 7.6671 6.10581 7.80645C6.16968 9.10581 6.81806 9.87161 7.09613 10.1432V12.3561C6.69677 12.5052 6.31097 12.6471 5.93935 12.7826C3.31677 13.7426 1.42194 14.4361 0.847097 15.5871C0.00903231 17.2632 0 18.9606 0 19.0323C0 19.2097 0.143871 19.3548 0.321935 19.3548H19.0323C19.2103 19.3548 19.3548 19.2097 19.3548 19.0323C19.3548 18.9606 19.3452 17.2632 18.5071 15.5871Z"></path>
  </svg>
)

PersonSVG.propTypes = {
  classes : PropTypes.string,
}


export const PollSVG = ({classes}) => (
  <svg 
    className={classes} 
    viewBox="0 0 24 24"
    width="100%"
    height='100%'
  >
    <title>poll</title>
    <path d="M17.016 17.016v-4.031h-2.016v4.031h2.016zM12.984 17.016v-10.031h-1.969v10.031h1.969zM9 17.016v-7.031h-2.016v7.031h2.016zM18.984 3c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.078 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.938-2.016 2.016-2.016h13.969z"></path>
 </svg>
)

PollSVG.propTypes = {
  classes : PropTypes.string,
}

export const UserNameSVG = ({classes}) => (
  <svg 
    className={classes} 
    viewBox="0 0 32 28"
    width="100%"
    height='100%'
  >
    <title>user-name</title>
    <path d="M16 17.672c0-2.422-0.594-5.109-3.063-5.109-0.766 0.438-1.797 1.188-2.938 1.188s-2.172-0.75-2.938-1.188c-2.469 0-3.063 2.688-3.063 5.109 0 1.359 0.891 2.328 2 2.328h8c1.109 0 2-0.969 2-2.328zM13.547 9.547c0-1.953-1.594-3.547-3.547-3.547s-3.547 1.594-3.547 3.547c0 1.969 1.594 3.547 3.547 3.547s3.547-1.578 3.547-3.547zM28 17.5v-1c0-0.281-0.219-0.5-0.5-0.5h-9c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h9c0.281 0 0.5-0.219 0.5-0.5zM28 13.438v-0.875c0-0.313-0.25-0.562-0.562-0.562h-8.875c-0.313 0-0.562 0.25-0.562 0.562v0.875c0 0.313 0.25 0.562 0.562 0.562h8.875c0.313 0 0.562-0.25 0.562-0.562zM28 9.5v-1c0-0.281-0.219-0.5-0.5-0.5h-9c-0.281 0-0.5 0.219-0.5 0.5v1c0 0.281 0.219 0.5 0.5 0.5h9c0.281 0 0.5-0.219 0.5-0.5zM32 4.5v19c0 1.375-1.125 2.5-2.5 2.5h-5.5v-1.5c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v1.5h-12v-1.5c0-0.281-0.219-0.5-0.5-0.5h-1c-0.281 0-0.5 0.219-0.5 0.5v1.5h-5.5c-1.375 0-2.5-1.125-2.5-2.5v-19c0-1.375 1.125-2.5 2.5-2.5h27c1.375 0 2.5 1.125 2.5 2.5z"></path>
</svg>
)

UserNameSVG.propTypes = {
  classes : PropTypes.string,
}


export const AvatarSVG = ({classes}) => (
  <svg 
    className={classes} 
    viewBox="0 0 32 32"
    width="100%"
    height='100%'
  >
    <title>avatar</title>
    <path d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>
    <path d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
    <path d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>
  </svg>
)

AvatarSVG.propTypes = {
  classes : PropTypes.string,
}