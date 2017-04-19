import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Wave,
  ChasingDots,
  FoldingCube,
  CubeGrid,
  RotatingPlane,
  Pulse,
  ThreeBounce,
 
} from 'better-react-spinkit'
var WebFont = require('webfontloader');

var _ = require('lodash');
import Question from './components/question.js';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    }
    
    WebFont.load({
    google: {
      families: ['Pacifico',"Slabo 27px",'Open Sans Condensed','Dosis']
    }
  });
  }
  render() {

     var styles = _.cloneDeep(this.constructor.styles);
     var button = _.cloneDeep(this.constructor.button);
    
     var answers = ["Great!","Can't complain","Eh","Terrible"];
     var q2Answers = ["Yep, Right now!","About an hour ago","Earlier today","Yesterday, maybe"];
     var q3Answers = ["Yeah, I can't wait!","Yeah, sure","Not particularly","Not at all"];

    return (
     <div style={styles.bg}>
      <div style={styles.textStyle}>To be Human</div>
      <div style={styles.loadingCont}>
        <FoldingCube size={60} color='#2081C3' />
       </div>
      
      <div style={styles.introText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam odio, suscipit id pulvinar blandit, scelerisque et eros. Nunc dictum gravida urna, id varius nisl finibus at. Curabitur ut tortor aliquet tortor laoreet tempor. Nam fringilla blandit ligula, sit amet vehicula turpis. Integer nec elementum nisi. Sed quis scelerisque nisl. Aliquam at semper eros. Donec eu lobortis elit, in varius nunc. Cras non massa in nisl scelerisque elementum. Cras quam justo, interdum ac eleifend in, porta et felis. Curabitur id euismod diam. Aliquam sed lorem in turpis tincidunt pretium. Sed dictum arcu mattis molestie cursus.
      </div>
      <Question question="How are you doing today?" answers={answers} />
      <div style={styles.divider}/>
      <Question question="Have you eaten recently?" answers={q2Answers} />
      <div style={styles.divider} />
      <Question question="Anything you're looking forward to?" answers={q3Answers} />
      <div style={styles.divider} />


      <div style={button.submitCont}>
       <button style={button.buttonStyle} onClick={() => {this.setState({isLoading: true})}}>
        <div style={button.buttonText}> Submit Answers </div>
      </button>
      </div>
     
      
      <div style={styles.divider} />
       <div style={styles.loadingCont}>
        <ThreeBounce size={30} color='#2081C3' />
       </div>
    
      
     </div>
    );
  }
}

App.button = {
  submitCont :{
   
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 179,
  },
   buttonText : {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 25,
    fontFamily: 'Dosis',
    opacity: 0.9,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonStyle : {
  
   marginTop: 20,
  
   borderRadius: 10,
   backgroundColor: '#2081C3',
   padding: 10,
  },
}

App.styles = {
  divider :{
    height: 100,
  },
  bg: {
    backgroundColor: "#A1B5D8",
    opacity: '0.9',
    height: '300vh',
    width: '100vw',
    padding: 10,
    
  
  },
  textStyle : {
    color: '#333',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 70,
    fontFamily: 'Pacifico',
    opacity: 0.9,
  },
  imgLogo : {
    align: 'center',
    marginTop: 30,
    width: 200,
    height: 200,
    color: '#FFFFFF',
  },
  loadingCont : {
    color: "#FFFFF",
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    height: 100,
    textAlign: 'center',
  },
  introText : {
    color: '#333',
    fontFamily: 'Dosis',
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
    marginLeft: 100,
    marginRight: 100,
  }
}


export default App;
