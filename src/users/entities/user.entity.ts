import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tblUsuários')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'IdUsuario' })
  idUsuario: number;

  @Column({ name: 'ID_Usuario', nullable: true, default: 0 })
  ID_Usuario: number;

  @Column({ name: 'Usuario' })
  usuario: string;

  @Column({ name: 'Alcunha', nullable: true })
  alcunha: string;

  @Column({ name: 'Senha' })
  senha: string;

  @Column({ name: 'Bloqueado', nullable: true, default: false })
  bloqueado: boolean;

  @Column({ name: 'UserSetor', nullable: true })
  userSetor: string;

  @Column({ name: 'strDataHora', nullable: true })
  strDataHora: Date;

  @Column({ name: 'SSMA_TimeStamp' })
  SSMA_TimeStamp: Date;
}
