using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TechTest.Interfaces.DatabaseMethods {
    public interface IValueDatabase {
        int GetTotalCount();
        int GetPageCount(int perPage);
        List<int> GetValues(int page, int perPage, bool asc);
        void Add(int value);
    }
}
