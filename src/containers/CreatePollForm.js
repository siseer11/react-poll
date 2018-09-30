import React from 'react';
import Input from "../components/Input";
import { NavBar } from '../components/NavBar';
import firebase from '../components/firebase'

export default class CreatePollForm extends React.Component {
  state = {
    title: '',
    options: [{
      key: firebase.database().ref('polls').push().key,
      value: ''
    }, {
      key: firebase.database().ref('polls').push().key,
      value: ''
    }],
  }

  inputsChangeHandler = (i) => {
    if (i == 'title') {
      this.setState({
        title: this.titleInput.refs.input.value
      })
    } else {
      this.setState((prevState) => ({
        options: [
          ...prevState.options.slice(0, i),
          {
            ...prevState.options[i],
            value: this[`input-${i}`].refs.input.value
          },
          ...prevState.options.slice(i + 1)
        ]
      }))
    }
  }

  inputFocused = (idx) => {
    const totalOptions = this.state.options.length;
    if (totalOptions - 1 == idx) {
      console.log('aici')
      this.setState((prevState) => ({
        options: [...prevState.options, {
          key: firebase.database().ref('polls').push().key,
          value: ''
        }],
      }))
    }
  }


  formSubmited = (e) => {
    const {title} = this.state;
    let options = [...this.state.options]
    e.preventDefault();
    //Check title
    if(!title) {
      console.log('You must set the title');
      return;
    }
  
    //Check to be more then 2 obtions
    options = options.filter(el=>el.value);
    if(options.length < 2) {
      console.log('You must have at least 2 options!')
      return;
    }


    let z = {};

    options.forEach(el=>{
      z[el.key] = {
        value : el.value,
        votes : 0
      }
    })

    let newKey = firebase
    .database()
    .ref('polls')
    .push().key

    let p1 = firebase
    .database()
    .ref('polls')
    .child(newKey)
    .set({
      title : title,
      author : firebase.auth().currentUser.uid,
      totalVotes : 0,
      votedBy : {},
      options : z,
      date : new Date().getTime(),
    })

    let p2 = firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('createdPolls').child(newKey).set({pollId : newKey})

    Promise.all([p1,p2]).then((val)=>{
      console.log(val)
    })
  
  }

  render() {
    let { options, title } = this.state;
    let { userInfo } = this.props;
    return (
      <div className="page-wrapp">
        <NavBar userInfo={userInfo} />
        <form
          className='full-form-center create-poll'
          onSubmit={this.formSubmited}
        >
          <Input
            placeholder={`Title`}
            type="text"
            value={title}
            changeHandler={() => this.inputsChangeHandler('title')}
            ref={element => (this.titleInput = element)}
          />
          {
            options.map((el, idx) => (
              <Input
                key={el.key}
                placeholder={`Option ${idx + 1}`}
                type="text"
                value={options[idx].value}
                focusHandler={() => this.inputFocused(idx)}
                changeHandler={() => this.inputsChangeHandler(idx)}
                ref={element => (this[`input-${idx}`] = element)}
              >
              </Input>
            ))
          }
          <input
            style={{ width: 350, maxWidth: 300 }}
            type='submit'
            value='Create Poll'
            className='main-submit-btn'
          />
        </form>
      </div>
    )
  }
}