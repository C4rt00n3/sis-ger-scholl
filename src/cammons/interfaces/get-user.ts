import { Usuarios } from "@prisma/client";

export interface IGetUser extends  Omit<Usuarios, "senha">  {

}