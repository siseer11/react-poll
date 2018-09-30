import React from 'react';
import firebase from '../components/firebase';
import {Spinner} from '../components/Spinner';
import {Link} from 'react-router-dom';

export default class Polls extends React.Component{
  state={
    loaded : false,
    pollsData : []
  }
  componentDidMount(){
    firebase
    .database()
    .ref('polls')
    .once('value')
    .then((snap)=>{

      const pollsData = [];
      const responseDate = snap.val();
      for(let key in responseDate){
        pollsData.push({
          ...responseDate[key],
          pollId : key
        })
      }

      this.setState(() => ({
        loaded : true,
        pollsData : pollsData,
      }))
    })
    .catch((err)=>console.log(err))
  }
  render(){
    const {loaded, pollsData} = this.state;
    return(
      <div className='all' style={{background:'#312F38',width:'100vw',height:'100vh'}}>
        {
          loaded?(
            <PollsList list={pollsData} />
          ):(
            <Spinner />
          )
        }
      </div>
    )
  }
}


const PollsList = ({list}) => (
  <ul className='all-polls-list'>
    {
      list.map(el => (
        <li key={el.pollId} className='poll-item'>
            <div className='poll-image'></div>
            <div className='right-content'>
              <h2 className='poll-title'><Link to={`poll/${el.pollId}`}>{el.title}</Link></h2>
              <div className='poll-label'>
                <Link to={`profile/${el.authorId}`}>
                  {el.authorName}
                </Link>
                <p className='total-votes'>
                  {el.totalVotes} votes
                </p>
              </div>
            </div>
          
        </li>
      ))
    }
  </ul>
)
















