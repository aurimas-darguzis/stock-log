import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Routes from './Routes';
// import { Chart } from 'react-chartjs-2';
// import validate from 'validate.js';

// import { chartjs } from './helpers';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import './assets/scss/index.scss';
// import validators from './common/validators';

const browserHistory = createHashHistory();

// Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
//   draw: chartjs.draw,
// });

// validate.validators = {
//   ...validate.validators,
//   ...validators,
// };

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
