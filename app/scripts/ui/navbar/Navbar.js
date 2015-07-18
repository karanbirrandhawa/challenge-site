var React = window.React = require('react'),
	mui = require('material-ui'),
	AppBar = mui.AppBar,
	ThemeManager = mui.Styles.ThemeManager();

// Instantiate site
var Navbar = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	render: function() {
		return (
			<AppBar
				title="Title" />
		);
	}
});

module.exports = Navbar;