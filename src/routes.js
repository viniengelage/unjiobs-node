import { Router } from "express";

import ProductController from "./controllers/ProductController";

const routes = Router();

/* Tasks */
routes.get("/items", ProductController.index);
routes.get("/items/:id", ProductController.show);
routes.post("/items", ProductController.store);
routes.put("/items/:id", ProductController.update);
routes.delete("/items/:id", ProductController.destroy);

export default routes;