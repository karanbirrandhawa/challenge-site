var React = window.React = require('react'),
	mui = require('material-ui'),
	AppBar = mui.AppBar,
	LeftNav = mui.LeftNav,
	MenuItem = mui.MenuItem,
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
	toggle: function(e) {
		this.refs.leftNav.toggle();
		console.log('asdf');
	},
	render: function() {
		var menuItems = [
			{
				type: MenuItem.Types.LINK,
     			payload: '/create',
     			text: 'Create Challenges'},
			{
				type: MenuItem.Types.LINK,
     			payload: '/challenge/all',
     			text: 'All Challenges'
 			}
		];
		console.log(AppBar);

		//Toggle the LeftNav
		return (
			<div>
				<AppBar
					onLeftIconButtonTouchTap={this.toggle}
					title="Title" />
				<LeftNav docked={false}  ref="leftNav" menuItems={menuItems} />
			</div>
		);
	}
});

module.exports = Navbar;