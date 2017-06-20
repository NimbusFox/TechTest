using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTest.Interfaces.DatabaseMethods;

namespace TechTest.DatabaseMethods.MSSql {
    public class TimingsDatabase : ITimingsDatabase {
        public void Add(int valueCount, long timeTaken, bool asc) {
            throw new NotImplementedException();
        }

        public int GetTotalCount() {
            throw new NotImplementedException();
        }

        public int GetPageCount(int perPage) {
            throw new NotImplementedException();
        }

        public List<int> GetValues(int page, int perPage, bool asc) {
            throw new NotImplementedException();
        }
    }
}
