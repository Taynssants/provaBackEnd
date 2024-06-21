import { Router } from "express";
import { ProdutoService } from "../services/Produto";
import { ProdutoController } from "../controllers/Produto";

const produtoRoutes = Router();
const service = new ProdutoService();
const controller = new ProdutoController(service);
produtoRoutes.get("/", controller.get);
produtoRoutes.post("/", controller.post);


export default produtoRoutes