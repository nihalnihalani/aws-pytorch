import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';



class App extends Component {
	render() {
		return (
     <div>
       <Switch>
        <Route exact path='/' component={Homepage}/>
         
   
      </Switch>
     </div> 
     
    );
  }
}

export default App;
