var React = window.React = require('react'),
    mountNode = document.getElementById("app"),
    Router = require('react-router-component'),
    Locations = Router.Locations,
    Location = Router.Location;

var $ = require('jquery');
var UserDataMixin = require('./mixins/UserDataMixin.js')

// Grab components that need to be used
var Dashboard = require("./locations/dashboard/Dashboard.js")
var Login = require("./locations/login/Login.js")

// Instantiate site 
var ChallengeApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  render: function() {
    // Should replace with regex. This is damn flimsy
    var loc = window.location.href;
    var items = loc.split("?code=");

    if (items.length > 1) {
      var code = items[1];
      $.ajax({
          type: "GET",
          url: "api/github/authorize",
          data: {
            singleUseCode: code
          },
          async: false
      }).done(function(data) {
        if (data.error) {
          console.log(data);
        } else {
          console.log(data);
          window.localStorage.setItem('token', data.access_token);
          UserDataMixin.login(data.access_token);
        }
      });
    }

    return (
      <Locations>
        <Location path="/" handler={Dashboard} />
        <Location path="/login" handler={Login} />
      </Locations>
    );
  }
});


React.render(<ChallengeApp />, mountNode);