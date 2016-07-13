
function login(username, password) {
	console.log(window.WaterWheel);
	  const conn = new window.WaterWheel("https://dev-webservices-demo.pantheonsite.io", {username: username, 'password': password});
	  var outcome = conn.populateResources().then(() => {
	  	return conn.api.node.article.get(1).then(() => {
	  		return true;
	  	})
	  })
	  .catch(err => {
	  	return false;
	  })
	  return outcome;
}