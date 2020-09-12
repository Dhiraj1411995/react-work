import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import {CardList} from './components/card-list/card-list.component'
import {Search} from './components/search-box/search-box.component';

class App extends Component{

  // constructor(){
  //   super();
  //   this.state={
  //     string:'niraj'
  //   }
  // }
  
  // render(){
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Hello I am {this.state.string} kumar!!!
  //         </p>
  //         <button onClick={()=>this.setState({string:'dhiraj'})}>Click Here!!!</button>
  //       </header>
  //     </div>
  //   );
  // }

  // constructor(){
  //   super();

  //   this.state={
  //     monsters:[
  //       {
  //         id:1,
  //         name:'monster1'
  //       },
  //       {
  //         id:2,
  //         name:'monster2'
  //       },
  //       {
  //         id:3,
  //         name:'monster3'
  //       }
  //     ]
  //   }
  // }

  // render(){
  //   return(
  //     <div className="App">
  //       {
  //         this.state.monsters.map(monster=>
  //         <h1 key={monster.id}>{monster.name}</h1>
  //         )
  //       }
  //     </div>   
  //   )
  // }

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }

    //this.handleChange=this.handleChange.bind(this);

  }

  // handleChange(e){
  //   this.setState({searchField:e.target.value})
  // }

  handleChange= e => this.setState({searchField:e.target.value})

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  render(){
    const {monsters,searchField}=this.state
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder='search monster' 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />        
      </div>     
    )
  }
}

export default App;
