import React from 'react';
import './App.css';
import LayoutCom from './components';
//引入connect连接组件
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <LayoutCom />
    </div>
  );
}

export default App;

