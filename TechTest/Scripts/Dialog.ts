namespace RPNET.Chat {

    let _global: IGlobal;

    export class Dialog {

        constructor(global: IGlobal) {
            _global = global;
        }

        create(_content: string, _header: string, _close: boolean, _footer: Array<IButton>): IDialog;
        create(_content: JQuery, _header: string, _close: boolean, _footer: any): IDialog;
        create(_content: string | JQuery, _header: string, _close: boolean, _footer: Array<IButton>): IDialog {
            const header = $("<div>").addClass("modal-header").css("display", "none");
            const content = $("<div>").addClass("modal-body");
            const footer = $("<div>").addClass("modal-footer").css("display", "none");

            const dialog = $("<div>").addClass("modal-dialog vertical-align-center").append($("<div>").addClass("modal-content")
                .append(header, content, footer));

            const alignHelper = $("<div>").addClass("vertical-alignment-helper");

            alignHelper.append(dialog);

            const modal: IDialog = $("<div>").attr("id", name).addClass("modal").css({
                right: "0"
            }).append(alignHelper);

            content.append(_content);

            if (!this.isNullOrUndefined(_header)) {
                header.css("display", "block");

                if (_close) {
                    header.append($("<button>").addClass("close").attr("aria-hidden", "true").on("click", () => {
                        modal.remove();
                    }).append("&times;"));
                }

                header.append($("<h4>").addClass("modal-title").append(_header));
            }

            if (!this.isNullOrUndefined(_footer)) {
                footer.css("display", "block");

                for (let i = 0; i < _footer.length; i++) {
                    footer.append($(`<button style='${_footer[i].style}'>`).addClass(_footer[i].css).click(_footer[i]
                        .func).text(_footer[i].text));
                }
            }

            modal.diaShow = () => {
                modal.css("display", "block");
            };

            modal.diaHide = () => {
                modal.css("display", "none");
            }

            modal.diaContent = content;

            modal.diaDialog = dialog;

            modal.appendTo("body");

            modal.diaHide();

            $(window).on("resize", () => {
                //modal.css("top", ($(window).height() / 2) - (dialog.height()));
            });

            return modal;
        }

        isNullOrUndefined = (val: any) => {
            return val === null || val === undefined;
        }
    }
}