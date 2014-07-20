window.app.IndexView = (function () {

  function IndexView(options) {
    if (!app.ajaxUtil) {
      throw Error("app.ajaxUtil has not been defined.");
    }
    this.settings = $.extend(defaults, options);
    this.times = [];
    this.value = null;
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