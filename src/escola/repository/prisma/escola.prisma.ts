import { CreateEscolaDto } from "src/escola/dto/create-escola.dto";
import { UpdateEscolaDto } from "src/escola/dto/update-escola.dto";
import { EscolaRepository } from "../escola.repository";
import { PrismaService } from "src/prisma.service";
import { Escola } from "@prisma/client";
import { NotFoundException } from "@nestjs/common";

export class EscolaRepositoryPrisma implements EscolaRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createEscolaDto: CreateEscolaDto): Promise<Escola> {
        const data = {} as Escola;
        Object.assign(data, createEscolaDto != null);

        if(createEscolaDto.Endereco){
            const endereco = await this.prisma.endereco.create({data: createEscolaDto.Endereco});
            data.enderecoId = endereco.id;
        }

        return await this.prisma.escola.create({
            data
        })
    }
    
    async findAll(filters: {}): Promise<Escola[]> {
        return await this.prisma.escola.findMany({where: filters})
    }
    
    async findOne(id: number): Promise<Escola> {
        return await this.prisma.escola.findUniqueOrThrow({where: {id}}).catch(_ => {throw new NotFoundException("Escola não encontrada!")})
    }
    
    async update(id: number, updateEscolaDto: UpdateEscolaDto): Promise<Escola> {
        const scholl = await this.findOne(id)
        if(updateEscolaDto.Endereco && scholl.enderecoId){
            await this.prisma.endereco.update({
                where: {id: scholl.enderecoId},
                data: updateEscolaDto.Endereco
            })
            delete updateEscolaDto.Endereco
        }

        return await this.prisma.escola.update({
            where:{
                id
            },
            data: updateEscolaDto
        })
    }
    
    async remove(id: number): Promise<void> {
        await this.prisma.endereco.delete({where: {id}})
    }

}