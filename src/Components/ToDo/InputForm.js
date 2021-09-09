import React, { Component } from 'react'
import { Button, Input } from 'reactstrap'

class InputForm extends Component {
    state = { entry: '' };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.entry === '') return;
      this.props.onFormSubmit(this.state.entry);
      this.setState({ entry: '' });
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <Input id="input"
            placeholder='Enter Task'
            value={this.state.entry}
            onChange={(e) => this.setState({entry: e.target.value})}
          />
          <Button className='button'>Submit</Button>
        </form>
      );
    }
  }
  
  export default InputForm