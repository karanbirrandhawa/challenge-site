var React = window.React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;
var Card = mui.Card;
var CardTitle = mui.CardTitle;
var FlatButton = mui.FlatButton;
var Dialog = mui.Dialog;
var ThemeManager = mui.Styles.ThemeManager();
var UserDataMixin = require('../../mixins/UserDataMixin.js');

// Instantiate site 
var ViewChallenge = React.createClass({
	getInitialState: function() {
		return {
			// TODO: add challenge to these pending user id
			challengedAttempted: false,
			isMyChallenge: false,
			myAttemptInfo: {
				forkUrl: ""
			}
		}
	},
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	attemptChallenge: function(owner, repo) {
		this.state.challengeAttempted = true;
		/**
		var forkedUrl = "https://api.github.com/repos/" + owner + "/" + repo + "/forks"
		var tokenStr = "token " + UserDataMixin.getAccessToken();
		var promise = new Promise(function(resolve, reject) {
			$.ajax({
				type: "POST",
        		url: "https://api.github.com/user",
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
			this.state.challengeAttempted = true;
			this.state.myAttemptInfo.forkUrl = resolvedResponse.html_url;
		},
		function(rejectedResponse) {
			console.log(rejectedResponse);
		});
		**/
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
		var standardActions = [
		  { text: 'Cancel' },
		  { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
		];

		var loc = window.location.href;
    	var items = loc.split("?id=");

    	if (items.length > 1) {
    		$.get("api/challenge/" + items[1], function(data) {
    			this.state.myAttemptInfo.title = data.title;
    			this.state.myAttemptInfo.gitIssueURL = data.gitIssueURL;
    			this.state.myAttemptInfo.gitIssueID = data.gitIssueID;
    		});
    	}

	 	return (
	 	<div>
	 		<Card>
				<CardTitle className="inline" title={title}/>
			</Card>
			<div className ="challengeButton">
				<FlatButton linkButton={true} href="/viewAllAttempts" secondary={true} label="View all pull requests">	
				</FlatButton>
				<FlatButton onClick={this.attemptChallenge} secondary={true} label="Attempt it!">	
				</FlatButton>
			</div>
			<div className="commentBox">
				<div>Comments:</div>
				<Card>
					<div>{challengeData.commentText}</div>
				</Card>
			</div>

			<Dialog
			  title="Dialog With Standard Actions"
			  actions={standardActions}
			  actionFocus="submit"
			  modal={this.state.modal}>
			  The actions in this window are created from the json thats passed in.
			</Dialog>

		</div>
	    );
	}
});

module.exports = ViewChallenge;