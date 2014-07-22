if (!window.app) {
  window.app = {};
}

window.app.AjaxUtil = (function () {

  var getTime = function (callback) {
    send("get", "/time", {}, callback);
  }

  var postDouble = function (value, callback) {
    var data = { x: value };
    send("post", "/double", data, callback);
  }

  var send = function(type, url, data, callback) {
    console.log("Sending to ", type, url, " Data: ", data);
    $[type](url, data, function(result) {
      console.log(url, " returned with ", result);
      if (callback) {
        callback(result);
      }
    }); 
  }

  return {
    getTime: getTime,
    postDouble: postDouble
  };

}).call(this);
