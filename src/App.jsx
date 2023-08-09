import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
    <div id='appDiv'>
        <h3>This is the Boiler Plate title</h3>
        <Navigation />


    </div>
      
    );
  }

}
