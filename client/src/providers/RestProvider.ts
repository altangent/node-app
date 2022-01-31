// import { GlobalStats } from "../types/Api";

function fetchJson<T>(url: string): Promise<T> {
    return fetch(url, { credentials: "include" }).then((res) => res.json());
}

export class RestProvider {
    // public fetchSummaryStats(): Promise<GlobalStats> {
    //     return fetchJson("/api/summary/stats");
    // }
}
