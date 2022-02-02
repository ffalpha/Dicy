import React from 'react';
import theme from "./theme";
import { ThemeProvider, CssBaseline, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Definition from './components/Definition'


const App = () => {
  return <ThemeProvider theme={theme}> 
  <CssBaseline />
  <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks  />
            </Route>
            <Route path="/search/:word">
              <Definition />
            </Route>
          </Router></ThemeProvider>;
};

export default App;
