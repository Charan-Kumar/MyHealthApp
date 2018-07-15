import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import '../App.css'

class HealthRecords extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  getDate(d){
    var date = new Date(d);
    var dateString = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    return dateString;
  }
  
  componentDidMount() {
    var data = require('../health_data.json');
    this.setState({ list: data })
  }

  render() {
    return (
      <div className="Main-container">
        <Typography variant="display1" gutterBottom>
          My Health Records 
        </Typography>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Blood Pressure</TableCell>
                <TableCell>Blood Glucose</TableCell>
                <TableCell>Pulse</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>BMI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { this.state.list.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">{ this.getDate(n.date) }</TableCell>
                    <TableCell>{n.bp_systlc + '/' + n.bp_dstlc}</TableCell>
                    <TableCell>{n.bld_sgr}</TableCell>
                    <TableCell>{n.pulse}</TableCell>
                    <TableCell>{n.weight}</TableCell>
                    <TableCell>{n.bmi}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
};

export default HealthRecords;