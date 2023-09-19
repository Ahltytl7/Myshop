using Microsoft.AspNetCore.Mvc;

namespace Myshop.Controllers
{
    public class User : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Wedding()
        {
            return View();
        }
        public IActionResult LoginAction(string us, string pwd)
        {
            if("ahltyyn6@gmail.com".Equals(us) && "123".Equals(pwd))
            {
                return RedirectToAction("Wedding");
            }
            else
            {
                return RedirectToAction("Login");
            }
        }
    }
}
