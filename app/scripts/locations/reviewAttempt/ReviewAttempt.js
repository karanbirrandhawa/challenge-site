var React = window.React = require('react');
var mui = require('material-ui');
var ThemeManager = mui.Styles.ThemeManager();

var ReviewAttempt = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	render: function() {
			return (<div>Prisma Illya</div>)
		}
	});

module.exports = ReviewAttempt;