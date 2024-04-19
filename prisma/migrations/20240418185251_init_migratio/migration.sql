-- CreateTable
CREATE TABLE `Escola` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `nomeFantasia` VARCHAR(150) NULL,
    `entidadeMantenedora` VARCHAR(100) NULL,
    `secretaria` VARCHAR(100) NULL,
    `cnpj` VARCHAR(20) NULL,
    `cadastroMEC` VARCHAR(30) NULL,
    `fotoEscola` VARCHAR(200) NULL,
    `nomeFotoEscola` VARCHAR(191) NULL,
    `diretor` VARCHAR(191) NULL,
    `secretario` VARCHAR(191) NULL,
    `coordPedagogico` VARCHAR(191) NULL,
    `fotoAluno` VARCHAR(200) NULL,
    `configServidor` VARCHAR(200) NULL,
    `email` VARCHAR(191) NULL,
    `paginaRedeSocial` VARCHAR(191) NULL,
    `docAutorizacaoDiretor` VARCHAR(200) NULL,
    `docAutorizacaoSecretario` VARCHAR(200) NULL,
    `tipo` VARCHAR(50) NOT NULL,
    `nivel` VARCHAR(50) NOT NULL,
    `enderecoId` INTEGER NOT NULL,
    `alunoTransferenciaId` INTEGER NULL,

    UNIQUE INDEX `Escola_enderecoId_key`(`enderecoId`),
    UNIQUE INDEX `Escola_alunoTransferenciaId_key`(`alunoTransferenciaId`),
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
    `estado` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO') NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `paradaId` INTEGER NULL,
    `alunoTransferenciaId` INTEGER NULL,

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
    `celularAluno` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `mudancaNome` VARCHAR(191) NULL,
    `procedAluno` VARCHAR(191) NULL,
    `docPendentesSimNao` BOOLEAN NULL DEFAULT true,
    `ficheiro` VARCHAR(191) NULL,
    `alimentos` VARCHAR(191) NULL,
    `areaProtecaoGov` VARCHAR(191) NULL,
    `data_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `corRaca_Aluno` ENUM('preta', 'parda', 'branco', 'indigena') NOT NULL,
    `sexo` ENUM('Feminino', 'Masculino', 'Outro') NOT NULL,
    `convenioId` INTEGER NULL,
    `documentoId` INTEGER NULL,
    `alunoTransferenciaId` INTEGER NULL,
    `enderecoId` INTEGER NOT NULL,
    `escolaId` INTEGER NULL,
    `serieId` INTEGER NOT NULL,
    `turmaId` INTEGER NULL,

    UNIQUE INDEX `Aluno_nome_key`(`nome`),
    UNIQUE INDEX `Aluno_convenioId_key`(`convenioId`),
    UNIQUE INDEX `Aluno_documentoId_key`(`documentoId`),
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
    `rgNumero` VARCHAR(10) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `dataExpedicao` DATETIME(3) NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `orgaoEmissor` VARCHAR(191) NOT NULL,
    `UF` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO') NOT NULL,
    `mae` VARCHAR(191) NULL,
    `pai` VARCHAR(191) NULL,
    `naturalidade` VARCHAR(191) NOT NULL,
    `docOrigem` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `RG_rgNumero_key`(`rgNumero`),
    UNIQUE INDEX `RG_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SUS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,
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
CREATE TABLE `SituacaoMilitar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoDeDocumento` VARCHAR(191) NOT NULL,
    `ra` VARCHAR(12) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `pai` VARCHAR(191) NOT NULL,
    `mae` VARCHAR(191) NOT NULL,
    `localNascimento` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `situacaoServicoMilitar` VARCHAR(191) NOT NULL,
    `validade` DATETIME(3) NULL,

    UNIQUE INDEX `SituacaoMilitar_ra_key`(`ra`),
    UNIQUE INDEX `SituacaoMilitar_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NrRegistro` INTEGER NULL,
    `livro` VARCHAR(191) NULL,
    `folha` VARCHAR(191) NULL,
    `sUSId` INTEGER NULL,
    `rGId` INTEGER NULL,
    `tituloEleitorId` INTEGER NULL,
    `situacaoMilitarId` INTEGER NULL,

    UNIQUE INDEX `Documento_sUSId_key`(`sUSId`),
    UNIQUE INDEX `Documento_rGId_key`(`rGId`),
    UNIQUE INDEX `Documento_tituloEleitorId_key`(`tituloEleitorId`),
    UNIQUE INDEX `Documento_situacaoMilitarId_key`(`situacaoMilitarId`),
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
    `nome` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NULL,
    `telefoneFixo` VARCHAR(8) NULL,
    `telefoneTrabalho` VARCHAR(11) NULL,
    `profissao` VARCHAR(191) NULL,
    `RG` VARCHAR(11) NULL,
    `email` VARCHAR(191) NULL,
    `grauInstrucao` ENUM('FUNDAMENTAL', 'MEDIO', 'SUPERIOR', 'POS_GRADUACAO') NULL,
    `alunoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoTransferencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `procedencia` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Serie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeSerie` VARCHAR(100) NOT NULL,
    `nivelEscolar` ENUM('ENSINO_FUNDAMENTAL', 'ENSINO_MEDIO', 'ENSINO_SUPERIOR') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_Turmas` VARCHAR(100) NOT NULL,
    `escolaId` INTEGER NOT NULL,

    INDEX `Turma_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FuncionarioDetalhe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `escolaId` INTEGER NOT NULL,
    `Dt_Cad` DATETIME(3) NULL,
    `NomeFunc` VARCHAR(100) NOT NULL,
    `Cargo` VARCHAR(191) NULL,
    `Frequencia` VARCHAR(191) NULL,
    `Atestados` VARCHAR(191) NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FuncionarioDetalhe_escolaId_key`(`escolaId`),
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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `turno` ENUM('Matutino', 'Vespertino', 'Noturno') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `rotaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MotivoSaida` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motivoSaida` VARCHAR(80) NOT NULL,
    `alunoTransferenciaId` INTEGER NOT NULL,

    UNIQUE INDEX `MotivoSaida_alunoTransferenciaId_key`(`alunoTransferenciaId`),
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
    `Dt_Alteracao` DATETIME(3) NOT NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `escolaId` INTEGER NOT NULL,
    `alunoId` INTEGER NOT NULL,
    `Resultado` ENUM('ATIVO', 'DESATIVADO', 'EM_ANDAMENTO') NOT NULL DEFAULT 'EM_ANDAMENTO',
    `Turno` ENUM('Matutino', 'Vespertino', 'Noturno') NOT NULL,

    UNIQUE INDEX `Matricula_escolaId_key`(`escolaId`),
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
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(191) NOT NULL,
    `alcunha` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,
    `bloqueado` BOOLEAN NULL DEFAULT false,
    `userSetor` VARCHAR(191) NULL,
    `strDataHora` DATETIME(3) NULL,
    `SSMA_TimeStamp` DATETIME(3) NOT NULL,

    INDEX `tblUsuários$id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EnderecoToTranspEscolar` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EnderecoToTranspEscolar_AB_unique`(`A`, `B`),
    INDEX `_EnderecoToTranspEscolar_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RotaToTranspEscolar` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RotaToTranspEscolar_AB_unique`(`A`, `B`),
    INDEX `_RotaToTranspEscolar_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Escola` ADD CONSTRAINT `Escola_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Escola` ADD CONSTRAINT `Escola_alunoTransferenciaId_fkey` FOREIGN KEY (`alunoTransferenciaId`) REFERENCES `AlunoTransferencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_paradaId_fkey` FOREIGN KEY (`paradaId`) REFERENCES `Parada`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_alunoTransferenciaId_fkey` FOREIGN KEY (`alunoTransferenciaId`) REFERENCES `AlunoTransferencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_documentoId_fkey` FOREIGN KEY (`documentoId`) REFERENCES `Documento`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_convenioId_fkey` FOREIGN KEY (`convenioId`) REFERENCES `Convenio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_alunoTransferenciaId_fkey` FOREIGN KEY (`alunoTransferenciaId`) REFERENCES `AlunoTransferencia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_serieId_fkey` FOREIGN KEY (`serieId`) REFERENCES `Serie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicamentosAlergia` ADD CONSTRAINT `MedicamentosAlergia_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE `FiliacaoAluno` ADD CONSTRAINT `FiliacaoAluno_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FuncionarioDetalhe` ADD CONSTRAINT `FuncionarioDetalhe_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ocorrencias` ADD CONSTRAINT `Ocorrencias_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Parada` ADD CONSTRAINT `Parada_rotaId_fkey` FOREIGN KEY (`rotaId`) REFERENCES `Rota`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MotivoSaida` ADD CONSTRAINT `MotivoSaida_alunoTransferenciaId_fkey` FOREIGN KEY (`alunoTransferenciaId`) REFERENCES `AlunoTransferencia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_escolaId_fkey` FOREIGN KEY (`escolaId`) REFERENCES `Escola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE `_RotaToTranspEscolar` ADD CONSTRAINT `_RotaToTranspEscolar_A_fkey` FOREIGN KEY (`A`) REFERENCES `Rota`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RotaToTranspEscolar` ADD CONSTRAINT `_RotaToTranspEscolar_B_fkey` FOREIGN KEY (`B`) REFERENCES `TranspEscolar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
