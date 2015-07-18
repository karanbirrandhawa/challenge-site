'use strict';

var React = require('react');
    mui = require('material-ui');
    
    //defaultJSON is data is not available
    defaultJSON = {
         title: 'New Card',
         author: 'No Company Listed',
         description: 'No Description',
         avatar: '/assets/images/blankAvatar.png',
         date: Date(),
         type: 'bug',
    };
    
    //material-ui componenets
    Card = mui.Card;
    CardHeader = mui.CardHeader;
    CardTitle = mui.CardTitle;
    CardActions = mui.CardActions;
    CardText = mui.CardText;
    FlatButton = mui.FlatButton;
    
    

var listCard = React.createClass({

    getInitialState: function(){
        return {cardJSON: defaultJSON}     
    },
    /*componentDidMount: function(){
        //this.retrieveCardData()
    },
    retrieveCardData: function(){
        var self = this;
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
        });
               
    },*/
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },/*
    populateData: function(resData){
        this.setState({ cardJSON:resData});
    }, */
    render: function(){
        var self = this;
        var data = self.state.cardJSON;
        var row = "row";
        var contentLeft = "left";
        return(
            <Card>
                <CardHeader>
                    title = {data.title}
                    subtitle = {data.author}
                    avatar={data.avatar}
                </CardHeader>
                <CardText>{data.description}</CardText>
                <div className={row}>
                    <div className={contentLeft}>
                        <FlatButton label="Accept"/>
                    </div>
                </div>
            </Card>
        );
    },
 
});

module.exports = listCard; 

