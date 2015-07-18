
var React = window.React = require('react');
var UserDataMixin = require('../../mixins/UserDataMixin.js');

// Instantiate site 
var Dashboard = React.createClass({
  render: function() {
  	console.log(UserDataMixin);
  	var userData = UserDataMixin.login();
  	if (!userData) {
  		window.history.pushState(null, null, "/login");
  	}

    return (
      <div></div>
    );
  }
});

module.exports = Dashboard;