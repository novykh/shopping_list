import React from 'react';

import {Switch, Route} from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import Products from '../products';
import Header from '../header';
import Page404 from '../errorPages/page404';

function App() {
  return (
    <Grid>
      <Route path='/' component={Header} />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route component={Page404}/>
      </Switch>
    </Grid>
  );
}

export default App;
