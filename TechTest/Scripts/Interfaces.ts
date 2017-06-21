interface IGlobal {
    asc: boolean;
    hub: IHub;
    callTable: Function;
}

interface IHubServer {
    addValue: Function;
    getTable: Function;
}

interface IHubClient {
    CallTable: Function;
}

interface IHub {
    server: IHubServer;
    client: IHubClient;
}

interface IDialog extends JQuery {
    diaShow?: Function;
    diaHide?: Function;
    diaContent?: JQuery;
    diaDialog?: JQuery;
}

interface IButton {
    text: string;
    style: string;
    css: string;
    func: Function;
}