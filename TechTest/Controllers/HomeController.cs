using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TechTest.Interfaces.DatabaseMethods;

namespace TechTest.Controllers {
    public class HomeController : Controller {

        private IValueDatabase _valueDatabase;

        public HomeController(IValueDatabase valueDatabase) {
            _valueDatabase = valueDatabase;
        }

        public ActionResult Index(string id = "Values") {
            return View(model: id);
        }
    }
}