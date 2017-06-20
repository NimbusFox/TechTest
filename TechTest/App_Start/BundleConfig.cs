using System.Web;
using System.Web.Optimization;

namespace TechTest {
    public class BundleConfig {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(new ScriptBundle("~/Content/corejs").IncludeDirectory("~/Scripts", "*.js"));

            bundles.Add(new StyleBundle("~/Content/css").IncludeDirectory("~/Content", "*.css"));
        }
    }
}
