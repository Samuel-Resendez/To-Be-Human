import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SumBarChart from './components/barChart.js';
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


const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer,VictoryTheme } from 'victory';




var _ = require('lodash');
import Question from './components/question.js';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      renderGraphs: false,
      answers: [-1,-1,-1,-1],
    }
    
    WebFont.load({
    google: {
      families: ['Pacifico',"Slabo 27px",'Open Sans Condensed','Dosis']
    }
  });
  this.updateUserAnswers = this.updateUserAnswers.bind(this);
}

  updateUserAnswers(questionNum, answer) {
    var newArr = this.state.answers;
    newArr[questionNum-1] = answer;
    this.setState({
      answers: newArr,
    });
  }




  render() {

    console.log(this.state.answers);

     var styles = _.cloneDeep(this.constructor.styles);
     var button = _.cloneDeep(this.constructor.button);
    
     var answers = ["Great!","Can't complain","Eh","Terrible"];
     var q2Answers = ["Yep, Right now!","About an hour ago","Earlier today","Yesterday, maybe"];
     var q3Answers = ["Yeah, I can't wait!","Yeah, sure","Not particularly","Not at all"];
     var q4Answers = ["On the daily","2-3 times a week","2-3 times a month","Rarely","Never"];
   
     
     var loadingBar = [];
     if(this.state.isLoading) {
       loadingBar.push(
         <div style={styles.loadingCont}>
          <ThreeBounce size={30} color='#2081C3' />
        </div>
       )
     }

    return (
     <div style={styles.bg}>
      <div style={styles.textStyle}>To be Human</div>
      <div style={styles.loadingCont}>
        <FoldingCube size={60} color='#2081C3' />
       </div>
      
      <div style={styles.introText}>
       
       To be human is just a survey with the intent to gauge how people feel in the day to day by asking some very basic questions. The idea is pretty simple, but if you're curious what others have responded with, feel free and go ahead
       and answer the questions and find out. If you feel that theres other questions 
       you think would be worth asking, let me know. Cheers!
      </div>
      <Question 
      question="How are you doing today?" 
      qNum={1} 
      updatePar={this.updateUserAnswers}
      answers={answers} 
      numAnswers={4}/>
      <div style={styles.divider}/>
     
      <Question 
      question="Anything you're looking forward to?" 
      updatePar={this.updateUserAnswers}
      qNum={2} 
      answers={q3Answers} 
      numAnswers={4}/>
      <div style={styles.divider} />

       <Question question="Have you eaten recently?"
      qNum={3} 
      updatePar={this.updateUserAnswers}
      answers={q2Answers} 
      numAnswers={4} />
      <div style={styles.divider} />


      <Question 
      question="How often do you get exercise?" 
      qNum={4} //Used to update the current user responses
      updatePar={this.updateUserAnswers}
      answers={q4Answers} 
      numAnswers={5} />
      <div style={styles.divider} />



      <div style={button.submitCont}>
       <button style={button.buttonStyle} onClick={() => {this.setState({isLoading: true})}}>
        <div style={button.buttonText}> Submit Answers </div>
      </button>
      </div>
     
      
      <div style={styles.divider} />
      {loadingBar}
      <div style={styles.alignCont}>
      <span style={styles.textStyle}> Question 1 </span>
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        title="Question 1"
        
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={answers}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x / 200}%`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    
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

  alignCont : {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 600,
    
  },
  divider :{
    height: 100,
  },
  bg: {
    backgroundColor: "#A1B5D8",
    opacity: '0.9',
    height: '500vh',
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
