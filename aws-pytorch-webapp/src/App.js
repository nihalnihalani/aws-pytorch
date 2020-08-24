import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Team from './pages/Team';
import Introduction from './pages/Introduction';




class App extends Component {
	render() {
		return (
     <div>
       <Switch>
        <Route exact path='/' component={Introduction}/>
        <Route exact path='/homepage' component={Homepage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/team' component={Team}/>
      </Switch>
     </div> 
     
    );
  }
}

export default App;
