import React, {Component} from 'react';
import './App.css';
import BasicInfo from './BasicInfo'

class App extends Component{
constructor(){
  super();
  this.state = {
    person: [
      {
          name: "Lenise",
          phone: "1",
          DOB: "June"
      }, 
      {
        name: "Lenise",
        phone: "1",
        DOB: "June"
      },  
      {
      name: "Lenise",
      phone: "1",
      DOB: "June"
      }    
    ]      
  }
}
  
render() {
  return <BasicInfo person={this.state.person} />
}
}


export default App;
