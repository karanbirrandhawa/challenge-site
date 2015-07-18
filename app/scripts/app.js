
var React = window.React = require('react'),
    mountNode = document.getElementById("app"),
    Router = require('react-router-component'),
    Locations = Router.Locations,
    Location = Router.Location;

// Grab components that need to be used
var Dashboard = require("./locations/dashboard/Dashboard.js")
var Login = require("./locations/login/Login.js")
var Navbar = require("./ui/navbar/Navbar.js")

// Instantiate site
var ChallengeApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  render: function() {
    return (
      <div>
        <Navbar />
        <Locations>
          <Location path="/" handler={Dashboard} />
          <Location path="/login" handler={Login} />
        </Locations>
      </div>
    );
  }
});


React.render(<ChallengeApp />, mountNode);