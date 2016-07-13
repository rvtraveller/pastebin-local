var LoginForm = React.createClass({
  getInitialState: function() {
    return {username: '', password: ''};
  },
  handleUsernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmission: function(e) {
    e.preventDefault();
    console.log(authenticateUser(this.state.username, this.state.password));
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmission}>
        <fieldset className="form-group">
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} className="form-control" required="required" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="password" onChange={this.handlePasswordChange} className="form-control" required="required" />
        </fieldset>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    );
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <LoginForm />
      </div>  
    );
  }
});

ReactDOM.render(
  <Login />,
  document.getElementById('main')
);  

const WaterWheel = require('waterwheel')
var waterwheel = new WaterWheel('http://dev-webservices-demo.pantheonsite.io', {username: 'bad', 'password': 'bad'})
// We can populate resources even with bad credentials
waterwheel.populateResources()

function authenticateUser(username, password) {
  waterwheel = new WaterWheel('http://dev-webservices-demo.pantheonsite.io', {username: username, 'password': password})
  waterwheel.populateResources().then(() => {
    waterwheel.api.node.article.get(1).then(() => {
      alert("Success")
    }).catch(err => {
      console.log(err)
      alert("FAIL")
    });  
  }).catch(err => {
    alert("FAIL 2")
  })
  
}