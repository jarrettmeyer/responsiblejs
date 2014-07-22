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
    this.ajax.postDouble(value, function (result) {
      this.setValue(result.value, callback);
    }.bind(this));
  };

  IndexView.prototype.getTime = function () {
    this.ajax.getTime(function (result) {
      this.times.push(result);
      var date = this.date.fromEpoch(result.timestamp);
      $("#time-results").append("<li>" + date + "</li>");
      this.events.raise("getTime-completed", { timestamp: result.timestamp });
    }.bind(this));
  };

  IndexView.prototype.initialize = function () {
    this.setupPageBindings();
    $("#value").val(1);
    this.times = [];
    this.value = null;
    this.ajax = app.AjaxUtil;
    this.date = app.DateUtil;
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
    $("#value").val(value);
    this.events.raise("setValue-completed", { value: value });
  };

  var defaults = {
  };

  return IndexView;

}).call(this);