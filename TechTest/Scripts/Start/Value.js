var TechTest;
(function (TechTest) {
    var Start;
    (function (Start) {
        var global = {
            hub: null,
            page: null,
            perPage: null,
            asc: null,
            callTable: null
        };
        var Value = (function () {
            function Value() {
                global.hub = $.connection.hub["values"];
                global.page = 1;
                global.perPage = 10;
                global.asc = true;
                var number = $("<input>").addClass("form-control col-xs-4").attr("placeholder", "Enter a number").attr("type", "number");
                var button = $("<button>").addClass("btn btn-success").css("margin-left", "5px").append("Add Number").on("click", function () {
                    global.hub.server.Add(number.val()).done(global.callTable);
                    number.val("");
                });
                var table = $("<table>").addClass("table table-striped");
                var titleRow = $("<td>");
                global.callTable = function () {
                    global.hub.server.GetTable(global.page, global.perPage, global.asc).done(function (result) {
                        table.html("");
                        table.append(titleRow);
                        for (var i = 0; i < result.length; i++) {
                            var row = $("<tr>");
                        }
                    });
                };
                $(".body-content").prepend(number, button, "<br/>", table);
            }
            return Value;
        }());
        $(document).ready(function () {
            // ReSharper disable once WrongExpressionStatement
            new Value();
        });
    })(Start = TechTest.Start || (TechTest.Start = {}));
})(TechTest || (TechTest = {}));
//# sourceMappingURL=Value.js.map