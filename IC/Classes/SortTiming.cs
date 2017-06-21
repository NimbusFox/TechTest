using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TechTest.Classes {
    [Serializable]
    public class SortTiming {
        public int ValueCount { get; set; }
        public double Time { get; set; }
        public string Order { get; set; }
    }
}
