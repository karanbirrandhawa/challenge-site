var React = window.React = require('react'),
	mui = require('material-ui'),
	Avatar = mui.Avatar,
	Card = mui.Card,
	CardText = mui.CardText,
	CardTitle = mui.CardTitle,
	List = mui.List,
	ListItem = mui.ListItem,
	RaisedButton = mui.RaisedButton,
	ThemeManager = mui.Styles.ThemeManager();

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

var ViewAttempt = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
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
	    return (
	    	<div className="main-container">
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
});

module.exports = ViewAttempt;