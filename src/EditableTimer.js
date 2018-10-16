import React, { Component } from 'react'; 
import './EditableTimer.css'; 


class EditableTimer extends Component{
  constructor(props){
    super(props)
    this.state = {
        title: '',
        project: '',
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
    this.props.edit(e.target.id, {...this.state})
    this.setState({
      title: '',
      project: '',
    })
  }

  render(){
    return(
      <div className='timer'>
        <div className='icon-div'>
          <i className='fas fa-ban delete' id={this.props.id} onClick={this.props.delete}></i>
          <i className='fas fa-edit edit' id={'edit' + this.props.id} onClick={this.props.showEdit}></i>
        </div>
        <h1>{this.props.title}</h1>
        <h3 className='project'>{this.props.project}</h3>
        <h2>{this.props.timeElapsed}</h2>
        <button onClick={this.props.start} className='start' id={'st' + this.props.id} value={this.props.id}>Start</button>
        <button onClick={this.props.stop} className='stop' id={'sp' + this.props.id} value={this.props.id}>Stop</button>
      </div>
        // <div>
        //     <form className='edit-task' onSubmit={this.handleSubmit}>
        //       <div className='edit-input-1'>
        //         <label>Task:
        //           <input 
        //             name='title' 
        //             value={this.state.title}
        //             onChange={this.handleChange}
        //             autoComplete='off'
        //           />
        //         </label>
        //       </div>
        //       <div className='edit-input-2'>
        //         <label>Project:
        //           <input 
        //             name='project' 
        //             value={this.state.project}
        //             onChange={this.handleChange}
        //             autoComplete='off'
        //           />
        //         </label>
        //       </div>
        //       <button type='submit' className='edit'>Edit</button>
        //       <button className='cancel' onClick={this.props.show}>Cancel</button>
        //     </form>
        // </div>
    )
  }
}

export default EditableTimer;