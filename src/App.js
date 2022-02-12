import React from 'react';

import {CardList} from './components/card-lists/card-lists.component';

import { SearchBox } from './components/search-box/search-box.component';


import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = (e) => {
     this.setState({ searchField: e.target.value})
    };
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='search monsters'
        handleChange= {this.handleChange} />
        <CardList monsters={filteredMonsters}/>
        <footer>
          Built by Odafe Alaiya
        </footer>
      </div>
    )
  }
}

export default App;
