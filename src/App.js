import React, { Component } from 'react';
import './App.css';

import Page1 from "./components/Page1";

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: "page1",
      component: ""
    }
  }

  onRouteChange = (route) => {
    //Code split
    switch(route){
      case "page1":
        this.setState({route: route});
      break;

      case "page2":
        import("./components/Page2").then((Page2) =>{
          this.setState({route: route, component: Page2.default});
        });
      break;

      case "page3":
        import("./components/Page3").then((Page3) =>{
          this.setState({route: route, component: Page3.default});
        });
      break;
    }
  }

  render() {
    switch(this.state.route){
      case "page1":
      return <Page1 onRouteChange={this.onRouteChange} />
      default:
      return <this.state.component onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
