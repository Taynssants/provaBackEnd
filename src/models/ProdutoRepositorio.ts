import { meuBanco } from "../data-source";
import { Produto } from "./Produto";

export const produtoRepositorio = meuBanco.getRepository(Produto);