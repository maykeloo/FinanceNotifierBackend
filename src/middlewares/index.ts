import { Express } from "express";
import { bodyParserMiddleware } from "@/middlewares/bodyParser";

const middlewares = [bodyParserMiddleware];

export const applyMiddlewares = (app: Express) => {
  middlewares.forEach((middleware) => {
    app.use(middleware());
  });
};
