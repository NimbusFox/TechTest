var TechTest;
(function (TechTest) {
    var Start;
    (function (Start) {
        var global = {
            hub: null,
            asc: null,
            callTable: null
        };
        var Value = (function () {
            function Value() {
                global.hub = $.connection["values"];
                global.asc = true;
                var number = $("<input>").addClass("form-control col-xs-4").attr("placeholder", "Enter a number").attr("type", "number");
                var button = $("<button>").addClass("btn btn-success").css("margin-left", "5px").append("Add Number").on("click", function () {
                    global.hub.server.addValue(number.val()).done(global.callTable);
                    number.val("");
                });
                var table = $("<table>").addClass("table table-striped table-hover");
                global.callTable = function () {
                    global.hub.server.getTable(global.asc).done(function (result) {
                        table.empty();
                        var sortDirection = $("<span>").addClass("glyphicon " + (global.asc ? "glyphicon-sort-by-order" : "glyphicon-sort-by-order-alt"));
                        var sort = $("<div>").append("Values ").append(sortDirection).on("click", function () {
                            global.asc = !global.asc;
                            global.callTable();
                        }).css("cursor", "pointer");
                        var titleRow = $("<td>").append($("<center>").append(sort));
                        table.append($("<tr>").append(titleRow));
                        for (var i = 0; i < result.length; i++) {
                            var row = $("<tr>");
                            row.append($("<td>").text(result[i]));
                            table.append(row);
                        }
                    });
                };
                $.connection.hub.start().done(function () {
                    $(".body-content").prepend(number, button, "<br/><br/>", table);
                    global.callTable();
                });
            }
            return Value;
        }());
        $(document).ready(function () {
            // ReSharper disable once WrongExpressionStatement
            new Value();
        });
    })(Start = TechTest.Start || (TechTest.Start = {}));
})(TechTest || (TechTest = {}));
//# sourceMappingURL=Values.js.map