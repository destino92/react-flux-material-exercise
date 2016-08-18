var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin/src/injectTapEventPlugin');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Router = require('./Routes.jsx');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var App = React.createClass({
    render: function(){
        return(
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
