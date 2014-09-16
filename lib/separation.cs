public class LogonController
{
  private readonly ISession _session;

  public LogonController(ISession session)
  {
    if (session == null)
    {
      throw new ArgumentNullException("session");
    }
    _session = session;
  }

  [HttpPost]
  public ActionResult Logon(LogonViewModel model)
  {
    if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
    {
      TempData.Add("error", "Invalid credentials.");
      return View("Logon", model);
    }
    else
    {
      try
      {
        var user = _session.Query<User>().Single(u => u.Email == model.Email);
        var hashedPassword = SHA256Util.Hash(model.Password);
        if (user.HashedPassword == hashedPassword)
        {
          Session["email"] = user.Email;
          Session["user_id"] = user.UserId;
          return RedirectToAction("Welcome", "Home");
        }
        else
        {
          TempData.Add("error", "Invalid credentials.");
          return View("Logon", model);
        }
      }
      catch (InvalidOperationException ex)
      {
        TempData.Add("error", "Invalid credentials.");
        return View("Logon", model);
      }
    }
  }
}

// Sins...
//
// 1.) DRY violations in error handling
// 2.) try/catch for program flow
// 3.) data access in your controller
// 4.) model validation in your controller
// 5.) string hashing in your controller
//
//
// In real life, this controller should...
// 1.) Send the model to a password service.
// 2.) If valid, redirect.
// 3.) If invalid, show the form.
