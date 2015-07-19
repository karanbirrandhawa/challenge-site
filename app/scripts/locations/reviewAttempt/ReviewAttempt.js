var React = window.React = require('react');
var mui = require('material-ui');
var ThemeManager = mui.Styles.ThemeManager();
var Avatar = mui.Avatar;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;
var Card = mui.Card;
var CircularProgress = mui.CircularProgress;
var RaisedButton = mui.RaisedButton;
var List = mui.List;
var	ListItem = mui.ListItem;

// Hardcoded Github Commits
	// when we grab the info by using github, we'll have the commit history somehow
	var attemptJson = {
		githubPullRequestID: "1234567890",
		title: "My Attempt title",
		status: "ongoing",
		githubChallengerName: "Bob B"
	};
	// test github json to use for now. Not sure what types we need yet
	var testCommits = [
		{
			"url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
			"sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e",
			"html_url": "https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e",
			"comments_url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments",
			"commit": {
				"url": "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
				"author": {
					"name": "Monalisa Octocat",
					"email": "support@github.com",
					"date": "2011-04-14T16:00:49Z"
				},
				"committer": {
					"name": "Monalisa Octocat",
					"email": "support@github.com",
					"date": "2011-04-14T16:00:49Z"
				},
				"message": "Fix all the bugs",
				"tree": {
					"url": "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
					"sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
				},
				"comment_count": 0
			},
			"author": {
				"login": "octocat",
				"id": 1,
				"avatar_url": "https://github.com/images/error/octocat_happy.gif",
				"gravatar_id": "",
				"url": "https://api.github.com/users/octocat",
				"html_url": "https://github.com/octocat",
				"followers_url": "https://api.github.com/users/octocat/followers",
				"following_url": "https://api.github.com/users/octocat/following{/other_user}",
				"gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
				"organizations_url": "https://api.github.com/users/octocat/orgs",
				"repos_url": "https://api.github.com/users/octocat/repos",
				"events_url": "https://api.github.com/users/octocat/events{/privacy}",
				"received_events_url": "https://api.github.com/users/octocat/received_events",
				"type": "User",
				"site_admin": false
			},
			"committer": {
				"login": "octocat",
				"id": 1,
				"avatar_url": "https://github.com/images/error/octocat_happy.gif",
				"gravatar_id": "",
				"url": "https://api.github.com/users/octocat",
				"html_url": "https://github.com/octocat",
				"followers_url": "https://api.github.com/users/octocat/followers",
				"following_url": "https://api.github.com/users/octocat/following{/other_user}",
				"gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
				"organizations_url": "https://api.github.com/users/octocat/orgs",
				"repos_url": "https://api.github.com/users/octocat/repos",
				"events_url": "https://api.github.com/users/octocat/events{/privacy}",
				"received_events_url": "https://api.github.com/users/octocat/received_events",
				"type": "User",
				"site_admin": false
			},
			"parents": [
				{
					"url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
					"sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
				}
			]
		},
		{
			"url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
			"sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e",
			"html_url": "https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e",
			"comments_url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments",
			"commit": {
				"url": "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
				"author": {
					"name": "Monalisa Octocat",
					"email": "support@github.com",
					"date": "2011-04-14T16:00:49Z"
				},
				"committer": {
					"name": "Monalisa Octocat",
					"email": "support@github.com",
					"date": "2011-04-14T16:00:49Z"
				},
				"message": "Fix all the bugs",
				"tree": {
					"url": "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
					"sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
				},
				"comment_count": 0
			},
			"author": {
				"login": "octocat",
				"id": 1,
				"avatar_url": "https://github.com/images/error/octocat_happy.gif",
				"gravatar_id": "",
				"url": "https://api.github.com/users/octocat",
				"html_url": "https://github.com/octocat",
				"followers_url": "https://api.github.com/users/octocat/followers",
				"following_url": "https://api.github.com/users/octocat/following{/other_user}",
				"gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
				"organizations_url": "https://api.github.com/users/octocat/orgs",
				"repos_url": "https://api.github.com/users/octocat/repos",
				"events_url": "https://api.github.com/users/octocat/events{/privacy}",
				"received_events_url": "https://api.github.com/users/octocat/received_events",
				"type": "User",
				"site_admin": false
			},
			"committer": {
				"login": "octocat",
				"id": 1,
				"avatar_url": "https://github.com/images/error/octocat_happy.gif",
				"gravatar_id": "",
				"url": "https://api.github.com/users/octocat",
				"html_url": "https://github.com/octocat",
				"followers_url": "https://api.github.com/users/octocat/followers",
				"following_url": "https://api.github.com/users/octocat/following{/other_user}",
				"gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
				"organizations_url": "https://api.github.com/users/octocat/orgs",
				"repos_url": "https://api.github.com/users/octocat/repos",
				"events_url": "https://api.github.com/users/octocat/events{/privacy}",
				"received_events_url": "https://api.github.com/users/octocat/received_events",
				"type": "User",
				"site_admin": false
			},
			"parents": [
				{
					"url": "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
					"sha": "6dcb09b5b57875f334f61aebed695e2e4193db5e"
				}
			]
		}
	];
//----------------------Hard Code Ends ------------------------------------------------------------

var ReviewAttempt = React.createClass({
	getInitialState: function() {
		return {
			btClientToken: null
		}
	},
	componentDidMount: function() {
		this.getBTClientID();
	},
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	getBTClientID: function() {
		// send a request at the beginning to the btClientToken
		var self = this;
		var promise = new Promise(function(resolve, reject) {
			$.ajax({
		    	type: "GET",
		    	url: "api/client_token"
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
				btClientToken: resolvedResponse
			});
			console.log(resolvedResponse);
			console.log("resolved");
		}, function(rejectedResponse) {
			console.log(rejectedResponse);
			console.log("rejected");
		});
	},
	handleClick: function(index) {
		var url = testCommits[index].commit.url;
		if(url) {
			// opens a new tab and sends user to the commit url to view
			var win = window.open(url, '_blank');
  			win.focus();
		}
	},
	handleSubmit: function() {
		// send request to create a pull request with their git user info
		// maybe send them back to some sort of page
	},
	render: function() {
		var self = this;
		var reviewAttemptData = {
			attemptTitle: "Title"
		}

		if(!this.state.btClientToken) {
			return (
				<CircularProgress mode="indeterminate" />
			);
		}
		else {
			return (<div className="main-container">
					<Card>
						<CardTitle title={reviewAttemptData.attemptTitle}/>
					</Card>
  					<RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="Accept">
  					</RaisedButton>
  					<RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true} label="Reject">
  					</RaisedButton>
  					<Card>
	    			<CardTitle
						title="My Attempt"
						subtitle="Review your recent attempt commits here" />
						<CardText>
							<div className="form-container">
								<List className={testCommits}>
									{
										testCommits.map(function(commitObj, index) {
											return <ListItem
												onClick={self.handleClick.bind(this, index)}
												leftAvatar={ <Avatar>A</Avatar>}
												primaryText={commitObj.commit.author.name}
												secondaryText={
													<p>
														{commitObj.commit.message}
													</p>
												}>
											</ListItem>
										})
									}
								</List>
								<RaisedButton
									label="Create Pull Request"
									secondary={true}
									onClick={this.handleSubmit} />
							</div>
						</CardText>
	    			</Card>
				</div>
		);
		}
	}
});

module.exports = ReviewAttempt;