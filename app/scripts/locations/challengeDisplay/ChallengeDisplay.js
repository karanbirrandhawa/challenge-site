var React = window.React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;
var Card = mui.Card;
var CardTitle = mui.CardTitle;
var CircularProgress = mui.CircularProgress;
var ListItem = mui.ListItem;
var List = mui.List;
var RaisedButton = mui.RaisedButton;
var ThemeManager = mui.Styles.ThemeManager();

// Instantiate site
var ChallengeDisplay= React.createClass({
	getInitialState: function() {
		return {
			singleIssueJson: null
		};
	},
	componentDidMount: function() {
		this.getSingleIssue();
	},
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	getSingleIssue: function() {
		var self = this;
		// some backend call to api to get the single challenge object from db
		var challenge = {
			gitIssueURL: "https://api.github.com/repos/anthonyluu/challenge-api/issues/3"
		};
		var userData = UserDataMixin.login();
		var tokenStr = "token " + UserDataMixin.getAccessToken();

		var promise = new Promise(function(resolve, reject) {
			$.ajax({
		    	type: "GET",
		    	url: challenge.gitIssueURL + "/comments",
		    	beforeSend: function (request)
	            {
					request.setRequestHeader("Authorization", tokenStr);
	            }
			}).done(function(data) {
				if (data.error) {
					reject(data);
				} else {
					resolve(data);
				}
			});
		});
		promise.then(function(resolvedResponse) {
			self.setState({
				singleIssueJson: resolvedResponse
			});
			console.log(resolvedResponse);
			console.log("resolved");
		}, function(rejectedResponse) {
			console.log(rejectedResponse);
			console.log("rejected");
		});
	},
	render: function() {
		if(!this.state.singleIssueJson) {
			return (
				<CircularProgress mode="indeterminate" />
			);
		}
		else {
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
		 	<div className="main-container">
		 		<Card>
					<CardTitle className="inline" title={title}/>
					<div>
						<RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="View all pull requests">
						</RaisedButton>
						<RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="Attempt it!">
						</RaisedButton>
					</div>
					<div className="commentBox">
						<div>Comments:</div>
						{
							this.state.singleIssueJson.map(function(result) {
								return (
									<ListItem>
										{result.body}
									</ListItem>
								);
							})
						}
							</div>
						<List>
					</List>
				</Card>
			</div>
		    );
		}
	}
});

module.exports = ChallengeDisplay;