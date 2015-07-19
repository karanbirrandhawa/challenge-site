var React = window.React = require('react'),
	$ = require('jquery'),
	mui = require('material-ui'),
	Avatar = mui.Avatar,
	Card = mui.Card,
	CardText = mui.CardText,
	CardTitle = mui.CardTitle,
	CircularProgress = mui.CircularProgress,
	DropDownMenu = mui.DropDownMenu,
	RadioButton = mui.RadioButton,
	RadioButtonGroup = mui.RadioButtonGroup,
	RaisedButton = mui.RaisedButton,
	TextField = mui.TextField,
	ThemeManager = mui.Styles.ThemeManager()
	UserDataMixin = require('../../mixins/UserDataMixin.js');

var serialize = require('form-serialize');

var DropIn = require("braintree-react").DropIn;
var braintree = require("braintree-web");

var CreateChallenge = React.createClass({
	getInitialState: function() {
		return {
			repoList: null,
			selected: null,
			btClientToken: null
		};
	},
	componentDidMount: function() {
		this.getRepoList();
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
	handleSelected: function(e, selectedIndex, menuItem) {
		this.state.selected = selectedIndex;
		console.log(this.state.selected);
	},
	handleSubmit: function() {
		var challengeJson = {};
			title = this.refs.title.getValue(),
			challengeType = this.refs.challengeType.getSelectedValue(),
			description = this.refs.description.getValue(),
			prize = this.refs.prize.getValue(),
			repo = this.state.repoList[this.state.selected - 1];
			// subtract 1 because the first index is the default one

		// set the values to the json
		challengeJson.title = title;
		challengeJson.description = description;
		challengeJson.challengeType = challengeType;
		challengeJson.prize = prize;
		challengeJson.user = repo.owner.login;
		challengeJson.repo = repo;

		console.log("challengeJson is", challengeJson);

		var tokenStr = "token " + UserDataMixin.getAccessToken();
		console.log(tokenStr);
		// here, we create a github issue
		var ownerName = repo.owner.login;
		var repoName = repo.name;
		var url = "https://api.github.com/repos/" + ownerName + "/" + repoName + "/issues";
		var promise = new Promise(function(resolve, reject) {
			$.ajax({
		    	type: "POST",
		    	url: url,
		    	data: JSON.stringify({
		    		title: title,
		    		body: description
		    	}),
		    	beforeSend: function (request)
	            {
					request.setRequestHeader("Authorization", tokenStr);
					request.setRequestHeader("Content-Type", "application/json");
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
			console.log(resolvedResponse);
			console.log("resolved");
			// need to send challengeJson to the api
			challengeJson.gitID = resolvedResponse.id;
			challengeJson.gitURL = resolvedResponse.html_url;
			$.ajax({
		    	type: "POST",
		    	url: "api/challenge/create",
		    	data: JSON.stringify(challengeJson),
		    	beforeSend: function (request)
	            {
					request.setRequestHeader("Content-Type", "application/json");
	            }
			}).done(function(data) {
				console.log(data);
				var form = document.querySelector('#example-form');
				var str = serialize(form);

				$.ajax({
			    	type: "POST",
			    	url: "api/purchases",
			    	data: str,
			    	beforeSend: function (request)
		            {
						request.setRequestHeader("Content-Type", "application/json");
		            }
				}).done(function(data) {
					console.log("Response for form");
					console.log(data);
					var form = document.querySelector('.braintree-paypal-form');
					var str = serialize(form);
					
					window.history.pushState(null, null, "/");
				});
			});
		}, function(rejectedResponse) {
			console.log(rejectedResponse);
		});
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
	getRepoList: function() {
		var userData = UserDataMixin.login();
		var userName = userData.userName;
		var url = "https://api.github.com/user/repos";
		var tokenStr = "token " + UserDataMixin.getAccessToken();
		var self = this;
		var promise = new Promise(function(resolve, reject) {
			$.ajax({
		    	type: "GET",
		    	url: url,
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
			console.log(resolvedResponse);

			self.setState({
				repoList: resolvedResponse
			});
		}, function(rejectedResponse) {
			console.log("There was an error in the github call. The error is ", rejectedResponse);
		});
	},
	render: function() {
		if (!this.state.repoList || !this.state.btClientToken) {
			return (
				<CircularProgress mode="indeterminate" />
				);
		} else {
			var menuItems = [{
				payload: 1,
				text: "Select a repository"
			}];

			this.state.repoList.forEach(function(element, index, array) {
				menuItems.push({
					payload: element.url,
					text: element.name
				})
			});

			return (
		    	<div className="main-container">
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
									<div className="shift-left">
										<DropDownMenu menuItems={menuItems}
											onChange={this.handleSelected} />
									</div>
									<TextField
										floatingLabelText="Description"
										hintText="Tell me something about this challenge"
										multiLine={true}
										fullWidth={true}
										ref="description" />
									<form className={"braintree-paypal-form"}>
										<DropIn braintree={braintree} />
										<RaisedButton
											label="Submit"
											secondary={true}
											onClick={this.handleSubmit} />
									</form>
								</div>
							</CardText>
		    		</Card>
		    	</div>
		    );
		}
	}
});

module.exports = CreateChallenge;