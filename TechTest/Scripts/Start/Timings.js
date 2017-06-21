/// <reference path="../../../IC/Classes/SortTiming.cs.d.ts" />
var TechTest;
(function (TechTest) {
    var Start;
    (function (Start) {
        var global = {
            hub: null,
            asc: null,
            callTable: null
        };
        var Timings = (function () {
            function Timings() {
                global.hub = $.connection["timings"];
                global.asc = true;
                var table = $("<table>").addClass("table table-striped table-hover");
                global.callTable = function () {
                    global.hub.server.getTable(global.asc).done(function (results) {
                        table.empty();
                        var sortDirection = $("<span>")
                            .addClass("glyphicon " + (global.asc ? "glyphicon-sort-by-order"
                            : "glyphicon-sort-by-order-alt"));
                        var sort = $("<div>").append("Time Taken ").append(sortDirection).on("click", function () {
                            global.asc = !global.asc;
                            global.callTable();
                        }).css("cursor", "pointer");
                        var valueCount = $("<center>").append("# of values");
                        var orderedBy = $("<center>").append("Ordered by");
                        var titleRow = $("<tr>").append($("<th>").append(valueCount), $("<th>").append(sort), $("<th>").append(orderedBy));
                        table.append(titleRow);
                        for (var i = 0; i < results.length; i++) {
                            var row = $("<tr>");
                            var current = results[i];
                            row.append($("<td>").text(current.ValueCount));
                            row.append($("<td>").text(current.Time + " ms"));
                            row.append($("<td>").text(current.Order));
                            table.append(row);
                        }
                    });
                };
                $.connection.hub.start().done(function () {
                    $("#table").append(table);
                    global.callTable();
                });
            }
            return Timings;
        }());
        $(document).ready(function () {
            // ReSharper disable once WrongExpressionStatement
            new Timings();
        });
    })(Start = TechTest.Start || (TechTest.Start = {}));
})(TechTest || (TechTest = {}));
//# sourceMappingURL=Timings.js.map