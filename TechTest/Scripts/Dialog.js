var RPNET;
(function (RPNET) {
    var Chat;
    (function (Chat) {
        var _global;
        var Dialog = (function () {
            function Dialog(global) {
                this.isNullOrUndefined = function (val) {
                    return val === null || val === undefined;
                };
                _global = global;
            }
            Dialog.prototype.create = function (_content, _header, _close, _footer) {
                var header = $("<div>").addClass("modal-header").css("display", "none");
                var content = $("<div>").addClass("modal-body");
                var footer = $("<div>").addClass("modal-footer").css("display", "none");
                var dialog = $("<div>").addClass("modal-dialog vertical-align-center").append($("<div>").addClass("modal-content")
                    .append(header, content, footer));
                var alignHelper = $("<div>").addClass("vertical-alignment-helper");
                alignHelper.append(dialog);
                var modal = $("<div>").attr("id", name).addClass("modal").css({
                    right: "0"
                }).append(alignHelper);
                content.append(_content);
                if (!this.isNullOrUndefined(_header)) {
                    header.css("display", "block");
                    if (_close) {
                        header.append($("<button>").addClass("close").attr("aria-hidden", "true").on("click", function () {
                            modal.remove();
                        }).append("&times;"));
                    }
                    header.append($("<h4>").addClass("modal-title").append(_header));
                }
                if (!this.isNullOrUndefined(_footer)) {
                    footer.css("display", "block");
                    for (var i = 0; i < _footer.length; i++) {
                        footer.append($("<button style='" + _footer[i].style + "'>").addClass(_footer[i].css).click(_footer[i]
                            .func).text(_footer[i].text));
                    }
                }
                modal.diaShow = function () {
                    modal.css("display", "block");
                };
                modal.diaHide = function () {
                    modal.css("display", "none");
                };
                modal.diaContent = content;
                modal.diaDialog = dialog;
                modal.appendTo("body");
                modal.diaHide();
                $(window).on("resize", function () {
                    //modal.css("top", ($(window).height() / 2) - (dialog.height()));
                });
                return modal;
            };
            return Dialog;
        }());
        Chat.Dialog = Dialog;
    })(Chat = RPNET.Chat || (RPNET.Chat = {}));
})(RPNET || (RPNET = {}));
//# sourceMappingURL=Dialog.js.map