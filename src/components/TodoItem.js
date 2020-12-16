import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';

import "./TodoItem.css";
import checkImg from "../img/check.png";
import uncheckImg from "../img/uncheck.png";

export default class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = uncheckImg;
    if (item.isCompleted) {
      url = checkImg;
    }
    return (
      <div
        className={classnames("TodoItem", {
          "TodoItem-complete": item.isCompleted,
        })}
      >
        <img onClick={onClick} src={url} alt="check" width={30} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
}
