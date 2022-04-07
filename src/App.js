import React from "react";
import employeeData from "./utils/employeeData.json";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import { Component } from "react";

// Setting our class-based component
class App extends Component {
  constructor(props) {
    super(props);

    // Creating our states with these two values.
    this.state = { users: employeeData, searchUser: "" };
  }

  // Simple function to get the values that the user inputs and then updating the state with it.
  handleInput = (e) => {
    this.setState({ searchUser: e.target.value });
  };

  render() {
    // Our main app logic that filter what the user enters and then it just compare it with the data that we have in our JSON file.
    let filteredUsers = this.state.users.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchUser.toLowerCase());
    });
    return (
      // Rendering our main components on the UI and passing the data inside if them via props.
      <div className="App">
        <Header />
        <Search handleInput={this.handleInput} />
        <List filteredUsers={filteredUsers} />
      </div>
    );
  }
}

export default App;
