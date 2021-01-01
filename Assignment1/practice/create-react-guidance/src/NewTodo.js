import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    handleUpdate(event) {
        this.setState({ item: event.target.value });
    }
    render() {
        return (
          <div className="NewTodo">
            <input
              type="text"
              onChange={this.handleUpdate}
              value={this.state.item}
            />
            &nbsp;&nbsp;
            <button onClick={this.addTodo}>Add</button>
          </div>
        );
      }
    addTodo() {
        this.props.addTodo(this.state.item);
        this.setState({ item: '' });
      }

}

export default NewTodo;
// import React, { Fragment, Component } from "react";
// import Todo from "./Todo";
// import "./TodoList.css";

// import NewTodo from "./NewTodo";
// import Divider from "./Divider";

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     const [item1, item2, ...rest] = [
//       "Write some code",
//       "Change the world",
//       "Take a nap",
//       "Eat a cookie"
//     ];
//     this.state = {
//       items: [item1, item2, rest.join(" and ")]
//     };

//     this.addTodo = this.addTodo.bind(this);
//     this.removeTodo = this.removeTodo.bind(this);
//   }
//   addTodo(item) {
//     this.setState({ items: [...this.state.items, item] });
//   }
//   removeTodo(removeItem) {
//     const filteredItems = this.state.items.filter(description => {
//       return description !== removeItem;
//     });
//     this.setState({ items: filteredItems });
//   }
//   renderItems() {
//     return this.state.items.map(description => (
//       <Fragment key={"item-" + description}>
//         <Todo
//           key={description}
//           description={description}
//           removeTodo={this.removeTodo}
//         />
//         <Divider key={"divide-" + description} />
//       </Fragment>
//     ));
//   }
//   render() {
//     return (
//       <div className="TodoList">
//         <NewTodo addTodo={this.addTodo} />
//         {this.renderItems()}
//       </div>
//     );
//   }
// }

// export default TodoList;