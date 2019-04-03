import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users:[]
  }
  componentDidMount(){
    this.getUsers();
  }

  getUsers = _ => {
        axios.get('http://localhost:3001/users')
    .then((data) => {
      console.log(data);  
      console.log(data.data.users);
      this.setState({users: data.data.users});
    })
    // .then(({response}) => this.setState({users: response.users}))
    .catch(error => console.log(error));
  }
  showUsers = user => <div key={user.id}>{user.fullname}</div>
  render() {//building react method that comes inse od react component
    const { users } = this.state;
    return (//jsx code and can return only a single parent tag
      <div className="App">
        {users.map(this.showUsers)}
      </div>
    );
  }
}

export default App;
