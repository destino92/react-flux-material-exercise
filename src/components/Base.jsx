var React = require('react');

var Base = React.createClass({
    render: function(){
        var BaseStyle = {
              top: {
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  background: '#3f51b5',
                  backgroundSize: 'cover',
                  color: '#fff'
            }
        };
        return (
            <div style={BaseStyle.top}>iihoihio</div>
        );
    }
});

module.exports = Base;
