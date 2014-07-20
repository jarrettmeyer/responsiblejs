if (!window.app) {
  window.app = {};
}

window.app.AjaxUtil = (function () {

  function AjaxUtil() {
    if (!$) {
      throw Error("jQuery has not been defined.");
    }
  }

  AjaxUtil.prototype.getTime = function(callback) {
    this.send("get", "/time", {}, callback);
  };

  AjaxUtil.prototype.postDouble = function(value, callback) {
    var data = { x: value };
    this.send("post", "/double", data, callback);
  };

  AjaxUtil.prototype.send = function(type, url, data, callback) {
    if (data) {
      console.log("sending ", data, " to ", url);
    }
    $[type](url, data, function (result) {
      console.log(url, " returned with ", result);
      if (callback) { 
        callback(result); 
      } else {
        console.log("No callback to fire.");
      }      
    });
  };

  return AjaxUtil;

}).call(this);
