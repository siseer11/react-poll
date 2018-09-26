import React from 'react';
import Input from "../components/Input";
import {NavBar} from '../components/NavBar';
import firebase from '../components/firebase'

export default class CreatePollForm extends React.Component{
  state = {
    title : '',
    options : ['','',''],
  }
  inputsChangeHandler = (i) => {
    this.setState((prevState)=>({
      options : [
        ...prevState.options.slice(0,i),
        this[`input-${i}`].refs.input.value,
        ...prevState.options.slice(i+1)
      ]
    }))
  }

  inputFocused = (idx) => {
    const totalOptions = this.state.options.length;
    if(totalOptions-1 == idx){
      console.log('aici')
      this.setState((prevState)=>({
        options : [...prevState.options , ''],
      }))
    }
  }

  formSubmited = (e) => {
    e.preventDefault()
  }

  render(){
    let {options} = this.state;
    let {userInfo} = this.props;
    return(
      <div className="page-wrapp">
        <NavBar userInfo={userInfo}/>
        <form
          className='full-form-center'
          onSubmit={this.formSubmited}
        >
          {
            options.map((el,idx)=>(
              <Input
                key={idx}
                placeholder={idx==0?'Title':`Option ${idx}`}
                type="text"
                value={options[idx]}
                focusHandler = {()=>this.inputFocused(idx)}
                changeHandler={()=>this.inputsChangeHandler(idx)}
                ref={element => (this[`input-${idx}`] = element)}
              >
                Email:
              </Input>
            ))
          }
          <input
          style={{width:350 , maxWidth:300}}
          type='submit' 
          value='Create Poll'
          className='main-submit-btn' 
          />
        </form>
      </div>
    )
  }
}



/*





render() {
  const {email , password} = this.state;
  return (
    <form 
      className='full-form-center' 
      onSubmit={this.formSubmited}
    >
      <Input
        placeholder='Email'
        type="email"
        value={email}
        changeHandler={this.inputsChangeHandler}
        ref={element => (this.emailInput = element)}
        icon={<PersonSVG/>}
      >
        Email:
      </Input>
      <Input
        placeholder='Password'
        type="password"
        value={password}
        changeHandler={this.inputsChangeHandler}
        ref={element => (this.passwordInput = element)}
        icon={<PasswordSVG/>}
      >
        Password:
      </Input>
      <input
       type='submit' 
       value='Log in'
       className='main-submit-btn' 
       />
    </form>
    */