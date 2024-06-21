import {DataSource} from "typeorm";

export const meuBanco =  new DataSource({
    type: "mysql",
    username: "root",
    password: "1234",
    host: "localhost",
    entities: [],
});