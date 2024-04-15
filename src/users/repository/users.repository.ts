import { Usuarios } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { promises } from "dns";

export abstract class UsersRepository {
    abstract create(createUserDto: CreateUserDto): Promise<Usuarios>

    abstract findAll(): Promise<Usuarios[]>

    abstract findOne(id: number): Promise<Usuarios>

    abstract update(id: number, updateUserDto: UpdateUserDto): Promise<Usuarios>

    abstract remove(id: number): Promise<void>
}