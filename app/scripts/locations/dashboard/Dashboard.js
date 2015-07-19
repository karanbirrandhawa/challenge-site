var React = window.React = require('react');
var UserDataMixin = require('../../mixins/UserDataMixin.js');
var AppDataMixin = require('../../mixins/AppDataMixin.js');
    ListCard = require('../../ui/ListCard');

// Instantiate site 
var Dashboard = React.createClass({
  render: function() {
  	var userData = UserDataMixin.login();
  	if (!userData) {
  		window.history.pushState(null, null, "/login");
  	}
  	var content="dashboardList";
    return (
        <div className={content}>
            <ListCard>Test</ListCard>
        </div>
    );
  }
});

module.exports = Dashboard;
