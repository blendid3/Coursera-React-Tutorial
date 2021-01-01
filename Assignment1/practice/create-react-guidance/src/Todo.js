
import './Todo.css';
import React, { Component } from 'react';


class Todo extends Component {
  // render() {
  //   return (
  //   <div className={this.cssClasses()}>
  //   {this.state.description}
  //   <br />
  //   <button onClick={this.markAsDone}>Mark as Done</button>
  //   <button onClick={this.removeTodo}>Remove Me</button>
  //   </div>
  //   );
  //  }
  render() {
    return (
      <div className={this.cssClasses()}>
        {this.props.description}
        <br />
        <button className="MarkDone" onClick={this.markAsDone}>
          Mark as Done
        </button>
        <button className="RemoveTodo" onClick={this.removeTodo}>
          Remove Me
        </button>
      </div>
    );
  }

  constructor(props) {
        super(props);
        this.state = {
          description: props.description,
          done: false
        };
        this.markAsDone = this.markAsDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
  }
  markAsDone() {
    this.setState({ done: true });
  }
  cssClasses() {
        let classes = ['Todo'];
        if (this.state.done) {
          classes = [...classes, 'Done'];
        }
        return classes.join(' ');
  }

  removeTodo() {
        this.props.removeTodo(this.state.description);
  }

  }

export default Todo;