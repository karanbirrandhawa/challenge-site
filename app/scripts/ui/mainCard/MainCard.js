var React = window.React = require('react'),
	mui = require('material-ui'),
	Card = mui.Card,
	CardTitle = mui.CardTitle,
	MenuItem = mui.MenuItem,
	ThemeManager = mui.Styles.ThemeManager();

// Instantiate site
var MainCard = React.createClass({

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
     			text: 'Create Challenges'
     		}
		];

		//Toggle the LeftNav
		return (
			<div class="main-card">
				<Card>
					<CardTitle title={this.props.title} subtitle={this.props.description}/>
					<div className="main-card-money pull-right">{this.props.money}</div>
				</Card>
			</div>
		);
	}
});

module.exports = MainCard;