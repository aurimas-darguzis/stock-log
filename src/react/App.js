import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Routes from './Routes';
import { channels } from '../shared/constants';
const { ipcRenderer } = window;

const browserHistory = createHashHistory();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    console.log('***: ', ipcRenderer);
    console.log('***: ', channels);
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }
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

// import validate from 'validate.js';
// import { Chart } from 'react-chartjs-2';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import './assets/scss/index.scss';
// import validators from './common/validators';
// import { chartjs } from './helpers';

// Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
//   draw: chartjs.draw,
// });

// validate.validators = {
//   ...validate.validators,
//   ...validators,
// };
