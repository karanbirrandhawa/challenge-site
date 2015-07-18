var React = window.React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;
var Card = mui.Card;
var CardTitle = mui.CardTitle;
var FlatButton = mui.FlatButton;
var ThemeManager = mui.Styles.ThemeManager();

// Instantiate site 
var ChallengeDisplay= React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	render: function() {
		var challengeData = {
			challengeTitle: "Challenge Title",
			price: "$" + "10",
			commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. \
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. \
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
		};
		var title = challengeData.challengeTitle + "  " + challengeData.price;
	 	return (
	 	<div>
	 		<Card>
				<CardTitle className="inline" title={title}/>
			</Card>
			<div className ="challengeButton">
				<FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="View all pull requests">	
				</FlatButton>
				<FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="Attempt it!">	
				</FlatButton>
			</div>
			<div className="commentBox">
				<div>Comments:</div>
				<Card>
					<div>{challengeData.commentText}</div>
				</Card>
			</div>
		</div>
	    );
	}
});

module.exports = ChallengeDisplay;