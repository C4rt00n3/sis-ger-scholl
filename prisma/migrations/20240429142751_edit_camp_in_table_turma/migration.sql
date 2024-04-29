/*
  Warnings:

  - You are about to drop the column `NrRegistro` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `Nome_Turmas` on the `turma` table. All the data in the column will be lost.
  - Added the required column `nomeTurma` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `documento` DROP COLUMN `NrRegistro`;

-- AlterTable
ALTER TABLE `turma` DROP COLUMN `Nome_Turmas`,
    ADD COLUMN `nomeTurma` VARCHAR(100) NOT NULL;
