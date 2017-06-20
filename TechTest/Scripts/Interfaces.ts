interface IGlobal {
    page: number;
    perPage: number;
    asc: boolean;
    hub: IHub;
    callTable: Function;
}

interface IHubServer {
    Add: Function;
    GetTable: Function;
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