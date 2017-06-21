using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using TechTest.Classes;
using TechTest.Interfaces.DatabaseMethods;

namespace TechTest.Hubs {
    [HubName("timings")]
    public class TimingsHub : Hub {

        private ITimingsDatabase _timingsDatabase;

        public TimingsHub(ITimingsDatabase timingsDatabase) {
            _timingsDatabase = timingsDatabase;
        }

        public List<SortTiming> GetTable(bool asc) {
            return _timingsDatabase.GetValues(asc);
        }
    }
}