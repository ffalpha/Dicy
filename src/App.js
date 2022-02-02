import React from 'react';
import theme from "./theme";
import { ThemeProvider, CssBaseline, Grid } from '@material-ui/core'
const App = () => {
  return <ThemeProvider theme={theme}> 
  <CssBaseline />
  
  <div></div></ThemeProvider>;
};

export default App;
