import { Column, PrimaryGeneratedColumn, Entity} from 'typeorm';
//import { meuBanco } from '../data-source';

@Entity('produtos')
export class Produto {
 @PrimaryGeneratedColumn()
 id: number;

 @Column ({type: "text"})
 nome: string

}

