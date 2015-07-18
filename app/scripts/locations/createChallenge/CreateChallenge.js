var React = window.React = require('react'),
	mui = require('material-ui'),
	Avatar = mui.Avatar,
	Card = mui.Card,
	CardText = mui.CardText,
	CardTitle = mui.CardTitle,
	RadioButton = mui.RadioButton,
	RadioButtonGroup = mui.RadioButtonGroup,
	RaisedButton = mui.RaisedButton,
	TextField = mui.TextField,
	ThemeManager = mui.Styles.ThemeManager();

var CreateChallenge = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	handleSubmit: function() {
		var challengeJson = {};
			title = this.refs.title.getValue(),
			challengeType = this.refs.challengeType.getSelectedValue(),
			description = this.refs.description.getValue(),
			prize = this.refs.prize.getValue();

		// set the values to the json
		challengeJson.title = title;
		challengeJson.description = description;
		challengeJson.challengeType = challengeType;
		challengeJson.prize = prize;

		console.log("challengeJson is", challengeJson);
		// need to send challengeJson to the api
	},
	render: function() {
	    return (
	    	<div>
	    		<Card>
	    			<CardTitle
						title="Create a Challenge"
						subtitle="Fill in this form to create your new challenge" />
						<CardText>
							<div className="form-container">
								<TextField
									floatingLabelText="Title"
									hintText="My challenge name"
									ref="title" />
								<RadioButtonGroup name="challengeType"
									defaultSelected="feature"
									ref="challengeType" >
									<RadioButton
										value="feature"
										label="I want to make a new Feature Challenge"
										style={{marginBottom:16}} />
									<RadioButton
										value="bug"
										label="I want to make a  Bug Challenge"
										style={{marginBottom:16}}/>
								</RadioButtonGroup>
								<TextField
									floatingLabelText="Prize"
									hintText="$20"
									ref="prize" />
								<TextField
									floatingLabelText="Description"
									hintText="Tell me something about this challenge"
									multiLine={true}
									fullWidth={true}
									ref="description" />
								<RaisedButton
									label="Submit"
									secondary={true}
									onClick={this.handleSubmit} />
							</div>
						</CardText>
	    		</Card>
	    	</div>
	    );
	}
});

module.exports = CreateChallenge;