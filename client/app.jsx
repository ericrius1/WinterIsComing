'use strict';

var React = require('react');

var Websocket = require('react-websocket');
// tutorial1.js

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
render: function(){
	var commentNodes = this.props.data.map(function(comment) {
		console.log("comment" , comment)
		return (
			<Comment author = {comment.author} key = {comment.id}></Comment>
		)
	});
	return (
		<div>{commentNodes}</div>
	)
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <CommentList data = {this.props.data} />
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
  <CommentBox data = {data}/>,
  document.getElementById('app')
);