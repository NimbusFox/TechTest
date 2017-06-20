namespace TechTest.Start {

    let global: IGlobal = {
        hub: null,
        page: null,
        perPage: null,
        asc: null,
        callTable: null
    };

    class Value {
        constructor() {
            global.hub = $.connection.hub["values"];

            global.page = 1;

            global.perPage = 10;

            global.asc = true;

            const number = $("<input>").addClass("form-control col-xs-4").attr("placeholder", "Enter a number").attr("type", "number");

            const button = $("<button>").addClass("btn btn-success").css("margin-left", "5px").append("Add Number").on("click", () => {
                global.hub.server.Add(number.val()).done(global.callTable);

                number.val("");
            });

            const table = $("<table>").addClass("table table-striped");

            const titleRow = $("<td>");

            global.callTable = () => {
                global.hub.server.GetTable(global.page, global.perPage, global.asc).done((result: Array<number>) => {
                    table.html("");

                    table.append(titleRow);

                    for (let i = 0; i < result.length; i++) {
                        const row = $("<tr>");


                    }
                });
            };

            $(".body-content").prepend(number, button, "<br/>", table);
        }
    }

    $(document).ready(() => {
        // ReSharper disable once WrongExpressionStatement
        new Value();
    });
}