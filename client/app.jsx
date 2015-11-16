'use strict';

var React = require('react');

var UserList = React.createClass({
render: function(){
	var users = this.props.data.users.map(function(user) {

		console.log('user', user)
		return (
			<User username = {user.username} score = {user.score} key = {user.id}></User>
		)
	});
	return (
		<div>{users}</div>
	)
  }
});

var GameBoard = React.createClass({
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
        <UserList data ={this.state.data}/>
      </div>
    );
  }
});

var User = React.createClass({
	render: function() {
		return (
		<div className = "entry">
			<div className="username"> {this.props.username} </div>
			<div className="score" > {this.props.score} </div>
		</div>
		);
	}
})

React.render(
  <GameBoard url = "/users" />,
  document.getElementById('app')
);