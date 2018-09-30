import React from 'react';
import firebase from 'firebase';
import {Spinner} from '../components/Spinner';
import {Spring , config } from 'react-spring';
import {Link} from 'react-router-dom';

export default class PollPage extends React.Component{
  state={
    loaded:false,
    pollInfo:{},
    noPoll: false,
    error : '',
    currentUserVoted : true,
  }

  componentDidMount(){
    //MUST PUT SOME CHECKER IF THE USER IS NOT LOGGED IN SHOW A MODAL WITH MUST LOGIN


    const pollId = this.props.match.params.pollid;
    firebase.database().ref('polls').child(pollId)
      .once('value')
      .then((snap)=>{
        const value = snap.val();
        if(value){
          //Check if the user that is curently on has voted
          if(value.totalVotes==0 || !Object.keys(value.peopleThatVoted).includes(this.props.userInfo.userId)){
            this.setState({
              currentUserVoted : false,
            })
          }

          this.setState({
            loaded: true,
            pollInfo : value
          })
        }else{
          //No poll with this id
          this.setState({
            loaded : true,
            noPoll : true,
          })
        }
      })
      .catch((error)=>{
        this.setState({
          error : error
        })
      })
  }
  render(){
    const {loaded , pollInfo , noPoll , error , currentUserVoted} = this.state;
    return(
      <div className='poll-page'>
        {
          !loaded?(
            <Spinner />
          ):(
            error?(
              <h2>{error}</h2>
            ):(
              noPoll?(
                <h2>There is no poll with that id!</h2>
              ):(
                currentUserVoted?(
                  <OnePollInfo info={pollInfo}/>
                ):(
                  <VotingForm pollOptions={Object.values(pollInfo.options)}/>
                )
              )
            )
          )
        }
      </div>
    )
  }
}

const VotingForm = ({pollOptions}) => (
  <div className='voting-form-modal'>
    <form>
      {
        pollOptions.map(el=>(
          <label>
            <input type='checkbox' value={el.value} key={el.value}/>
            {el.value}
          </label>
        ))
      }
      <label>
        <input value='none' type='checkbox'/>
        None. just want to see the results!
      </label>
    </form>
  </div>
)



const OnePollInfo = ({info}) => (
  <div className='one-poll-info'>
    <h2 className='poll-title'>
      {info.title}
    </h2>
    <div className='graph-box'>
      {
        Object.values(info.options).map(el=><PollDataBar key={el.value} optionInfos={el} totalVotes={info.totalVotes}/>)
      }
    </div>
    <div className='poll-label-info'>
      <Link to={`../profile/${info.authorId}`}>
        {info.authorName}
      </Link>
      <p className='poll-release-date'>
        {new Date(info.date).toLocaleDateString()}
      </p>
    </div>
  </div>
)


const PollDataBar = ({optionInfos , totalVotes}) => (
  <div className='poll-data'>
    <div className='bar'>
      <Spring 
        config={{ tension: 5, friction: 15, restDisplacementThreshold: 5 , delay: 300}}
        from={{h: 0}} 
        to={{h: Math.round(optionInfos.votes/totalVotes * 100)}}>
        {
          ({h}) => (
            <div className='inner-bar'
              style={{height : `${h}%`}}
            />
          )
        }
      </Spring>
    </div>
    <div className='bar-labe'>
      <p>
        {optionInfos.value}
      </p>
    </div>
  </div>
)