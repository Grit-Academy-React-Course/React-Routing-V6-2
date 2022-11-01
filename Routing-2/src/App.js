import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <div className="app">
          <NavLink to="/users">Users</NavLink>
        </div>
      </Fragment>
    )
  }
}

export default App;