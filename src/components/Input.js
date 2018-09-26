import React from "react";

export default class Input extends React.Component {
  render() {
    const { changeHandler, inputValue, type, placeholder, icon , focusHandler} = this.props;
    return (
      <label className={icon?'input-icon-left':'input-text'}>
        {icon}
        <input 
          onFocus={focusHandler}
          className={icon?'main-text-input':'input-text-underline'}
					ref='input'
          type={type} 
          onChange={changeHandler} 
          value={inputValue}
          placeholder={placeholder}
        />
      </label>
    );
  }
}

