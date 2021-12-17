import React from 'react'
import MyNavBar from './component/MyNavBar';
import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <Header/>
    </div>
  );
}

export default App;
