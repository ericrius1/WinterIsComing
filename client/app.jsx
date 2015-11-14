'use strict';

var React = require('react');

  var Websocket = require('react-websocket');
 
  var GameBoard = React.createClass({
  
    handleData: function(data) {
       // do something with the data 
      console.log("GOT A MESSAGE")
    },
    
    render: function() {
    	return(
          <Websocket url='ws://desolate-bastion-1742.herokuapp.com'
      		// <Websocket url='ws://localhost:5000'
                 onMessage={this.handleData}/>
            )
    }
  });

React.render(<GameBoard/>, document.getElementById('app'));