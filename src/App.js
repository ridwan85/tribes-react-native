import React, {Component} from 'react';
import Router from './routes/Router';
// global.___DEV___ = false;

class App extends Component {
  componentWillMount() {
    console.log('Component Mount From APP.js');
  }

  render() {
    return <Router />;
  }
}

export default App;
