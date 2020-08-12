import React, { Component } from 'react'
import  Navbar from './components/navbar/menu';
import Homepage from './pages/home.component';


class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navbar/>
        <Homepage/>
      </div>
    );
  }
}

export default App;
