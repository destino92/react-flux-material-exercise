var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin/src/injectTapEventPlugin.js');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var Router = require('./Routes.jsx');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
