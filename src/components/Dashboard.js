import React, { Component } from 'react';
import LineGraph from './LineGraph'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

import '../App.css'


const data = [
  {
    "id": "whisky",
    "color": "hsl(317, 70%, 50%)",
    "data": [
      {
        
        "x": "VA",
        "y": 40
      },
      {
       
        "x": "SE",
        "y": 12
      },
      {
        
        "x": "ZW",
        "y": 16
      },
      {
       
        "x": "AR",
        "y": 1
      },
      {
       
        "x": "PH",
        "y": 38
      },
      {
       
        "x": "TM",
        "y": 46
      },
      {
        
        "x": "SO",
        "y": 50
      },
      {
       
        "x": "GU",
        "y": 59
      },
      {
        
        "x": "YT",
        "y": 39
      }
    ]
  }]
  
class Dashboard extends Component{

  getDate(d){
    var date = new Date(d);
    var dateString = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    return dateString;
  }

  getGraphData( keys ) {
    var graphData = [];
    var i = 0;
    for (let key of keys) {
      graphData.push({"id": key, data: []});
      
      var keyData = this.state.list.map( healthRecord =>{
        var dataSet = {};
        dataSet["x"] = this.getDate( healthRecord.date );
        dataSet["y"] = healthRecord[key];
        return dataSet;            
      });

      graphData[i].data = keyData;
      i +=1;
    }
    return graphData;
  }

  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  
  componentWillMount() {
    var data = require('../health_data.json');
    this.setState({ list: data })

  }


  
  render(){
    return(
      <div className="Main-container">
        <Typography variant="display1" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={24}>
        
          <Grid item xs={6}>
            <Paper className="Paper-graph" square>
            <Typography variant="title" gutterBottom align="center" color="primary">Blood Pressure</Typography>
              <LineGraph graphData={ this.getGraphData(["bp_systlc", "bp_dstlc"]) } />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="Paper-graph" square>
              <Typography variant="title" gutterBottom align="center" color="primary">Blood Glucose</Typography>
              <LineGraph graphData={ this.getGraphData(["bld_sgr"]) } />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="Paper-graph" square>
              <Typography variant="title" gutterBottom align="center" color="primary">Pulse</Typography>
              <LineGraph graphData={ this.getGraphData(["pulse"]) } />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="Paper-graph" square>
              <Typography variant="title" gutterBottom align="center" color="primary">BMI</Typography>
              <LineGraph graphData={ this.getGraphData(["bmi"]) } />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="Paper-graph" square>
              <Typography variant="title" gutterBottom align="center" color="primary">Weight</Typography>
              <LineGraph graphData={ this.getGraphData(["weight"]) } />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default Dashboard;