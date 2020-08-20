import React from "React";
import { browserHistory } from "react-router";

export class User extends React.Component {
    onNavigateHome(){
        browserHistory.push("/App");
    }
    render(){
        return(
          <button onClick = {this.onNavigateHome}>Home</button>  
        );
    }
    
}
