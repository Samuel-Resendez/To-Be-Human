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
    document.title = "To Be Human";
    this.state = {
      isLoading: false,
      renderGraphs: false,
      answers: [-1,-1,-1,-1],
      loadingComplete: false,
      serverData: null,
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
    
     var answers =   ["Great!","Can't complain","Eh","Terrible"];
     var q2Answers = ["Yep, Right now!","About an hour ago","Earlier today","Yesterday, maybe"];
     var q3Answers = ["Yeah, I can't wait!","Yeah, sure","Not particularly","Not at all"];
     var q4Answers = ["On the daily","2-3 times a week","2-3 times a month","Rarely","Never"];
   
     var graphs = [];
     if(this.state.serverData !== null) {
       console.log("Heres the data being passed: ");
       console.log(this.state.serverData.q1);
        graphs.push(
           <span style={styles.textStyle}> Question 1 </span>
        )
        graphs.push(
           <VictoryChart
           theme={VictoryTheme.material}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        width={800}
        height={500}
        padding={30}
        domainPadding={80}
        title="Question 1"
        
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={answers}
          style={{tickLabels: {fontSize: 20}}}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
         
        />
        <VictoryBar
        style={{data:{width: 80, padding: 10}}}
          data={this.state.serverData.q1}
          x="questionNum"
          y="A"
        />
        </VictoryChart>
        )
        graphs.push(
           <span style={styles.textStyle}> Question 2 </span>
        )
        graphs.push(
           <VictoryChart

            theme={VictoryTheme.material}
        
            width={800}
            height={500}
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={80}
            title="Question 1"
        
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={q2Answers}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
         
        />
        <VictoryBar
          style={{data:{width: 80, padding: 10}}}
          data={this.state.serverData.q2}
          x="questionNum"
          y="A"
        />
        </VictoryChart>
        )
         graphs.push(
           <span style={styles.textStyle}> Question 3 </span>
        )
        graphs.push(
           <VictoryChart

            theme={VictoryTheme.material}
        
            width={800}
            height={500}
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={80}
            title="Question 1"
        
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={q3Answers}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
         
        />
        <VictoryBar
          style={{data:{width: 80, padding: 10}}}
          data={this.state.serverData.q3}
          x="questionNum"
          y="A"
        />
        </VictoryChart>
        )
         graphs.push(
           <span style={styles.textStyle}> Question 4 </span>
        )
        graphs.push(
           <VictoryChart

            theme={VictoryTheme.material}
        
            width={800}
            height={500}
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={80}
            title="Question 1"
        
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={q4Answers}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
         
        />
        <VictoryBar
          style={{data:{width: 80, padding: 10}}}
          data={this.state.serverData.q4}
          x="questionNum"
          y="A"
        />
        </VictoryChart>
        )
     }
     
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
       <button style={button.buttonStyle} onClick={() => {
         this.setState({isLoading: true})
         var q1R = this.state.answers[0];
         var q2R = this.state.answers[1];
         var q3R = this.state.answers[2];
         var q4R = this.state.answers[3];
         data = {
           q1: q1R,
           q2: q2R,
           q3: q3R,
           q4: q4R,
         }
         fetch("http://tbh-server.ctpwh7imjp.us-west-1.elasticbeanstalk.com/TBH/entries/",{
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           method: "POST",
           body: JSON.stringify(data)
         }).then((res)=>{console.log(res)})
         .catch((err)=>{console.log(err)})
         

         //This ones to load the data 
         fetch("http://tbh-server.ctpwh7imjp.us-west-1.elasticbeanstalk.com/TBH/entries/?format=json",{
           headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
           },
           method: "GET"
         }).then((res) => {
           res.json().then((data)=>{
             console.log(this.state);

             var aggDat = {
               q1 : [
                { A : 0, questionNum: 1 },
                { A : 0, questionNum: 2 },
                { A : 0, questionNum: 3 },
                { A : 0, questionNum: 4 },
               ],
               q2 : [
                {A : 0, questionNum: 1 },
                {A : 0, questionNum: 2 },
                {A : 0, questionNum: 3 },
                {A : 0, questionNum: 4 },
               ],
               q3 : [
                {A : 0, questionNum: 1 },
                {A : 0, questionNum: 2 },
                {A : 0, questionNum: 3 },
                {A : 0, questionNum: 4 },
               ],
               q4 : [
                {A : 0, questionNum: 1 },
                {A : 0, questionNum: 2 },
                {A : 0, questionNum: 3 },
                {A : 0, questionNum: 4 }, 
               ]
             }
             
            for(var i = 0; i < data.length; i++) {
              for(var j = 1; j < 5; j++) {
                var pre = 'q' + j.toString();
                switch(data[i][pre]) {
                  case 0:
                      aggDat[pre][0]['A'] += 1
                      break
                  case 1:
                      aggDat[pre][1]['A'] += 1
                      break
                  case 2:
                      aggDat[pre][2]['A'] += 1
                      break
                  case 3:
                      aggDat[pre][3]['A'] += 1
                  default:
                      break
                }
              }
            }
            this.setState({
              isLoading: false,
              serverData: aggDat,
            });
            console.log(this.state.serverData);
           })
         }).catch((err)=>{console.log(err)})
         
         }}>
        <div style={button.buttonText}> Submit Answers </div>
      </button>
      </div>
     
      
      <div style={styles.divider} />
      {loadingBar}
      <div style={styles.alignCont}>
     
      {graphs}
    
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
    height: '600vh',
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
