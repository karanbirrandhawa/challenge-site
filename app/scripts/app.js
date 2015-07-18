
var React = window.React = require('react'),
    mountNode = document.getElementById("app"),
    Router = require('react-router-component'),
    Locations = Router.Locations,
    Location = Router.Location;

// Grab components that need to be used
var Dashboard = require("./locations/dashboard/Dashboard.js")
var Login = require("./locations/login/Login.js")
var CreateChallenge = require("./locations/createChallenge/CreateChallenge.js")

// Instantiate site 
var Navbar = require("./ui/navbar/Navbar.js")
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

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
          <Location path="/create" handler={CreateChallenge} />
        </Locations>
      </div>
    );
  }
});

React.render(<ChallengeApp />, mountNode);