import React from "react";

export default class Input extends React.Component {
  render() {
    const { children, changeHandler, inputValue, type } = this.props;
    return (
      <label>
        {children}
				<input 
					ref='input'
					type={type} onChange={changeHandler} value={inputValue} />
      </label>
    );
  }
}
