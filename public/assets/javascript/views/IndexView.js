window.app.IndexView = (function () {

  function IndexView(options) {
    this.settings = $.extend(defaults, options);
    this.ajaxUtil = this.settings.ajaxUtil || new app.AjaxUtil();
    this.dateUtil = this.settings.dateUtil || new app.DateUtil();
    this.initialize();
  }

  IndexView.prototype.doubleIt = function() {
    var value = $("#value").val();
    app.ajaxUtil.postDouble(value, function (result) {
      this.value = result.value;
      $("#double-it-result").html("Value = " + this.value);
    });
  };

  IndexView.prototype.getTime = function () {
    app.ajaxUtil.getTime(function (result) {
      this.times.push(result);
      var date = app.dateUtil.fromEpoch(result.timestamp);
      $("#time-results").append("<li>" + date + "</li>");
    }.bind(this));
  };

  IndexView.prototype.initialize = function () {
    this.setupPageBindings();   
    this.times = [];
    this.value = null;
  };

  IndexView.prototype.setupPageBindings = function() {
    $("#get-time").on("click", function () {
      this.getTime();
    }.bind(this));
    $("#double-it").on("click", function () {
      this.doubleIt();
    }.bind(this));
  };

  var defaults = {
  };

  return IndexView;

}).call(this);