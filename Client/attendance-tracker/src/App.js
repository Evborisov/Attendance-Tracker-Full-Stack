<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> master
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Switch, Route } from "react-router-dom";
import './App.css';

<<<<<<< HEAD
class App extends Component {
  state = {
    data: ""
  };


  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from index.js
  callBackendAPI = async () => {
    const response = await fetch("http://localhost:5000/express_backend");
    const body = await response.json();
    console.log(body);
    this.setState({ data: 'responce from the server' });
    console.log(this.state);

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
    ;
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
  }

  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
        <p>server get should be here {this.state.data} </p>
      </div>
    );
  }
}

export default App;





=======
function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>

    </div>
  );
}

export default App;
>>>>>>> master
