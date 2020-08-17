import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import  Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/home.component';


class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        {/* <Route exact path='/'  component={Homepage} /> */}

        
        {/* <Homepage/> */}
      </div>
    );
  }
}

export default App;
