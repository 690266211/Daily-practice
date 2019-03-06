import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
// import Day1 from './pages/day1'
import Day2 from './pages/day2'
import 'antd/dist/antd.css';
import './reset';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Day2 />
        </div>
      </Provider>
    );
  }
}

export default App;
