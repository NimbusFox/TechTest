/// <reference path="../../../IC/Classes/SortTiming.cs.d.ts" />
namespace TechTest.Start {
    import sortTiming = server.sortTiming;
    let global: IGlobal = {
        hub: null,
        asc: null,
        callTable: null
    };

    class Timings {
        constructor() {
            global.hub = $.connection["timings"];

            global.asc = true;

            const table = $("<table>").addClass("table table-striped table-hover");

            global.callTable = () => {
                global.hub.server.getTable(global.asc).done((results: Array<sortTiming>) => {
                    table.empty();

                    const sortDirection = $("<span>")
                        .addClass(`glyphicon ${global.asc ? "glyphicon-sort-by-order"
                                               : "glyphicon-sort-by-order-alt"}`);

                    const sort = $("<div>").append("Time Taken ").append(sortDirection).on("click", () => {
                        global.asc = !global.asc;

                        global.callTable();
                    }).css("cursor", "pointer");

                    const valueCount = $("<center>").append("# of values");

                    const orderedBy = $("<center>").append("Ordered by");

                    const titleRow = $("<tr>").append($("<th>").append(valueCount), $("<th>").append(sort), $("<th>").append(orderedBy));

                    table.append(titleRow);

                    for (let i = 0; i < results.length; i++) {
                        const row = $("<tr>");

                        const current = results[i];

                        row.append($("<td>").text(current.ValueCount));
                        row.append($("<td>").text(current.Time + " ms"));
                        row.append($("<td>").text(current.Order));

                        table.append(row);
                    }
                });
            }

            $.connection.hub.start().done(() => {
                $("#table").append(table);

                global.callTable();
            });
        }
    }

    $(document).ready(() => {
        // ReSharper disable once WrongExpressionStatement
        new Timings();
    });
}