'use strict';

var React = require('react');

  var Websocket = require('react-websocket');
 
  var GameBoard = React.createClass({
  
    handleData: function(data) {
       // do something with the data 
       this.setState({
          foo: bar
       });
    },
    
    render: function() {
    	return(
      		<Websocket url='ws://localhost:3000/'
                 onMessage={this.handleData}/>
            )
    }
  });

React.render(<GameBoard/>, document.getElementById('app'));