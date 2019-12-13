/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import First from './src/first';
import Second from './src/second';
// import Three from './src/three'; IN PROGRESS
import Four from './src/Four';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Four />
    );
  }
}


export default App;
