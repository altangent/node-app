import path from "path";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import serveStatic from "serve-static";

import { Logger, ConsoleTransport } from "@node-lightning/logger";
const logger = new Logger();
logger.transports.push(new ConsoleTransport(console));

const app = express();
const PORT = 8000;

logger.info("execution path", __dirname);
app.use(compression());
app.use("/public", serveStatic(path.join(__dirname, "../../public")));
app.use("/public/app", serveStatic(path.join(__dirname, "../../client/dist/app")));
app.use("/public/css", serveStatic(path.join(__dirname, "../../style/dist/css")));
app.use(bodyParser.json());

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../../public/index.html")));

// eslint-disable-next-line
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.ErrorRequestHandler,
    ) => {
        logger.error(err);
        res.status(500).json(err);
    },
);

app.listen(PORT, () => logger.info(`express listening on ${PORT}`));
