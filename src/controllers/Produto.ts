import { Produto } from "../models/Produto";
import {ProdutoService } from "../services/Produto";
import { Request, Response, Router } from "express";


export class ProdutoController {
    private service: ProdutoService

    constructor(s: ProdutoService) {
        this.service = s;
    }

    get = async(req: Request, res: Response) =>{
        const produtos = await this.service.pegarTodos();
        return res.status(200).json(produtos);
    };

    post = async (req: Request, res: Response) => {
        const {nome} = req.body;
        //const produtoCriado =  nome as Partial<Produto>;
        const produto = new Produto();
        produto.nome = nome;
       await this.service.criarUm(produto); // se der erro, não é verdadeiro
        return res.status(201).json(produto);
    };
}

/*const service = new ProdutoService() 
const controller = new ProdutoController(service);

const router = Router();
router.get("/test", controller.get.bind(controller))
*/
