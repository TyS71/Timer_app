import React, { Component } from 'react'; 
import EditableTimer from './EditableTimer';
import './TimerList.css';


class TimerList extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.delete = this.delete.bind(this);
  }
  start(e){
    this.props.handleStart(e.target.id);
  }
  stop(e){
    this.props.handleStop(e.target.id);
  }
  delete(e){
    this.props.handleDelete(e.target.id);
  }

  render(){
    let timers = this.props.timers.map((timer) => (
      <EditableTimer 
        id={timer.id}
        title={timer.title}
        project={timer.project}
        timeElapsed={timer.timeElapsed}
        runningSince={timer.runningSince}
        start={this.start}
        stop={this.stop}
        delete={this.delete}
      />
    ));
    return(
      <div className='list'>
        {timers}
      </div>
    )
  }
}

export default TimerList