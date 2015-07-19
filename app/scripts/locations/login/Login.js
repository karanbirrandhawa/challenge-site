
var React = window.React = require('react');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var ThemeManager = mui.Styles.ThemeManager();
var UserDataMixin = require('../../mixins/UserDataMixin.js');
var AppDataMixin = require('../../mixins/AppDataMixin.js');

// Instantiate site 
var Login = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	render: function() {
		var userData = UserDataMixin.login();

		var client_id = AppDataMixin.getClientId();
		var url = "https://github.com/login/oauth/authorize?client_id=" + client_id 
					+ "&scope=public_repo";

	    return (
	    	<div className={"frontPage"}>
	    			<h1 style={{ paddingTop: "150px", color: "White", marginTop: "0", textAlign: "center",  fontSize: "67.5px"}}>ChallengeHub</h1>
	    			<h2 style={{color:"White", textAlign: "center", fontSize: "30px"}}>Pushing Devs to the New Limits </h2>
	    			<h3 style={{color:"White", textAlign: "center", fontSize: "20px"}}>Want a Challenge? Login In Here: </h3>
	    	    	<div style={{marginLeft:'40%'}}>
	    	    		<FlatButton style={{textAlign:"center"}} linkButton={true} href={url} secondary={true} label="Login with GitHub"></FlatButton>
					</div>
			</div>
	    );
	}  
});

module.exports = Login;
