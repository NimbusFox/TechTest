using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TechTest.Interfaces.DatabaseMethods {
    public interface ITimingsDatabase {
        void Add(int valueCount, long timeTaken, bool asc);
        int GetTotalCount();
        int GetPageCount(int perPage);
        List<int> GetValues(int page, int perPage, bool asc);
    }
}
