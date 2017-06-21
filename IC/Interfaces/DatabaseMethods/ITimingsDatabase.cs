using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTest.Classes;

namespace TechTest.Interfaces.DatabaseMethods {
    public interface ITimingsDatabase {
        void Add(int valueCount, long timeTaken, bool asc);
        List<SortTiming> GetValues(bool asc);
    }
}
