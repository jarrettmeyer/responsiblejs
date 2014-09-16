var $ = require('jquery');

var func = (function () {
  $("#logon").on("click", function () {
    var postData = {
      email: $("#email").val(),
      password: $("#password").val()
    };
    $.post("/logon", postData, function (result) {
      if (result.userId) {
        var cookieData = {
          displayName: result.displayName,
          email: result.email,
          userId: result.userId
        };
        var expiration = new Date(Date.now() + 7 * 24 * 24 * 60 * 1000);
        document.cookie = "user=" + JSON.stringify(cookieData) + ";expiration=" + expiration;
      } else {
        $("#error-box").html("Invalid credentials!").show();
      }
    });
  });
});





describe("separation of concerns", function () {

  it("is a good idea", function () {
    expect(true).toBeTruthy();
  });

});

/* Better solution...
 *
 * 1.) Create a view object.
 * 2.) Call a service object.
 * 3.) Handle the result from the service with the view object.
 */
