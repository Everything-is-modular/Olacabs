import React from 'react';
import './App.css';
import Header from './Components/Header'
import Riders from './Components/Riders'
class App extends React.Component {
  constructor() {
    super()
    this.state={
      rides : [],
    }
  }
  componentDidMount(){
    fetch("https://my-json-server.typicode.com/Everything-is-modular/Ola/db").then((resp) =>{
      resp.json()
    })
    .then((rides)=>{
        this.setState({
          rides
        })
    })
  }
  render(){
    return (
      <div className="wrapper">
        <Header />
        {
          rides.map((ride,index) => {
            return (
              <Riders data={ride} key={`${index}`} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
