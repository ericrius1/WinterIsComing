'use strict';

var React = require('react');

// tutorial1.js

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
render: function(){
	var commentNodes = this.props.data.users.map(function(user) {
		return (
			<Comment author = {user.username} key = {user.id}></Comment>
		)
	});
	return (
		<div>{commentNodes}</div>
	)
  }
});

var CommentBox = React.createClass({
   loadDataFromServer: function(data) {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
  },
  getInitialState: function() {
  	return {data: {users: []}};
  },
  componentDidMount: function() {
  	this.loadDataFromServer();
  	setInterval(this.loadDataFromServer, 2000);
  },
  render: function() {

    return (
      <div className="commentBox">
        <CommentList data ={this.state.data}/>
      </div>
    );
  }
});

var Comment = React.createClass({
	render: function() {
		return (
			<h2> {this.props.author} </h2>
		);
	}
})

React.render(
  <CommentBox url = "/users" />,
  document.getElementById('app')
);