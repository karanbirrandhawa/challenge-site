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
        var self = this;/*
        var promise = new Promise(function(resolve,reject){
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
    
    populateData: function(resData){
        this.setState({ cardJSON:resData});
    },
    render: function(){
        var self = this;
        var data = self.state.cardJSON;
        var row = "row";
        var contentLeft = "content-left";
        var contentRight = "content-right";
        return(
            <Card>
                <div className={row}>
                    <div className={contentLeft}>
                        <CardHeader
                            title = {data.title}
                            subtitle = {data.author}
                            avatar={data.avatar}/>
                    </div>
                </div>
                <CardText>{data.description}</CardText>
                <div className={row}>
                    <div className={contentRight}>
                        <RaisedButton label="Accept The Challenge!"/>
                        <RaisedButton label="View on Github" />
                    </div>

                </div>
            </Card>
        );
    },
 
});

module.exports = ListCard; 

