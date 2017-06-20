using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using TechTest.Interfaces.DatabaseMethods;

namespace TechTest.Hubs {
    [HubName("values")]
    public class ValueHub : Hub {

        private IValueDatabase _valueDatabase;

        public ValueHub(IValueDatabase valueDatabase) {
            _valueDatabase = valueDatabase;
        }

        public List<int> GetTable(int page, int perPage, bool asc) {
            return _valueDatabase.GetValues(page, perPage, asc);
        }

        public void AddValue(int value) {
            _valueDatabase.Add(value);

            Clients.Client(Context.ConnectionId).CallTable();
        }
    }
}