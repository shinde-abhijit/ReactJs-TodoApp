import React, { Component } from "react";
import Task from "./Task";
import "./index.css";

export default class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = (id) => {
    console.log("Deleted", id);
    const oldItems = [...this.state.items];
    console.log("old Items", oldItems);
    const items = oldItems.filter((element, i) => {
      return i !== id;
    });
    console.log("New Items", items);
    this.setState({ items: items });
  };

  render() {
    return (
      <div>
        <div className="container-fluid col-12" id="mainTodoContainer">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <h2 className="text-center p-4 text-white">Todo App</h2>
              <div className="row">
                <div className="col-9 mt-2 ml-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write Your Task Here"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2 mt-2 px-3">
                  <button
                    className="btn btn-success form-control font-weight-bold col-12"
                    id="addTodoBtn"
                    onClick={this.handleAdd}
                  >
                    Add
                  </button>
                </div>
                <div className="container-fluid">
                  <ul id="dataList" className="list-unstyled row m-3 p-3">
                    {this.state.items.map((value, i) => {
                      return (
                        <Task
                          key={i}
                          id={i}
                          value={value}
                          sendData={this.handleDelete}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
