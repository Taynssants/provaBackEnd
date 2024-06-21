import { produtoRepositorio } from "../models/ProdutoRepositorio";
import { Produto } from "../models/Produto";

interface IProdutoService{
    pegarTodos(): Promise<Produto[]>;
    criarUm(produto: Produto): Promise <Produto>;
}
export class ProdutoService implements IProdutoService{
    async criarUm(produto: Produto): Promise <Produto> {
        const novoProduto = produtoRepositorio.create(produto);
        await produtoRepositorio.save(novoProduto);
        return novoProduto;

    }

    async pegarTodos(): Promise<Produto[]>{
        const produtos = await produtoRepositorio.find();
        return produtos;

    }
}