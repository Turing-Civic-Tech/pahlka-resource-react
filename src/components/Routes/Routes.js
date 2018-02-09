import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../components/Login/Login';
import CardContainer from '../CardContainer/CardContainer.js';

// import Header from '../../components/Header/Header';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          path='/login' component={Login} 
        />
        <Route exact path='/' component={CardContainer} />
      </Switch>
    </div>
  )
}

export default Routes;