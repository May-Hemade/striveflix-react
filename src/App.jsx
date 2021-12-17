import React from 'react'
import MyNavBar from './components/MyNavBar';
import Header from './components/Header';
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
