describe("CookieUtil", function () {

  beforeEach(function () {
    verifyNoCookies();
  });

  afterEach(function () {
    verifyNoCookies();
  });

  it("can delete a cookie", function () {
    app.CookieUtil.setCookie("message", "Hello, World!");
    app.CookieUtil.deleteCookie("message");
    expect(document.cookie.toString()).toEqual("");
  });

  it("can get a cookie", function () {
    app.CookieUtil.setCookie("message", "Hello, World!");
    var value = app.CookieUtil.getCookie("message");
    expect(value).toEqual("Hello, World!");
    deleteCookie("message");
  });

  it("can set a cookie with a string", function () {
    app.CookieUtil.setCookie("message", "Hello, World!");
    expect(document.cookie.toString()).toEqual("message=Hello, World!");
    deleteCookie("message");
  });

  it("can set a cookie with an object", function () {
    app.CookieUtil.setCookie("result", { success: true, message: "It worked!" });
    expect(document.cookie.toString()).toEqual('result={"success":true,"message":"It worked!"}');
    deleteCookie("result");
  });

  function deleteCookie(key) {
    document.cookie = key + "=;expires=" + new Date(0).toGMTString();
  }

  function verifyNoCookies() {
    var cookieString = document.cookie.toString();
    expect(cookieString).toEqual("");
  }

});