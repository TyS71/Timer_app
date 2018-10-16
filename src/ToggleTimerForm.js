import React, { Component } from 'react'; 
import './ToggleTimerForm.css'; 
const uuidv4 = require('uuid/v4');


class ToggleTimerForm extends Component{
  constructor(props){
    super(props)
    this.state = {
        id: uuidv4(),
        title: '',
        project: '',
        timeElapsed: 0,
        runningSince: Date.now(),
        started: false 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value 
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onSave({...this.state})
    this.setState({
      id: uuidv4(),
      title: '',
      project: '',
      timeElapsed: 0,
      runningSince: Date.now(),
      started: false 
    })
  }

  render(){
    return(
      <div className='timer-form'>
        {this.props.showing ? 
        <form className='new-task' onSubmit={this.handleSubmit}>
          <div className='input-1'>
            <label>Task:
              <input 
                name='title' 
                value={this.state.title}
                onChange={this.handleChange}
                autoComplete='off'
              />
            </label>
          </div>
          <div className='input-2'>
            <label>Project:
              <input 
                name='project' 
                value={this.state.project}
                onChange={this.handleChange}
                autoComplete='off'
              />
            </label>
          </div>
          <button type='submit' className='submit'>Submit</button>
          <button className='cancel' onClick={this.props.show}>Cancel</button>
        </form>
      :<p id='add-timer' onClick={this.props.show}>+</p>}
      </div>
    )
  }
}

export default ToggleTimerForm;