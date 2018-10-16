import React, { Component } from 'react'; 
import TimerList from './TimerList'; 
import ToggleTimerForm from './ToggleTimerForm'; 
import "./TimerDashboard.css";
const uuidv4 = require('uuid/v4');

class TimerDashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      timers: [
        {
          id: uuidv4(),
          title: 'Learn React',
          project: 'learning',
          timeElapsed: 0,
          runningSince: Date.now(),
          started: false,
          showEdit: false
        },
        {
          id: uuidv4(),
          title: 'Cook Dinner',
          project: 'house chores', 
          timeElapsed: 0,
          runningSince: Date.now(),
          started: false,
          showEdit: false,
        }
      ],
      timerFormShowing: false
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  ifStarted(){
    let timers = this.state.timers.slice(); 
    timers.forEach((timer) => {
      if(timer.started){
        let start = document.querySelector('#st' + timer.id);
        let stop = document.querySelector('#sp' + timer.id);
        let edit = document.querySelector('#edit' + timer.id); 
        edit.style.display = 'none';
        start.style.display = 'none';
        stop.style.display = 'block';
      }else{
        let start = document.querySelector('#st' + timer.id);
        let stop = document.querySelector('#sp' + timer.id);
        let edit = document.querySelector('#edit' + timer.id); 
        edit.style.display = 'block';
        start.style.display = 'block';
        stop.style.display = 'none';
      }
    })
  }

  handleStart(id){
    //maybe use id to target each timer more accurately
    let timers = this.state.timers.slice();
    timers.forEach((timer) => {
      if('st' + timer.id === id){
        this.setState({timer: [...timer, timer.started=true]})
        let interval = setInterval(()=>{
          if(timer.started){
            this.setState({
              timer: [...timer, timer.timeElapsed++]
            })
          }else if(!timer.started){
            clearInterval(interval);
          }
        }, 10)
      }
    })
    this.ifStarted()
  } 

  handleStop(id){
    let timers = this.state.timers.slice();
    timers.forEach((timer) => {
      if('sp' + timer.id === id){
        this.setState({timer: [...timer, timer.started = false]})
      }
    })
    this.ifStarted()
  }

  handleDelete(id){
    let timers = this.state.timers.filter((timer) => timer.id != id);
    this.setState({timers})
    setTimeout(()=> {
      this.ifStarted()
    })
  } 


  //      TODOS
  //=======================
  //Handle Updating a timer
  //Handle the formatting of the timer


  handleSave(timer){
    let newTimer = {...timer}
    let timers = this.state.timers.slice();
    this.setState({
      timers: [...timers, newTimer],
      timerFormShowing: false
    })
  }

  handleShow(){
    this.setState({
      timerFormShowing: !this.state.timerFormShowing
    })
  }

  render(){
    return(
      <div className='dashboard'>
        <TimerList 
          timers={this.state.timers}
          handleStart={this.handleStart}
          handleStop={this.handleStop}
          handleDelete={this.handleDelete}
        /> 
        <ToggleTimerForm 
          onSave={this.handleSave}
          showing={this.state.timerFormShowing}
          show={this.handleShow}
        /> 
      </div>
    )
  }
}

export default TimerDashboard; 