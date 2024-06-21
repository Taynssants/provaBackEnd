import  {json} from "express";
import  express from "express";
import { meuBanco } from "./data-source";
import produtoRoutes from "./routes/Produto";

meuBanco.initialize()
.then(() =>{
    console.log("começou o banco");

    const servidor = express();
    servidor.use(json());

    servidor.use("/produtos", produtoRoutes)

    servidor.listen(3000, () => {
        console.log("começou o servidor");
    });
})

.catch(() => {
    console.log("deu erro");
});