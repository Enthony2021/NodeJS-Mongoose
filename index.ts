import express from "express";
import { engine } from "express-handlebars";
import productsRoutes from "./routes/productsRoutes";

class App {
  app: express.Application;
  static port?: number = Number(process.env.SERVER_PORT);

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.engine("handlebars", engine());
    this.app.set("view engine", "handlebars");
    this.app.set("views", "./views");
  }

  routes(): void {
    this.app.use("/products", productsRoutes);
  }
}

export default new App().app;
export {App};




