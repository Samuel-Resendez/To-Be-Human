import React, { Component } from 'react';


var BarChart = require("react-chartjs").Bar;
var _ = require('lodash');


export default class barChart extends Component {


    render() {

        var styles = _.cloneDeep(this.constructor.styles);

        var options = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
             borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
             ],
                borderWidth: 1,
             }
            ]
        };

        var datum = [65, 59, 80, 81, 56, 55, 40];

        return (
            <BarChart data={datum} options={options} style={styles.chart} />
        )
    }
}

barChart.style = {

    chart : {
        width: 500,
        height: 500,
    }
}