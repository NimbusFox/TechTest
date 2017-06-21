namespace TechTest.Start {

    let global: IGlobal = {
        hub: null,
        asc: null,
        callTable: null
    };

    class Value {
        constructor() {
            global.hub = $.connection["values"];

            global.asc = true;

            const number = $("<input>").addClass("form-control col-xs-4").attr("placeholder", "Enter a number").attr("type", "number");

            const button = $("<button>").addClass("btn btn-success").css("margin-left", "5px").append("Add Number").on("click", () => {
                global.hub.server.addValue(number.val()).done(global.callTable);

                number.val("");
            });

            const table = $("<table>").addClass("table table-striped table-hover");

            global.callTable = () => {
                global.hub.server.getTable(global.asc).done((result: Array<number>) => {
                    table.empty();

                    const sortDirection = $("<span>").addClass(`glyphicon ${global.asc ? "glyphicon-sort-by-order" : "glyphicon-sort-by-order-alt"}`);

                    const sort = $("<div>").append("Values ").append(sortDirection).on("click", () => {
                        global.asc = !global.asc;

                        global.callTable();
                    }).css("cursor", "pointer");

                    const titleRow = $("<td>").append($("<center>").append(sort));

                    table.append($("<tr>").append(titleRow));

                    for (let i = 0; i < result.length; i++) {
                        const row = $("<tr>");

                        row.append($("<td>").text(result[i]));

                        table.append(row);
                    }
                });
            };

            $.connection.hub.start().done(() => {
                $(".body-content").prepend(number, button, "<br/><br/>", table);

                global.callTable();
            });
        }
    }

    $(document).ready(() => {
        // ReSharper disable once WrongExpressionStatement
        new Value();
    });
}