import React, { Component } from 'react';
import {Container, Input, Button } from 'reactstrap';

import InputForm from './InputForm'
import "./ToDo.css"


class ToDo extends Component {
  state = {
    list: []
  };

  handleSubmit = task => {
    this.setState({list: [...this.state.list, task]});
  }
  
  handleDelete = (index) => {
    const newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({list: newList});
  }

  render() {
    return(
      <Container className="App">
      {/* // <h1 className="App-intro">
      // In this challenge your goal is to create a to do list: 
      //   </h1>
      //   <hr />
      //   <ul>
      //     <li>
      //       ability to accept a task from a user
      //     </li>
      //     <li>
      //        ability to add this to the state
      //     </li>
      //     <li>
      //        ability to display all of the tasks
      //     </li>
      //     <li>
      //        ability to evaluated if a task was completed and update the state
      //     </li>
      //   </ul>
      //   <hr /> */}

      <div className="main">
        <div><h1>MY TO DO LIST</h1>
        <p>Add tasks, check off when complete, or delete if no longer needed!</p>
        </div>
        <div>
          <InputForm onFormSubmit={this.handleSubmit} />
          <TodoList list={this.state.list} onDelete={this.handleDelete} />
        </div>
      </div>
      </Container>
    );
  } 
}

const TodoList = (props) => {
  const todoItem = props.list.map((todo, index) => {
    return <Task content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return( 
    <div>
      {todoItem}
    </div>
  );
}

const Task = (props) => {
  return(
    <div className="list">
      
      <div id="tasks"><Input id="checkbox" type="checkbox"></Input>{props.content}</div>
      <Button id="delete" onClick={() => {props.onDelete(props.id)}}>Delete</Button>
    </div>
  );
}


export default ToDo