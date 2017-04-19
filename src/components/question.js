import React, { Component, } from 'react';
import '../App.css';


var WebFont = require('webfontloader');

var _ = require('lodash');


export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            selectedButton: -1,
        };
        this.getComponent = this.getComponent.bind(this);

    }

    getComponent(index) {
        var styles = _.cloneDeep(this.constructor.styles);
        var ans = this.props.answers;
        if(this.state.selectedButton === index) {
                return(
                    <button style={styles.selectedStyle} onClick={() => {
                       
                this.setState({ selectedButton: index });
                 }} >
                    <div style={styles.buttonText}> {ans[index]} </div>
                </button>
                )   
            }
            else {
                var text = ans[index];
                console.log(ans);
                console.log(text);
                return (
                    <button style={styles.buttonStyle} onClick={() => {
                        this.setState({ selectedButton: index }); }} >
                    <div style={styles.buttonText}> {text} </div>
                </button>
                    )
                 }   
            }
    

    render () {
         
        var styles = _.cloneDeep(this.constructor.styles);
        var components = [];
        var selectedState = [0,1,2,3];
        for(var i =0; i < 4; i++) {
            components.push(
                this.getComponent(i)
            )
        }
        return (
            <div style={styles.questionnaire}>
        <div style={styles.questionText}>
         {this.props.question}
        </div>
        <div style={styles.responses}>
         {components}
        </div>
      </div>
        )
    }
}

Question.styles = {
    responses :{
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
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
   marginLeft: 30,
   marginRight: 30,
   marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: "#F15156",
    padding: 10,
    flex: 1.5,
  },
  selectedStyle : {
   marginLeft: 30,
   marginRight: 30,
   marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: "#ed2127",
    padding: 10,
    flex: 1.5,
  },
  questionnaire :{
    
    marginLeft: 'auto',
    marginRight: 'auto',
    align: 'center',
    marginTop: 30,
  },
   questionText : {
    color: '#333',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 40,
    fontFamily: 'Pacifico',
    opacity: 0.9,
  },
}