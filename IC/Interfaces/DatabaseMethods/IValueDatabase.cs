﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TechTest.Interfaces.DatabaseMethods {
    public interface IValueDatabase {
        int GetTotalCount();
        List<int> GetValues(bool asc);
        void Add(int value);
    }
}
