import React from "react";
import "./style.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
    this.displayRelevantTasks = this.displayRelevantTasks.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text,
      status: false
    };
    this.setState({
      items: this.state.items.concat(newItem),
      text: ""
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleDelete(id) {
    this.setState({
      items: this.state.items.filter(item => item.id != id)
    });
  }

  handleCompletion(id) {
    this.setState(() => {
      return (this.state.items.find(item => item.id === id).status = true);
    });
  }

  displayRelevantTasks(){
    this.setState(() => {
      return this.state.items
    });
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter todo item "
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button className="button">
            {" "}
            Add Task # {this.state.items.length + 1}
          </button>
        </form>
        <select>
          <option value="volvo">Completed Tasks</option>
          <option value="saab">Active Tasks</option>
          <option value="mercedes">All tasks</option>
        </select>
        <ul className="theList">
          {this.state.items.map(item => (
            <div className={item.status ? "textDecoration" : ""}>
              <li onClick={() => this.handleCompletion(item.id)} key={item.id}>
                {item.text}
                {item.status}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
