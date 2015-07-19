var React = window.React = require('react');
var UserDataMixin = require('../../mixins/UserDataMixin.js');
var AppDataMixin = require('../../mixins/AppDataMixin.js');
var ListCard = require('../../ui/ListCard');
var mui = require('material-ui');
var ListItem = mui.ListItem;
var List = mui.List;
var ThemeManager = mui.Styles.ThemeManager();

// Instantiate site 
var Dashboard = React.createClass({
  getInitialState: function() {
    var d;
    var url = "api/challenge/all";

    $.ajax({
      type: "GET",
      url: url,
      async: false
    }).done(function(data) {
        d = data;
    });

    if (d) {
      return {
        challenges: d
      }
    } else {
      return {
        challenges: []
      }
    }
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function() {

    var userData = UserDataMixin.login();
    if (!userData) {
      window.history.pushState(null, null, "/login");
    }
    var content="dashboardList";
    var self = this;
    return (

        <div>
          <List className={content}>
          { 
            this.state.challenges.map(function(result) {
              return (
                  <ListItem>
                    {result.title}
                  </ListItem>
                )
            })
          }
          </List>
        </div>
    );
  }
});

module.exports = Dashboard;