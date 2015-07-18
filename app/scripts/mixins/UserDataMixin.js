var UserDataMixin = {
  login: function() {
  	var token = window.localStorage.getItem("token");
  	var tokenExpiration = window.localStorage.getItem("tokenExpiration");

  	if (!token) {
  		console.log("No token..");
  		return false;
  	} else {
  		if (!tokenExpiration) {
  			console.log("Token has expired..");
  			return false;
  		} else {
  			// Store user data info now based on request to github
  			this.userData = {

  			}
  		}
  	}
  }
}

module.exports = UserDataMixin;