var App = (function() {

  function App() {
    this.ajaxUtil = new app.AjaxUtil();
    this.dateUtil = new app.DateUtil();
  }

  return App;

}).call(this);

window.app = new App();