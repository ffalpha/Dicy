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
  <Grid container sx={{ p: 2, mt: { xs: 0, sm: 2 } }} justifyContent="center">
    <Grid item xs={12} sm={8} md={6} lg={6} >
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks  />
        </Route>
        <Route path="/search/:word">
          <Definition  />
        </Route>
      </Router>
    </Grid>
  </Grid>
</ThemeProvider>
};

export default App;
