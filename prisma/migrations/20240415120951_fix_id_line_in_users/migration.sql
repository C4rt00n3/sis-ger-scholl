/*
  Warnings:

  - The primary key for the `tblusuários` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idusuario` on the `tblusuários` table. All the data in the column will be lost.
  - Added the required column `id` to the `tblUsuários` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `tblUsuários$IdUsuario` ON `tblusuários`;

-- AlterTable
ALTER TABLE `tblusuários` DROP PRIMARY KEY,
    DROP COLUMN `idusuario`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `tblUsuários$id` ON `tblUsuários`(`id`);
