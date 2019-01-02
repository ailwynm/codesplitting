import React, { Component } from 'react';
import './App.css';

import Page1 from "./components/Page1";
import AsyncComponent from "./components/AsyncComponent";

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: "page1",
      component: null
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    switch(this.state.route){
      case "page1":
      return <Page1 onRouteChange={this.onRouteChange} />
      case "page2":
        const AsyncPage2 = AsyncComponent(()=> import("./components/Page2"));
        return <AsyncPage2 onRouteChange={this.onRouteChange} />
      case "page3":
        const AsyncPage3 = AsyncComponent(()=> import("./components/Page3"));
        return <AsyncPage3 onRouteChange={this.onRouteChange} />
      default:
    }
  }
}

export default App;
