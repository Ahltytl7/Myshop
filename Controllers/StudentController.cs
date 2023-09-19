using Microsoft.AspNetCore.Mvc;

namespace Myshop.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
