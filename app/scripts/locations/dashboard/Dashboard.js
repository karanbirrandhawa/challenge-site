
var React = window.React = require('react'),
    ListCard = require('../../ui/ListCard');
// Instantiate site 
var Dashboard = React.createClass({
  
  render: function() {
  	var content="dashboardList";
    return (
        <div className={content}>
            <ListCard>Test</ListCard>
        </div>
    );
  }
});

module.exports = Dashboard;
