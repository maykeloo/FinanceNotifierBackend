import bodyParser from "body-parser";
import { Express } from "express";

export const applyMiddlewares = (app: Express) => {
  app.use(bodyParser.text({ type: "text/plain" }));
};
