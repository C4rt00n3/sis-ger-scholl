import { CreateEscolaDto } from "src/escola/dto/create-escola.dto";
import { UpdateEscolaDto } from "src/escola/dto/update-escola.dto";
import { EscolaRepository } from "../escola.repository";
import { PrismaService } from "src/prisma.service";
import { Escola } from "@prisma/client";
import { Injectable, NotFoundException } from "@nestjs/common";
import { EnderecoService } from "src/endereco/endereco.service";

@Injectable()
export class EscolaRepositoryPrisma implements EscolaRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly enderecoservice: EnderecoService
    ) {}

    async create(createEscolaDto: CreateEscolaDto): Promise<Escola> {
        const { endereco, ...pick } = createEscolaDto;
        const data = pick as Escola;

        if(createEscolaDto.endereco){
            const endereco = await this.enderecoservice.create(createEscolaDto.endereco);
            data.enderecoId = endereco.id;
        }

        return await this.prisma.escola.create({
            data: data
        })
    }   
    
    async findAll(filters: {}): Promise<Escola[]> {
        return await this.prisma.escola.findMany({where: filters})
    }
    
    async findOne(id: number): Promise<Escola> {
        return await this.prisma.escola.findUniqueOrThrow({where: {id}})
        .then((e) => e)
        .catch(_ => {throw new NotFoundException("Escola não encontrada!")})
    }
    
    async update(id: number, updateEscolaDto: UpdateEscolaDto): Promise<Escola> {
        const { endereco, ...data } = updateEscolaDto;

        const scholl = await this.findOne(id)
        
        if(updateEscolaDto.endereco && scholl.enderecoId)
            await this.enderecoservice.update(scholl.enderecoId, updateEscolaDto.endereco)

        return await this.prisma.escola.update({
            where:{
                id
            },
            data: data
        })
    }
    
    async remove(id: number): Promise<void> {
        await this.prisma.endereco.delete({where: {id}})
    }

}