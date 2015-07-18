var React = window.React = require('react'),
    mountNode = document.getElementById("app"),
    Router = require('react-router-component'),
    Locations = Router.Locations,
    Location = Router.Location;

// Grab components that need to be used
var Dashboard = require("./locations/dashboard/Dashboard.js")
var Login = require("./locations/login/Login.js")

// Instantiate site 
var ChallengeApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  render: function() {
    return (
      <Locations>
        <Location path="/" handler={Dashboard} />
        <Location path="/login" handler={Login} />
      </Locations>
    );
  }
});


React.render(<ChallengeApp />, mountNode);