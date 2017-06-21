using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mime;
using System.Runtime.Serialization.Formatters.Binary;
using System.Web;
using System.Web.Mvc;
using System.Xml.Serialization;
using Newtonsoft.Json;
using TechTest.Classes;
using TechTest.Interfaces.DatabaseMethods;

namespace TechTest.Controllers {
    public class ExportController : Controller {

        private ITimingsDatabase _timingsDatabase;

        public ExportController(ITimingsDatabase timingsDatabase) {
            _timingsDatabase = timingsDatabase;
        }

        public ActionResult Index() {
            var cd = new ContentDisposition();

            cd.FileName = "export.xml";

            cd.Inline = false;

            Response.AppendHeader("Content-Disposition", cd.ToString());

            var values = _timingsDatabase.GetValues(true);

            var serilizer = new XmlSerializer(values.GetType());

            var stream = new MemoryStream();

            serilizer.Serialize(stream, values);

            return File(stream.ToArray(), "text/xml");
        }
    }
}