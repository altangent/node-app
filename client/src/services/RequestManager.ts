import { RestProvider } from "../providers/RestProvider";

export class RequestManager {
    protected rest: RestProvider;

    constructor(rest: RestProvider) {
        this.rest = rest;
    }

    // public async loadSummaryStats() {
    //     return await this.rest.fetchSummaryStats();
    // }
}
