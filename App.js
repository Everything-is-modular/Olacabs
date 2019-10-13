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
    fetch("https://my-json-server.typicode.com/Everything-is-modular/Ola/db")
    .then((resp) =>{
      return resp.json()
    })
    .then((response)=>{
      console.log("this is rides",response)
        this.setState({
          rides:response.rides
        })
    })
  }
  render(){
    console.log(this.state.rides)
    return (
      <div className="wrapper">
        <Header />
        {
          this.state.rides.map((ride,index) => {
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
