import React from "react";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1 className="text-center mt-4">To Do List</h1>
      <form>
        {/* <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2> */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button type="submit" className="btn btn-primary">
              +
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter item"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
      <div className="text-center">
        <button type="button" className="btn toggle-btn btn-outline-dark" aria-pressed="false">
          <span>Show all</span>
        </button>
        <button type="button" className="btn toggle-btn btn-outline-dark" aria-pressed="false">
          <span>Show current</span>
        </button>
        <button type="button" className="btn toggle-btn btn-outline-dark" aria-pressed="false">
          <span>Show completed</span>
        </button>
      </div>
      <h2 className="text-center mt-4">3 left</h2>
      <div className="col-8">
        <div>
          <div>
            <input id="todo-0" type="checkbox" />
            <h2>
              Example 1
            </h2>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary">
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
        <div>
          <div>
            <input id="todo-1" type="checkbox" />
            <h2>
              Example 2
            </h2>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary">
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
        <div className="todo stack-small">
          <div>
            <input id="todo-2" type="checkbox" />
            <h2>
              Example 3
            </h2>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary">
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
