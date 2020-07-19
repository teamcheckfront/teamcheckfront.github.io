var SessionInfo = (function() {
  // session info starts as false
  var loggedIn = false;

  // getter function
  var getLoggedIn = function() {
    return loggedIn;
  };

  // setter function
  var setLoggedIn = function(isLoggedIn) {
    loggedIn = isLoggedIn;
  }

  // return the setter and getter methods
  return {
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn
  };

})();

export default SessionInfo;