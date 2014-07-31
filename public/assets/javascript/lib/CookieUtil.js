if (!window.app) {
  window.app = {};
}

window.app.CookieUtil = (function () {

  var DEFAULT_EXPIRATION_DAYS = 14;
  var expirationDays = DEFAULT_EXPIRATION_DAYS;

  function deleteCookie(key) {
    var expiration = new Date(0).toGMTString();
    document.cookie = key + "=;expires=" + expiration;
  }

  function getCookie(key) {
    var fullKey = key + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0, len = cookies.length; i < len; i += 1) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(fullKey) === 0) {
        return cookie.substring(fullKey.length, cookie.length);
      }
    }
    return null;
  }

  function getExpiration() {
    var expirationDuration = expirationDays * 24 * 60 * 60 * 1000;
    var now = Date.now();
    return new Date(now + expirationDuration).toGMTString();
  }

  function init(options) {
    expirationDays = (options && options.expirationDays) || DEFAULT_EXPIRATION_DAYS;
  }

  function setCookie(key, value) {
    var setValue = value;
    if (typeof(value) === "object") {
      setValue = JSON.stringify(value);
    }
    document.cookie = key + "=" + setValue + ";expires=" + getExpiration();
    return setValue;
  }

  return {
    deleteCookie: deleteCookie,
    getCookie: getCookie,
    init: init,
    setCookie: setCookie
  };

}).call(this);