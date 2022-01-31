import { RestProvider } from "../providers/RestProvider";
import { useMemo } from "react";
// import { useStore } from "react-redux";
import { RequestManager } from "../services/RequestManager";

/**
 * Returns an instance of the request service that can
 * be used throughout the application.
 * @returns {RequestManager}
 */
export function useRequest() {
    // const store = useStore();

    const memo = useMemo(() => {
        const restProvider = new RestProvider();
        return new RequestManager(restProvider);
    }, []);
    return memo;
}
