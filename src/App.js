import React from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchField: e.target.value});
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({monsters: json}));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}



export default App;
