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
		var finalObj = {};
		var loc = window.location.href;
    	var items = loc.split("?id=");
    	var url = "api/challenge/" + items[1];

    	var d;

    	if (items.length > 1) {
    		$.ajax({
	          type: "GET",
	          url: url,
	          async: false
	        }).done(function(data) {
	            d = data;
	        });
    	}

    	console.log(d);
    	if (d) {
    		return {
				// TODO: add challenge to these pending user id
				challengeTitle: d.title,
				challengeTitleDescription: d.description,
				challengeGitIssueID: d.gitIssueID,
				challengeGitIssueURL: d.gitIssueURL
			}
    	} else {
    		return {
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

	 	return (
	 	<div>
	 		<Card>
				<CardTitle className="inline" title={this.state.challengeTitle} />
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
					<div>{this.state.challengeTitleDescription}</div>
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