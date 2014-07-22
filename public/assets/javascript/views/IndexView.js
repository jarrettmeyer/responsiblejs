if (!window.app) {
  window.app = {};
}

window.app.IndexView = (function () {

  function IndexView(options) {
    this.settings = $.extend(defaults, options);
    this.initialize();
  }

  IndexView.prototype.doubleIt = function(callback) {
    var value = $("#value").val();
    this.ajaxUtil.postDouble(value, function (result) {
      this.setValue(result.value, callback);
    }.bind(this));
  };

  IndexView.prototype.getTime = function () {
    this.ajaxUtil.getTime(function (result) {
      this.times.push(result);
      var date = this.dateUtil.fromEpoch(result.timestamp);
      $("#time-results").append("<li>" + date + "</li>");
      this.events.raise("getTime-completed", { timestamp: result.timestamp });
    }.bind(this));
  };

  IndexView.prototype.initialize = function () {
    this.setupPageBindings();   
    this.times = [];
    this.value = null;
    this.ajaxUtil = new app.AjaxUtil();
    this.dateUtil = new app.DateUtil();
    this.events = new app.EventUtil(this);
  };

  IndexView.prototype.setupPageBindings = function() {
    $("#get-time").on("click", function () {
      this.events.raise("getTime-begin", {});
      this.getTime();
    }.bind(this));
    $("#double-it").on("click", function () {
      this.events.raise("doubleIt-begin", {});
      this.doubleIt();
    }.bind(this));
  };

  IndexView.prototype.setValue = function (value) {
    this.value = value;
    $("#double-it-result").html("Value = " + value);
    this.events.raise("setValue-completed", { value: value });
  };

  var defaults = {
  };

  return IndexView;

}).call(this);