import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

var Home = React.createClass({
  render: function() {
    return (<h1>Welcome to the Home Page</h1>);
  }
});
var Users = React.createClass({
  render: function() {
    return (<h1>Welcome to the Users Page</h1>);
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={Home} />
    <Route path="/" component={Users} />
   
  </Router>
), document.getElementById('app'));