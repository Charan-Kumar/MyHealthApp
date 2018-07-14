import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import HealthRecords from '../components/HealthRecords';
import NewHealthRecord from '../components/NewHealthRecord';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/list' component={HealthRecords}/>
      <Route path='/new' component={NewHealthRecord}/>
    </Switch>
  </main>
);

export default Main;