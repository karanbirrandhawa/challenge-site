
var React = window.React = require('react');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var ThemeManager = mui.Styles.ThemeManager();
// Instantiate site 
var Login = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	render: function() {
	    return (
	       	<FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="Login with GitHub">	
			</FlatButton>
	    );
	}
});

module.exports = Login;