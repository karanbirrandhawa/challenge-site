var React = window.React = require('react');
var UserDataMixin = require('../../mixins/UserDataMixin.js');
var AppDataMixin = require('../../mixins/AppDataMixin.js');
var MainCard = require('../../ui/mainCard/MainCard.js');
var ListCard = require('../../ui/ListCard');
var mui = require('material-ui');
var CardHeader = mui.CardHeader;
var CardTitle = mui.CardTitle;
var ListItem = mui.ListItem;
var List = mui.List;
var ThemeManager = mui.Styles.ThemeManager();
var Router = require('react-router-component');
var Link = Router.Link;

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
        challenges: [{
          owner: "Anthony",
          title: "this is the first issue",
          prize: "20",
          description: "this is the description",
          id: "95903349"
        }, {
          owner: "Anthony",
          title: "another feature",
          prize: "35",
          description: "this is another description",
          id: "95892857"
        }
        ]
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
  handleClick: function(id) {
    var url = "/challenge?id=" + id;
    // window.history.pushState(null, null, "/login");
    window.open(url);
  },
  render: function() {
    var content="dashboardList";
    var self = this;
    return (

        <div>
          <div className="center-horizontal">
            <h1>My Feed</h1>
          </div>
          <List className={content}>
          {
            this.state.challenges.map(function(result, key) {
              var url = "/challenge?id=" + result.gitIssueID;
              console.log(result);
              return (
                  <ListItem
                    onClick={self.handleClick.bind(self, key)}>
                    <MainCard
                      owner={result.owner}
                      title={result.title}
                      money={result.prize}
                      description={result.description}/>
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