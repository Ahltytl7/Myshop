using Microsoft.AspNetCore.Mvc;
using Myshop.Models;

namespace Myshop.Controllers
{
    public class ProductController : Controller
    {
       
        public IActionResult Index()

        {
            List<Product> products = new List<Product>();
            for (int i = 0; i < 10; i++)
            {
                Product product = new Product();
                product.Id = i + 1;
                product.Name = "Hàng hoá " + (i + 1);
                product.Price = i*0.5;
                products.Add(product);
            }
            return View(products);
        }
        public IActionResult Add()
        {
            return View();
        }
    }
}
