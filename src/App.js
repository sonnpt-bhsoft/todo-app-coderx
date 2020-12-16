import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";
import selectAll from "./img/select-all.png";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      newItem: "",
      todoItem: [
        { title: "First", isCompleted: true },
        { title: "Second", isCompleted: true },
        { title: "Third", isCompleted: false },
      ],
    };

    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      const isCompleted = item.isCompleted;
      console.log(isCompleted);
      const { todoItem } = this.state;
      const index = todoItem.indexOf(item);
      this.setState({
        todoItem: [
          ...todoItem.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted,
          },
          ...todoItem.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      // enter key
      let text = event.target.value;
      if (!text) {
        return;
      }

      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: '',
        todoItem: [{ title: text, isCompleted: false }, ...this.state.todoItem],
      });
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value,
    })
  }

  render() {
    const { todoItem, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={selectAll} width={30} height={30} alt="" />
          <input
            type="text"
            placeholder="Add new note"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {todoItem.length > 0 &&
          todoItem.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClick(item)}
            />
          ))}
      </div>
    );
  }
}
