'use strict';

var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    
    //defaultJSON is data is not available
    defaultJSON = {
         title: 'Build a list of issues page',
         author: 'Peter Sun\'s hoes',
         description: 'I want Anthony to build an issues page',
         avatar: 'http://vignette2.wikia.nocookie.net/roblox/images/3/38/Transparent_Troll_Face.png/revision/latest?cb=20120713214853',
         issueLink: 'https://github.com/callemall/material-ui/issues/1202',
         challengeLink: 'https://github.com/callemall/material-ui/issues/1202',
         date: Date(),
         type: 'bug',
    },
    
    //material-ui componenets
    Card = mui.Card,
    CardHeader = mui.CardHeader,
    CardTitle = mui.CardTitle,
    CardActions = mui.CardActions,
    CardText = mui.CardText,
    RaisedButton = mui.RaisedButton;
    
    

var ListCard = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState: function(){
        return {cardJSON: defaultJSON};   
    },
    componentDidMount: function(){
       this.retrieveCardData();
    },
    retrieveCardData: function(){
        var self = this;
        /*var promise = new Promise(function(resolve,reject){
            $.get(this.props.source, function(response){
                if(response && !response.error){
                    resolve(response);
                } else {
                    reject("Error could not retrieve from: "+this.props.source, response);
                }
            }).bind(this);
        });
        promise.then(function(response){
            this.populateData(response.data);
        });*/
        this.populateData(self.state.cardJSON);
               
    },
    AcceptChallenge: function(){
        console.log('This fucker accepted the challenge.');
    },
    
    populateData: function(resData){
        this.setState({ cardJSON:resData});
    },
    render: function(){
        var self = this;
        var data = self.state.cardJSON;
        var row = "row";
        var contentLeft = "content-left";
        var contentRight = "content-right";
        var buttonWrap = "wrap-button";
        return(
            <Card>
               <CardHeader
                    title = {data.title}
                    subtitle = {data.author}
                    avatar={data.avatar}/>
                <CardText>{data.description}</CardText>
                <div className={row}>
                    <div className={contentRight}>
                        <div className={buttonWrap}>
                            <RaisedButton linkButton={true} href={data.challengeLink} label="View The Challenge!"/>
                        </div>
                        <div className={buttonWrap}>
                            <RaisedButton onClick={this.AcceptChallenge()} label="Accept The Challenge!"/>
                        </div>
                        <div className={buttonWrap}>
                            <RaisedButton linkButton={true} href={data.issueLink} secondary={true} label="View on Github" />
                        </div>
                           
                    </div>

                </div>
            </Card>
        );
    },
 
});

module.exports = ListCard; 

