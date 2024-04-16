/*
  Warnings:

  - You are about to drop the column `UF_Aluno` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `cidade_Aluno` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `docPendentes` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `dtNasc_Aluno` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `localFotoAluno` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `localNascAluno` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `situacaoEleitoralId` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `situacaoMilitarId` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `ssma_TimeStamp` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `CPF` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `RG` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `UF_Cartorio` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `UF_RG` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `cartaoSUS` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `cartorio` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `dataExpRG` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `dataRegistro` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `orgaoEmissorRG` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `Celular` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `Endereco` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `GrauInstrucao` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `LocalTrabalho` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `OrgaoEmissor` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `Profissao` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `TelefoneFixo` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `TelefoneTrabalho` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `UF` on the `filiacaoaluno` table. All the data in the column will be lost.
  - You are about to drop the column `turnosId` on the `matricula` table. All the data in the column will be lost.
  - You are about to drop the column `transpEscolarId` on the `rota` table. All the data in the column will be lost.
  - You are about to drop the column `turnoId` on the `rota` table. All the data in the column will be lost.
  - You are about to drop the column `AlunoReservista` on the `situacaomilitar` table. All the data in the column will be lost.
  - You are about to drop the column `Categoria` on the `situacaomilitar` table. All the data in the column will be lost.
  - You are about to drop the column `Serie` on the `situacaomilitar` table. All the data in the column will be lost.
  - You are about to drop the `situacaoeleitoral` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `turnos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sUSId]` on the table `Documento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rGId]` on the table `Documento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tituloEleitorId]` on the table `Documento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[situacaoMilitarId]` on the table `Documento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[localTrabalhoEnderecoId]` on the table `FiliacaoAluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[enderecoId]` on the table `FiliacaoAluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ra]` on the table `SituacaoMilitar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `SituacaoMilitar` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `enderecoId` to the `FiliacaoAluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Turno` to the `Matricula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turno` to the `Rota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localNacimento` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mae` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pai` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ra` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacaoServicoMilitar` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDeDocumento` to the `SituacaoMilitar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `aluno` DROP FOREIGN KEY `Aluno_situacaoEleitoralId_fkey`;

-- DropForeignKey
ALTER TABLE `aluno` DROP FOREIGN KEY `Aluno_situacaoMilitarId_fkey`;

-- DropForeignKey
ALTER TABLE `matricula` DROP FOREIGN KEY `Matricula_turnosId_fkey`;

-- DropForeignKey
ALTER TABLE `rota` DROP FOREIGN KEY `Rota_transpEscolarId_fkey`;

-- DropForeignKey
ALTER TABLE `rota` DROP FOREIGN KEY `Rota_turnoId_fkey`;

-- DropIndex
DROP INDEX `TranspEscolar_id_idx` ON `transpescolar`;

-- AlterTable
ALTER TABLE `aluno` DROP COLUMN `UF_Aluno`,
    DROP COLUMN `cidade_Aluno`,
    DROP COLUMN `docPendentes`,
    DROP COLUMN `dtNasc_Aluno`,
    DROP COLUMN `localFotoAluno`,
    DROP COLUMN `localNascAluno`,
    DROP COLUMN `situacaoEleitoralId`,
    DROP COLUMN `situacaoMilitarId`,
    DROP COLUMN `ssma_TimeStamp`,
    ADD COLUMN `celularAluno` VARCHAR(191) NULL,
    MODIFY `docPendentesSimNao` BOOLEAN NULL DEFAULT true,
    MODIFY `data_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `documento` DROP COLUMN `CPF`,
    DROP COLUMN `RG`,
    DROP COLUMN `UF_Cartorio`,
    DROP COLUMN `UF_RG`,
    DROP COLUMN `cartaoSUS`,
    DROP COLUMN `cartorio`,
    DROP COLUMN `dataExpRG`,
    DROP COLUMN `dataRegistro`,
    DROP COLUMN `orgaoEmissorRG`,
    ADD COLUMN `rGId` INTEGER NULL,
    ADD COLUMN `sUSId` INTEGER NULL,
    ADD COLUMN `situacaoMilitarId` INTEGER NULL,
    ADD COLUMN `tituloEleitorId` INTEGER NULL,
    MODIFY `NrRegistro` VARCHAR(191) NULL,
    MODIFY `livro` VARCHAR(191) NULL,
    MODIFY `folha` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `filiacaoaluno` DROP COLUMN `Celular`,
    DROP COLUMN `Email`,
    DROP COLUMN `Endereco`,
    DROP COLUMN `GrauInstrucao`,
    DROP COLUMN `LocalTrabalho`,
    DROP COLUMN `OrgaoEmissor`,
    DROP COLUMN `Profissao`,
    DROP COLUMN `TelefoneFixo`,
    DROP COLUMN `TelefoneTrabalho`,
    DROP COLUMN `UF`,
    ADD COLUMN `celular` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `enderecoId` INTEGER NOT NULL,
    ADD COLUMN `grauInstrucao` VARCHAR(191) NULL,
    ADD COLUMN `localTrabalhoEnderecoId` INTEGER NULL,
    ADD COLUMN `profissao` VARCHAR(191) NULL,
    ADD COLUMN `telefoneFixo` VARCHAR(191) NULL,
    ADD COLUMN `telefoneTrabalho` VARCHAR(191) NULL,
    MODIFY `RG` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `matricula` DROP COLUMN `turnosId`,
    ADD COLUMN `Turno` ENUM('Matutino', 'Vespertino', 'Noturno') NOT NULL,
    MODIFY `Resultado` ENUM('ATIVO', 'DESATIVADO', 'EM_ANDAMENTO') NOT NULL DEFAULT 'EM_ANDAMENTO';

-- AlterTable
ALTER TABLE `parada` ADD COLUMN `rotaId` INTEGER NULL;

-- AlterTable
ALTER TABLE `rota` DROP COLUMN `transpEscolarId`,
    DROP COLUMN `turnoId`,
    ADD COLUMN `turno` ENUM('Matutino', 'Vespertino', 'Noturno') NOT NULL;

-- AlterTable
ALTER TABLE `situacaomilitar` DROP COLUMN `AlunoReservista`,
    DROP COLUMN `Categoria`,
    DROP COLUMN `Serie`,
    ADD COLUMN `cpf` VARCHAR(11) NOT NULL,
    ADD COLUMN `dataNascimento` DATETIME(3) NOT NULL,
    ADD COLUMN `localNacimento` VARCHAR(191) NOT NULL,
    ADD COLUMN `mae` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL,
    ADD COLUMN `pai` VARCHAR(191) NOT NULL,
    ADD COLUMN `ra` VARCHAR(12) NOT NULL,
    ADD COLUMN `situacaoServicoMilitar` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipoDeDocumento` VARCHAR(191) NOT NULL,
    ADD COLUMN `validade` DATETIME(3) NULL;

-- DropTable
DROP TABLE `situacaoeleitoral`;

-- DropTable
DROP TABLE `turnos`;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imagem` LONGBLOB NOT NULL,
    `rGId` INTEGER NULL,
    `sUSId` INTEGER NULL,
    `tituloEleitorId` INTEGER NULL,
    `situacaoMilitarId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RG` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rg` VARCHAR(10) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `dataExpedicao` DATETIME(3) NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `orgaoEmissor` VARCHAR(191) NOT NULL,
    `UF` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO') NOT NULL,
    `mae` VARCHAR(191) NULL,
    `pai` VARCHAR(191) NULL,
    `naturalidade` VARCHAR(191) NOT NULL,
    `docOrigem` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `RG_rg_key`(`rg`),
    UNIQUE INDEX `RG_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SUS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nacimento` DATETIME(3) NOT NULL,
    `sexo` ENUM('Feminino', 'Masculino', 'Outro') NOT NULL,
    `numero` VARCHAR(15) NOT NULL,

    UNIQUE INDEX `SUS_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TituloEleitor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `inscricao` VARCHAR(12) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `dataEmissao` DATETIME(3) NOT NULL,
    `pai` VARCHAR(191) NULL,
    `mae` VARCHAR(191) NULL,
    `zona` INTEGER NOT NULL,
    `secao` INTEGER NOT NULL,

    UNIQUE INDEX `TituloEleitor_inscricao_key`(`inscricao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RotaToTranspEscolar` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RotaToTranspEscolar_AB_unique`(`A`, `B`),
    INDEX `_RotaToTranspEscolar_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Documento_sUSId_key` ON `Documento`(`sUSId`);

-- CreateIndex
CREATE UNIQUE INDEX `Documento_rGId_key` ON `Documento`(`rGId`);

-- CreateIndex
CREATE UNIQUE INDEX `Documento_tituloEleitorId_key` ON `Documento`(`tituloEleitorId`);

-- CreateIndex
CREATE UNIQUE INDEX `Documento_situacaoMilitarId_key` ON `Documento`(`situacaoMilitarId`);

-- CreateIndex
CREATE UNIQUE INDEX `FiliacaoAluno_localTrabalhoEnderecoId_key` ON `FiliacaoAluno`(`localTrabalhoEnderecoId`);

-- CreateIndex
CREATE UNIQUE INDEX `FiliacaoAluno_enderecoId_key` ON `FiliacaoAluno`(`enderecoId`);

-- CreateIndex
CREATE UNIQUE INDEX `SituacaoMilitar_ra_key` ON `SituacaoMilitar`(`ra`);

-- CreateIndex
CREATE UNIQUE INDEX `SituacaoMilitar_cpf_key` ON `SituacaoMilitar`(`cpf`);

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_rGId_fkey` FOREIGN KEY (`rGId`) REFERENCES `RG`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_sUSId_fkey` FOREIGN KEY (`sUSId`) REFERENCES `SUS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_tituloEleitorId_fkey` FOREIGN KEY (`tituloEleitorId`) REFERENCES `TituloEleitor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_situacaoMilitarId_fkey` FOREIGN KEY (`situacaoMilitarId`) REFERENCES `SituacaoMilitar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documento` ADD CONSTRAINT `Documento_sUSId_fkey` FOREIGN KEY (`sUSId`) REFERENCES `SUS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documento` ADD CONSTRAINT `Documento_rGId_fkey` FOREIGN KEY (`rGId`) REFERENCES `RG`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documento` ADD CONSTRAINT `Documento_tituloEleitorId_fkey` FOREIGN KEY (`tituloEleitorId`) REFERENCES `TituloEleitor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documento` ADD CONSTRAINT `Documento_situacaoMilitarId_fkey` FOREIGN KEY (`situacaoMilitarId`) REFERENCES `SituacaoMilitar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Parada` ADD CONSTRAINT `Parada_rotaId_fkey` FOREIGN KEY (`rotaId`) REFERENCES `Rota`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RotaToTranspEscolar` ADD CONSTRAINT `_RotaToTranspEscolar_A_fkey` FOREIGN KEY (`A`) REFERENCES `Rota`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RotaToTranspEscolar` ADD CONSTRAINT `_RotaToTranspEscolar_B_fkey` FOREIGN KEY (`B`) REFERENCES `TranspEscolar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
