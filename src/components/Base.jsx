var React = require('react');

var Base = React.createClass({
    BaseStyle = {
        top: {
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
            background: '#3f51b5',
            backgroundSize: 'cover',
            color: '#fff'
        }
    }
    render: function(){
        <div style={BaseStyle.top}></div>
    }
});

module.exports = Base;
