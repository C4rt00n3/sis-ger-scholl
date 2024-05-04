import { Usuarios } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

/**
 * Interface que define as operações disponíveis para manipulação de usuários.
 */
export abstract class UsersRepository {
    /**
     * Cria um novo usuário com base nos dados fornecidos no DTO.
     * @param createUserDto O DTO contendo os dados para criar o usuário.
     * @returns O usuário criado.
     */
    abstract create(createUserDto: CreateUserDto): Promise<Usuarios>;

    /**
     * Encontra todos os usuários.
     * @returns Uma lista de todos os usuários.
     */
    abstract findAll(): Promise<Usuarios[]>;

    /**
     * Encontra um usuário pelo ID.
     * @param id O ID do usuário a ser encontrado.
     * @returns O usuário encontrado.
     */
    abstract findOne(id: number): Promise<Usuarios>;

    /**
     * Atualiza um usuário pelo ID com base nos dados fornecidos no DTO de atualização.
     * @param id O ID do usuário a ser atualizado.
     * @param updateUserDto O DTO contendo os dados para atualizar o usuário.
     * @returns O usuário atualizado.
     */
    abstract update(id: number, updateUserDto: UpdateUserDto): Promise<Usuarios>;

    /**
     * Remove um usuário pelo ID.
     * @param id O ID do usuário a ser removido.
     */
    abstract remove(id: number): Promise<void>;
    
    /**
     * Busca usuário pelo username
     * @param username nome de usuário 
     * @returns {Usuarios}
    **/
    abstract findByUsername(username: string): Promise<Usuarios>;

     /**
     * Busca usuário pelo username
     * @param username nome de usuário 
     * @returns {Usuarios}
    **/
    abstract findByEmail(email: string): Promise<Usuarios>;
}
