-- CreateTable
CREATE TABLE `Escola` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_Escola` VARCHAR(150) NULL,
    `nomeFantazia` VARCHAR(150) NULL,
    `Endereco_Escola` VARCHAR(191) NULL,
    `EntidadeMatenedora` VARCHAR(100) NULL,
    `Secretaria` VARCHAR(100) NULL,
    `CNPJ_Escola` VARCHAR(191) NULL,
    `CadastroMEC` VARCHAR(30) NULL,
    `LocalFotoEscola` VARCHAR(70) NULL,
    `NomeFotoEscola` VARCHAR(191) NULL,
    `Diretor` VARCHAR(191) NULL,
    `Secretario` VARCHAR(191) NULL,
    `CoordPedag` VARCHAR(191) NULL,
    `LocalFotoAluno` VARCHAR(200) NULL,
    `Config_Servidor` VARCHAR(200) NULL,
    `Email_Escola` VARCHAR(191) NULL,
    `Pagina_RedeSocialEscola` VARCHAR(191) NULL,
    `DocAut_dir` VARCHAR(191) NULL,
    `DocAut_Sec` VARCHAR(191) NULL,
    `Tipo_Escola` VARCHAR(191) NULL,
    `NivelEscolar` VARCHAR(191) NULL,
    `enderecoId` INTEGER NOT NULL,

    UNIQUE INDEX `Escola_enderecoId_key`(`enderecoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logradouro` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `paradaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `MesReferencia` VARCHAR(191) NULL,
    `dataDo` DATETIME(3) NULL,
    `name` VARCHAR(100) NOT NULL,
    `alcunha` VARCHAR(191) NULL,
    `cargo` VARCHAR(80) NULL,
    `funcaoDesempenhada` VARCHAR(80) NULL,
    `statusFunc` VARCHAR(191) NULL,
    `vinculo` VARCHAR(191) NULL,
    `carga_Horaria` INTEGER NULL DEFAULT 0,
    `matricula` VARCHAR(191) NULL,
    `faltas` VARCHAR(191) NULL,
    `licenca` VARCHAR(191) NULL,
    `extras` VARCHAR(191) NULL,
    `OBS` VARCHAR(191) NULL,
    `escolaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `dtNasc_Aluno` DATETIME(3) NOT NULL,
    `localNascAluno` VARCHAR(191) NOT NULL,
    `cidade_Aluno` VARCHAR(191) NULL,
    `UF_Aluno` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `mudancaNome` VARCHAR(191) NULL,
    `procedAluno` VARCHAR(191) NULL,
    `docPendentesSimNao` BOOLEAN NULL DEFAULT false,
    `docPendentes` VARCHAR(191) NULL,
    `ficheiro` VARCHAR(191) NULL,
    `alimentos` VARCHAR(191) NULL,
    `localFotoAluno` VARCHAR(191) NULL,
    `areaProtecaoGov` VARCHAR(191) NULL,
    `data_Registro` DATETIME(3) NOT NULL,
    `ssma_TimeStamp` DATETIME(3) NOT NULL,
    `corRaca_Aluno` ENUM('preta', 'parda', 'branco', 'indigena') NOT NULL,
    `sexo` ENUM('Feminino', 'Masculino', 'Outro') NOT NULL,
    `convenioId` INTEGER NULL,
    `situacaoEleitoralId` INTEGER NULL,
    `documentoId` INTEGER NULL,
    `situacaoMilitarId` INTEGER NULL,
    `alunoTransferenciaId` INTEGER NULL,
    `enderecoId` INTEGER NULL,

    UNIQUE INDEX `Aluno_nome_key`(`nome`),
    UNIQUE INDEX `Aluno_convenioId_key`(`convenioId`),
    UNIQUE INDEX `Aluno_situacaoEleitoralId_key`(`situacaoEleitoralId`),
    UNIQUE INDEX `Aluno_documentoId_key`(`documentoId`),
    UNIQUE INDEX `Aluno_situacaoMilitarId_key`(`situacaoMilitarId`),
    UNIQUE INDEX `Aluno_alunoTransferenciaId_key`(`alunoTransferenciaId`),
    UNIQUE INDEX `Aluno_enderecoId_key`(`enderecoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicamentosAlergia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCientifico` VARCHAR(191) NULL,
    `nomePopular` VARCHAR(191) NOT NULL,
    `alunoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NrRegistro` VARCHAR(191) NOT NULL,
    `livro` VARCHAR(191) NOT NULL,
    `folha` VARCHAR(191) NOT NULL,
    `dataRegistro` DATETIME(3) NULL,
    `cartorio` VARCHAR(191) NOT NULL,
    `UF_Cartorio` VARCHAR(191) NOT NULL,
    `RG` VARCHAR(191) NOT NULL,
    `dataExpRG` DATETIME(3) NULL,
    `orgaoEmissorRG` VARCHAR(191) NOT NULL,
    `UF_RG` VARCHAR(191) NOT NULL,
    `CPF` VARCHAR(191) NOT NULL,
    `cartaoSUS` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Convenio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `dataInicio` DATETIME(3) NOT NULL,
    `dataFim` DATETIME(3) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FiliacaoAluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Celular` VARCHAR(191) NOT NULL,
    `TelefoneFixo` VARCHAR(191) NOT NULL,
    `TelefoneTrabalho` VARCHAR(191) NOT NULL,
    `Profissao` VARCHAR(191) NOT NULL,
    `RG` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `GrauInstrucao` VARCHAR(191) NOT NULL,
    `LocalTrabalho` VARCHAR(191) NOT NULL,
    `UF` VARCHAR(191) NOT NULL,
    `OrgaoEmissor` VARCHAR(191) NOT NULL,
    `Endereco` VARCHAR(191) NOT NULL,
    `alunoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SituacaoMilitar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Serie` VARCHAR(191) NOT NULL,
    `AlunoReservista` VARCHAR(191) NOT NULL,
    `Categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SituacaoEleitoral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TituloNr` VARCHAR(191) NOT NULL,
    `Zona` VARCHAR(191) NOT NULL,
    `Secao` VARCHAR(191) NOT NULL,
    `Municipio` VARCHAR(191) NOT NULL,
    `UF` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrigemAluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoTransferencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `procedencia` VARCHAR(191) NOT NULL,
    `UF` VARCHAR(191) NOT NULL,
    `transpEscolarId` INTEGER NULL,
    `motivoSaidaID` INTEGER NULL,
    `escolaId` INTEGER NOT NULL,
    `enderecoId` INTEGER NOT NULL,

    UNIQUE INDEX `AlunoTransferencia_transpEscolarId_key`(`transpEscolarId`),
    UNIQUE INDEX `AlunoTransferencia_motivoSaidaID_key`(`motivoSaidaID`),
    UNIQUE INDEX `AlunoTransferencia_escolaId_key`(`escolaId`),
    UNIQUE INDEX `AlunoTransferencia_enderecoId_key`(`enderecoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Serie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_Serie` VARCHAR(100) NULL,
    `nivelEscolar` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_Turmas` VARCHAR(100) NULL,
    `escolaId` INTEGER NOT NULL,

    INDEX `Turma_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turnos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_Turno` ENUM('Matutino', 'Vespertino', 'Noturno') NOT NULL,
    `Horario_Turno` VARCHAR(20) NULL,

    INDEX `Turnos_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tbl_FuncDet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `escolaId` INTEGER NOT NULL,
    `Dt_Cad` DATETIME(3) NULL,
    `NomeFunc` VARCHAR(100) NOT NULL,
    `Cargo` VARCHAR(191) NULL,
    `Frequencia` VARCHAR(191) NULL,
    `Atestados` VARCHAR(191) NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Tbl_FuncDet_escolaId_key`(`escolaId`),
    UNIQUE INDEX `Tbl_FuncDet$Fornecedor`(`NomeFunc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ocorrencias` (
    `Codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `Cod_Escola` INTEGER NULL DEFAULT 0,
    `Cod_Aluno` INTEGER NULL DEFAULT 0,
    `Nome_AlunoAutor` VARCHAR(191) NULL,
    `Cod_Matricula` INTEGER NULL DEFAULT 0,
    `AnoLetivo` INTEGER NULL DEFAULT 0,
    `AnoEscolar` VARCHAR(191) NULL,
    `Turma` VARCHAR(191) NULL,
    `NomeDeclarante` VARCHAR(191) NULL,
    `Cadastro` VARCHAR(191) NULL,
    `DataOcorrencia` VARCHAR(191) NULL,
    `RelatoOcorrencia` VARCHAR(191) NULL,
    `AtoIndisciplinar` VARCHAR(191) NULL,
    `DecAutor` VARCHAR(191) NULL,
    `Resp_Ocorrencia` VARCHAR(191) NULL,
    `Conclusao` VARCHAR(191) NULL,
    `Obs` VARCHAR(191) NULL,
    `Resp_AtendOcorrencia` VARCHAR(191) NULL,
    `alunoId` INTEGER NULL,

    PRIMARY KEY (`Codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TranspEscolar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Moto_Nome` VARCHAR(191) NOT NULL,
    `Moto_Fone` VARCHAR(191) NOT NULL,
    `Moto_CNH` VARCHAR(191) NOT NULL,
    `Moto_CatCNH` VARCHAR(191) NOT NULL,
    `Moto_RG` VARCHAR(191) NOT NULL,
    `Prop_Nome` VARCHAR(191) NOT NULL,
    `Prop_Fone` VARCHAR(191) NOT NULL,
    `Prop_CPF` VARCHAR(191) NOT NULL,
    `Prop_RG` VARCHAR(191) NOT NULL,
    `Veic_Marca` VARCHAR(191) NOT NULL,
    `Veic_Modelo` VARCHAR(191) NOT NULL,
    `Veic_Capacidade` VARCHAR(191) NOT NULL,
    `Veic_Placa` VARCHAR(191) NOT NULL,

    INDEX `TranspEscolar_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `transpEscolarId` INTEGER NOT NULL,
    `turnoId` INTEGER NOT NULL,

    UNIQUE INDEX `Rota_transpEscolarId_key`(`transpEscolarId`),
    UNIQUE INDEX `Rota_turnoId_key`(`turnoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MotivoSaida` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Cod_Escola` VARCHAR(191) NULL,
    `motivoSaida` VARCHAR(80) NULL,

    INDEX `MotivoSaida_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matricula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Dt_Matricula` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `AnoLetivo` INTEGER NOT NULL,
    `Nivel` VARCHAR(50) NULL,
    `horarioAulaID` VARCHAR(30) NULL,
    `HorasAnual` VARCHAR(191) NULL,
    `Frequencia` DOUBLE NULL,
    `dataSaida` DATETIME(3) NULL,
    `Resultado Final` VARCHAR(191) NULL,
    `LocalFotoAluno` VARCHAR(191) NULL,
    `Dt_Alteracao` VARCHAR(191) NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,
    `serieId` INTEGER NOT NULL,
    `turmaId` INTEGER NULL,
    `escolaId` INTEGER NOT NULL,
    `turnosId` INTEGER NOT NULL,
    `alunoId` INTEGER NOT NULL,
    `Resultado` ENUM('ATIVO', 'DESATIVADO', 'EM_ANDAMENTO') NOT NULL,

    UNIQUE INDEX `Matricula_serieId_key`(`serieId`),
    UNIQUE INDEX `Matricula_turmaId_key`(`turmaId`),
    UNIQUE INDEX `Matricula_escolaId_key`(`escolaId`),
    UNIQUE INDEX `Matricula_turnosId_key`(`turnosId`),
    UNIQUE INDEX `Matricula_alunoId_key`(`alunoId`),
    INDEX `Matricula_horarioAulaID_idx`(`horarioAulaID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `matriculaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resultado` INTEGER NOT NULL,
    `materiaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Falta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `materiaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dias` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Numdia` INTEGER NULL DEFAULT 0,
    `DataAtual` DATETIME(3) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblFunções` (
    `IdFuncao` INTEGER NOT NULL AUTO_INCREMENT,
    `Funcao` VARCHAR(100) NOT NULL,
    `Objeto` VARCHAR(50) NULL,
    `Status` BOOLEAN NULL DEFAULT false,
    `StatusSuspenso` BOOLEAN NULL DEFAULT false,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,

    INDEX `tblFunções$IdFuncao`(`IdFuncao`),
    INDEX `tblFunções$idxFunFormulario`(`Objeto`),
    INDEX `tblFunções$idxFunNome`(`Funcao`),
    PRIMARY KEY (`IdFuncao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ribbons` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `RibbonName` VARCHAR(100) NULL,
    `RibbonXml` VARCHAR(191) NULL,
    `Versao` INTEGER NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblUsuários` (
    `idusuario` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(191) NOT NULL,
    `alcunha` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,
    `bloqueado` BOOLEAN NULL DEFAULT false,
    `userSetor` VARCHAR(191) NULL,
    `strDataHora` DATETIME(3) NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,

    INDEX `tblUsuários$IdUsuario`(`idusuario`),
    PRIMARY KEY (`idusuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EnderecoToTranspEscolar` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EnderecoToTranspEscolar_AB_unique`(`A`, `B`),
    INDEX `_EnderecoToTranspEscolar_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Escola` ADD CONSTRAINT `Escola_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_paradaId_fkey` FOREIGN KEY (`paradaId`) REFERENCES `Parada`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_documentoId_fkey` FOREIGN KEY (`documentoId`) REFERENCES `Documento`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_situacaoEleitoralId_fkey` FOREIGN KEY (`situacaoEleitoralId`) REFERENCES `SituacaoEleitoral`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_convenioId_fkey` FOREIGN KEY (`convenioId`) REFERENCES `Convenio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_situacaoMilitarId_fkey` FOREIGN KEY (`situacaoMilitarId`) REFERENCES `SituacaoMilitar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_alunoTransferenciaId_fkey` FOREIGN KEY (`alunoTransferenciaId`) REFERENCES `AlunoTransferencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicamentosAlergia` ADD CONSTRAINT `MedicamentosAlergia_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FiliacaoAluno` ADD CONSTRAINT `FiliacaoAluno_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTransferencia` ADD CONSTRAINT `AlunoTransferencia_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTransferencia` ADD CONSTRAINT `AlunoTransferencia_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTransferencia` ADD CONSTRAINT `AlunoTransferencia_motivoSaidaID_fkey` FOREIGN KEY (`motivoSaidaID`) REFERENCES `MotivoSaida`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTransferencia` ADD CONSTRAINT `AlunoTransferencia_transpEscolarId_fkey` FOREIGN KEY (`transpEscolarId`) REFERENCES `TranspEscolar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tbl_FuncDet` ADD CONSTRAINT `Tbl_FuncDet_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ocorrencias` ADD CONSTRAINT `Ocorrencias_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rota` ADD CONSTRAINT `Rota_turnoId_fkey` FOREIGN KEY (`turnoId`) REFERENCES `Turnos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rota` ADD CONSTRAINT `Rota_transpEscolarId_fkey` FOREIGN KEY (`transpEscolarId`) REFERENCES `TranspEscolar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_serieId_fkey` FOREIGN KEY (`serieId`) REFERENCES `Serie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_turnosId_fkey` FOREIGN KEY (`turnosId`) REFERENCES `Turnos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Materia` ADD CONSTRAINT `Materia_matriculaId_fkey` FOREIGN KEY (`matriculaId`) REFERENCES `Matricula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nota` ADD CONSTRAINT `Nota_materiaId_fkey` FOREIGN KEY (`materiaId`) REFERENCES `Materia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Falta` ADD CONSTRAINT `Falta_materiaId_fkey` FOREIGN KEY (`materiaId`) REFERENCES `Materia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EnderecoToTranspEscolar` ADD CONSTRAINT `_EnderecoToTranspEscolar_A_fkey` FOREIGN KEY (`A`) REFERENCES `Endereco`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EnderecoToTranspEscolar` ADD CONSTRAINT `_EnderecoToTranspEscolar_B_fkey` FOREIGN KEY (`B`) REFERENCES `TranspEscolar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
