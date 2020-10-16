import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="text-center mt-4">To Do List</h1>
      <form>
        <div className="input-group mb-3">
         
            <button type="submit" className="btn btn-primary">
              +
            </button>
          
          <input
            type="text"
            className="form-control"
            placeholder="Enter item"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
      <div className="text-center m-4">
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
            <input type="checkbox" />
            <h2>
              Example 1
            </h2>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary mb-2">
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger mb-2">
              Delete
            </button>
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <h2>
              Example 2
            </h2>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary mb-2">
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger mb-2">
              Delete
            </button>
          </div>
        </div>
        <div className="todo stack-small">
          <div>
            <input type="checkbox" />
            <h2>
              Example 3
            </h2>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary mb-2">
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger mb-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
