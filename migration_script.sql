-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: ACCTOSQL
-- Source Schemata: ACCTOSQL
-- Created: Fri Apr 12 15:06:40 2024
-- Workbench Version: 8.0.36
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema ACCTOSQL
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `ACCTOSQL` ;
CREATE SCHEMA IF NOT EXISTS `ACCTOSQL` ;

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.Erros ao colar
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`Erros ao colar` (
  `CodCad_Aluno` INT NULL,
  `NomeCad_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DtNasc_Aluno` DATETIME(6) NULL,
  `localNascAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Cidade_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `UF_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Endereco_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Numero_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `naturaliadadeAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `CEP_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `bairro_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_CelularPai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_TelefoneFixoPai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_TelefoneTrabPai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_Profissao_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_RG_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_Email_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_GrauInst_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_LocalTrab_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_UF_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_OrgaoEmissor_Pai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_EnderecoPai` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_TelefoneFixoMae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_TelefoneTrabMae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_CelularMae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_Profissao_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_RG_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_Email_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_GrauInst_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_LocalTrab_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_EnderecoMae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_UF_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Filiacao_OrgaoEmissor_Mae` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `CorRaca_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Sexo_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `PortNecEspec` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `PortNecEspecEspecificar` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_NrRegistro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_Livro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_Folha` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_Data_Registro` DATETIME(6) NULL,
  `DocAluno_Cartorio` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_UF_Cartorio` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_RG` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_DataExpRG` DATETIME(6) NULL,
  `DocAluno_OrgaoEmissorRG` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_UF_RG` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_CPF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_CartaoSUS` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Celular_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitMilitar_Serie` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `email_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitMilitar_SerieReservista` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitMilitar_Categoria` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitEleitoral_TituloNr` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitEleitoral_Zona` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitEleitoral_Secao` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitEleitoral_Municipio` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SitEleitoral_UF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `MudancaNome` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_EscolaProc` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_Cidade` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_UF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_SitCurricular` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `ProcedAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocPendentesSimNao` TINYINT(1) NULL DEFAULT 0,
  `DocPendentes` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `ficheiro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `possuiConvenio` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `qualConvenio` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `alimentos` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Medicamentos_Alerg` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `medicamento` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `obsNotificadasEscola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `responsavel1` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `parentesco1` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `docIdentidade1` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `responsavel2` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `parentesco2` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `docIdentidade2` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `responsavel3` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `parentesco3` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_NIS` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAluno_MatriculaCivil` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Responsavel1_Contato` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_NOME` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_RG` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_CPF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_Profissao` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_EnderecoCompleto` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_Celular` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RespFinanceiro_Email` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TranspTipo` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TransRota` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `LocalFotoAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AreaProtecaoGov` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Data_Registro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tabFrequencia
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tabFrequencia` (
  `idFreqData` INT NOT NULL,
  `COD_Escola` INT NULL DEFAULT 0,
  `dataLancamento` DATETIME(6) NULL,
  PRIMARY KEY (`idFreqData`),
  INDEX `tabFrequencia$idFreqData` (`idFreqData` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tabFrequenciaSub
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tabFrequenciaSub` (
  `idFreq` INT NOT NULL,
  `COD_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `freqID` INT NULL DEFAULT 0,
  `aluno` VARCHAR(150) CHARACTER SET 'utf8mb4' NULL,
  `turma` VARCHAR(15) CHARACTER SET 'utf8mb4' NULL,
  `serie` VARCHAR(10) CHARACTER SET 'utf8mb4' NULL,
  `dataFreq` DATETIME(6) NULL,
  `presente` VARCHAR(3) CHARACTER SET 'utf8mb4' NULL DEFAULT 'SIM',
  PRIMARY KEY (`idFreq`),
  INDEX `tabFrequenciaSub$atendimentoExameID` (`freqID` ASC) VISIBLE,
  INDEX `tabFrequenciaSub$idLancExame` (`idFreq` ASC) VISIBLE,
  CONSTRAINT `tabFrequenciaSub$tabFrequenciatabFrequenciaSub`
    FOREIGN KEY (`freqID`)
    REFERENCES `ACCTOSQL`.`tabFrequencia` (`idFreqData`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_Atividades
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_Atividades` (
  `Código` INT NOT NULL,
  `COD_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `ID_CodAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AnoEscolar` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Disciplina` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Turma` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Lote` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Atividade` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Nome_Aluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Avalacao` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Código`),
  INDEX `tbl_Atividades$ID_CodAluno` (`ID_CodAluno` ASC) VISIBLE,
  UNIQUE INDEX `tbl_Atividades$ID_Hist` (`Nome_Aluno` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.Tbl_Cad_Escola
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`Tbl_Cad_Escola` (
  `CodCadEscola` INT NOT NULL,
  `Nome_Escola` VARCHAR(150) CHARACTER SET 'utf8mb4' NULL,
  `nomeFantazia` VARCHAR(150) CHARACTER SET 'utf8mb4' NULL,
  `Cidade_Escola` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `CEP_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Bairro_Escola` VARCHAR(80) CHARACTER SET 'utf8mb4' NULL,
  `Endereco_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `EntidadeMatenedora` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  `Secretaria` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  `CNPJ_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `CadastroMEC` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `LocalFotoEscola` VARCHAR(70) CHARACTER SET 'utf8mb4' NULL,
  `NomeFotoEscola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Diretor` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Secretario` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `CoordPedag` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `LocalFotoAluno` VARCHAR(200) CHARACTER SET 'utf8mb4' NULL,
  `Config_Servidor` VARCHAR(200) CHARACTER SET 'utf8mb4' NULL,
  `Email_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Pagina_RedeSocialEscola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAut_dir` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DocAut_Sec` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Tipo_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `NivelEscolar` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`CodCadEscola`));

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.Tbl_Cad_Func
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`Tbl_Cad_Func` (
  `ID_Func` INT NOT NULL,
  `COD_Escola` INT NULL DEFAULT 0,
  `MesReferencia` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Dt_Cad` DATETIME(6) NULL,
  `NomeFunc` VARCHAR(100) CHARACTER SET 'utf8mb4' NOT NULL,
  `Alcunha` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Cargo` VARCHAR(80) CHARACTER SET 'utf8mb4' NULL,
  `FuncaoDesempenhada` VARCHAR(80) CHARACTER SET 'utf8mb4' NULL,
  `StatusFunc` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Vinculo` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Carga Horária` INT NULL DEFAULT 0,
  `Matricula` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Faltas` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Licença` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Extras` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `OBS` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_Func`),
  UNIQUE INDEX `Tbl_Cad_Func$Fornecedor` (`NomeFunc` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadAluno
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadAluno` (
  `CodCad_Aluno` INT NOT NULL,
  `NomeCad_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DtNasc_Aluno` DATETIME NULL,
  `localNascAluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Cidade_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `UF_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Endereco_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Numero_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `naturaliadadeAluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `CEP_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `bairro_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_CelularPai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_TelefoneFixoPai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_TelefoneTrabPai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_Profissao_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_RG_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_Email_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_GrauInst_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_LocalTrab_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_UF_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_OrgaoEmissor_Pai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_EnderecoPai` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_TelefoneFixoMae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_TelefoneTrabMae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_CelularMae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_Profissao_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_RG_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_Email_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_GrauInst_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_LocalTrab_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_EnderecoMae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_UF_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Filiacao_OrgaoEmissor_Mae` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `CorRaca_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Sexo_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `PortNecEspec` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `PortNecEspecEspecificar` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_NrRegistro` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_Livro` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_Folha` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_Data_Registro` DATETIME NULL,
  `DocAluno_Cartorio` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_UF_Cartorio` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_RG` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_DataExpRG` DATETIME NULL,
  `DocAluno_OrgaoEmissorRG` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_UF_RG` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_CPF` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_CartaoSUS` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Celular_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitMilitar_Serie` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `email_Aluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitMilitar_SerieReservista` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitMilitar_Categoria` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitEleitoral_TituloNr` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitEleitoral_Zona` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitEleitoral_Secao` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitEleitoral_Municipio` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SitEleitoral_UF` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `MudancaNome` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `AlunosTransf_EscolaProc` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `AlunosTransf_Cidade` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `AlunosTransf_UF` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `AlunosTransf_SitCurricular` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `ProcedAluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocPendentesSimNao` TINYINT(1) NULL DEFAULT 0,
  `DocPendentes` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `ficheiro` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `possuiConvenio` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `qualConvenio` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `alimentos` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Medicamentos_Alerg` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `medicamento` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `obsNotificadasEscola` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `responsavel1` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `parentesco1` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `docIdentidade1` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `responsavel2` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `parentesco2` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `docIdentidade2` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `responsavel3` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `parentesco3` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_NIS` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `DocAluno_MatriculaCivil` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Responsavel1_Contato` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_NOME` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_RG` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_CPF` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_Profissao` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_EnderecoCompleto` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_Celular` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `RespFinanceiro_Email` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Aluno_TranspTipo` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Aluno_TransRota` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `LocalFotoAluno` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `AreaProtecaoGov` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `Data_Registro` VARCHAR(255) CHARACTER SET utf8mb4 NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  PRIMARY KEY (`CodCad_Aluno`),
  UNIQUE INDEX `DocAluno_CPF` (`DocAluno_CPF`),
  UNIQUE INDEX `NomeCad_Aluno` (`NomeCad_Aluno`)
);


-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadAnoLetivo
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadAnoLetivo` (
  `ID_AnoLetivo` INT NOT NULL,
  `Nome_AnoLetivo` VARCHAR(20) CHARACTER SET 'utf8mb4' NULL,
  `Media_AnoLetivo` VARCHAR(4) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_AnoLetivo`),
  INDEX `tbl_CadAnoLetivo$ID_Serie` (`ID_AnoLetivo` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadAnos
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadAnos` (
  `ID_Ano` INT NOT NULL,
  `Nome_Ano` INT NULL DEFAULT 0,
  PRIMARY KEY (`ID_Ano`),
  INDEX `tbl_CadAnos$ID_Serie` (`ID_Ano` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadNivelEscolaridade
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadNivelEscolaridade` (
  `ID_Nivel` INT NOT NULL,
  `Nome_Nivel` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_Nivel`),
  INDEX `tbl_CadNivelEscolaridade$ID_Serie` (`ID_Nivel` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadSerie
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadSerie` (
  `ID_Serie` INT NOT NULL,
  `Nome_Serie` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  `nivelEscolar` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_Serie`),
  INDEX `tbl_CadSerie$ID_Serie` (`ID_Serie` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadTipoResultado
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadTipoResultado` (
  `ID_Resultado` INT NOT NULL,
  `Nome_Resultado` VARCHAR(20) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_Resultado`),
  INDEX `tbl_CadTipoResultado$ID_Serie` (`ID_Resultado` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadTurmas
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadTurmas` (
  `ID_Turmas` INT NOT NULL,
  `COD_Escola` INT NULL DEFAULT 0,
  `Nome_Turmas` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_Turmas`),
  INDEX `tbl_CadTurmas$ID_Serie` (`ID_Turmas` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_CadTurnos
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_CadTurnos` (
  `ID_Turno` INT NOT NULL,
  `Nome_Turno` VARCHAR(20) CHARACTER SET 'utf8mb4' NULL,
  `Horario_Turno` VARCHAR(20) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_Turno`),
  INDEX `tbl_CadTurnos$ID_Serie` (`ID_Turno` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.Tbl_CEP_Brasil
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`Tbl_CEP_Brasil` (
  `CEP` VARCHAR(12) CHARACTER SET 'utf8mb4' NULL,
  `Cidade` VARCHAR(60) CHARACTER SET 'utf8mb4' NULL,
  `Estado` VARCHAR(2) CHARACTER SET 'utf8mb4' NOT NULL,
  `LOC_NOSUB` VARCHAR(50) CHARACTER SET 'utf8mb4' NOT NULL,
  UNIQUE INDEX `Tbl_CEP_Brasil$idx_cep_loc` (`CEP` ASC));

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_EmissaoHistorico
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_EmissaoHistorico` (
  `ID_EmissHist` VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
  `Aluno_EmissHist` INT NULL,
  `AnoLetivo_EmissHist` VARCHAR(4) CHARACTER SET 'utf8mb4' NULL,
  `Serie_EmissHist` VARCHAR(5) CHARACTER SET 'utf8mb4' NULL,
  `Turma_EmissHist` VARCHAR(1) CHARACTER SET 'utf8mb4' NULL,
  `Turno_EmissHist` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `D1` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D2` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D3` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D4` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D5` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D6` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D7` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D8` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D9` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D10` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D11` FLOAT(24,0) NULL,
  `D12` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D13` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D14` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D15` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D16` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D17` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D18` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D19` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D20` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D21` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D22` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D23` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D24` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D25` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  PRIMARY KEY (`ID_EmissHist`),
  INDEX `tbl_EmissaoHistorico$ID_EmissHist` (`ID_EmissHist` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_EndBairros
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_EndBairros` (
  `ID` INT NOT NULL,
  `Nome_Bairro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Zona` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `LocProtegida` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID`),
  INDEX `tbl_EndBairros$ID` (`ID` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_EndRuas
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_EndRuas` (
  `Código` INT NOT NULL,
  `RUAS` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Bairro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Código`));

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.Tbl_FuncDet
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`Tbl_FuncDet` (
  `ID_Fun` INT NOT NULL,
  `Cod_Escola` VARCHAR(0) CHARACTER SET 'utf8mb4' NULL,
  `Dt_Cad` DATETIME(6) NULL,
  `NomeFunc` VARCHAR(100) CHARACTER SET 'utf8mb4' NOT NULL,
  `Cargo` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Frequencia` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Atestados` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  PRIMARY KEY (`ID_Fun`),
  UNIQUE INDEX `Tbl_FuncDet$Fornecedor` (`NomeFunc` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_LvTombo
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_LvTombo` (
  `ID_LvTombo` INT NOT NULL,
  `Cod_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Dt_LvTombo` DATETIME(6) NULL,
  `Aluno_LvTombo` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_LvTombo`));

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_LvTomboDet
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_LvTomboDet` (
  `ID_LvTomboDet` INT NOT NULL,
  `Cod_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `CodDetLvTombo` INT NULL,
  `LvTombo_Ano` INT NULL,
  `LvTombo_Dossie` INT NULL,
  `LvTombo_Pasta` INT NULL,
  `LvTombo_Responsavel` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  INDEX `tbl_LvTomboDet$ID_MatAlunos` (`ID_LvTomboDet` ASC) VISIBLE,
  CONSTRAINT `tbl_LvTomboDet$tbl_LvTombotbl_LvTomboDet`
    FOREIGN KEY (`CodDetLvTombo`)
    REFERENCES `ACCTOSQL`.`tbl_LvTombo` (`ID_LvTombo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_LvTomboDetEJA
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_LvTomboDetEJA` (
  `ID_LvTomboDetEJA` INT NOT NULL,
  `CodDetLvTomboEJA` INT NULL,
  `LvTombo_AnoEJA` INT NULL,
  `LvTombo_DossieEJA` INT NULL,
  `LvTombo_PastaEJA` INT NULL,
  `LvTombo_ResponsavelEJA` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  INDEX `tbl_LvTomboDetEJA$ID_MatAlunos` (`ID_LvTomboDetEJA` ASC) VISIBLE,
  CONSTRAINT `tbl_LvTomboDetEJA$tbl_LvTomboEJAtbl_LvTomboDetEJA`
    FOREIGN KEY (`CodDetLvTomboEJA`)
    REFERENCES `ACCTOSQL`.`tbl_LvTomboEJA` (`ID_LvTomboEJA`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_LvTomboEJA
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_LvTomboEJA` (
  `ID_LvTomboEJA` INT NOT NULL,
  `Dt_LvTomboEJA` DATETIME(6) NULL,
  `Aluno_LvTomboEJA` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`ID_LvTomboEJA`));

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.Tbl_Ocorrencias
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`Tbl_Ocorrencias` (
  `Código` INT NOT NULL,
  `Cod_Escola` INT NULL DEFAULT 0,
  `Cod_Aluno` INT NULL DEFAULT 0,
  `Nome_AlunoAutor` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Cod_Matricula` INT NULL DEFAULT 0,
  `AnoLetivo` INT NULL DEFAULT 0,
  `AnoEscolar` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Turma` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `NomeDeclarante` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Cadastro` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DataOcorrencia` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `RelatoOcorrencia` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AtoIndisciplinar` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `DecAutor` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Resp_Ocorrencia` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Conclusao` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Obs` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Resp_AtendOcorrencia` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Código`));

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_TranspEscolar
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_TranspEscolar` (
  `Código` INT NOT NULL,
  `Rota_Numero` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Moto_Nome` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Moto_Endereco` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Moto_Fone` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Moto_CNH` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Moto_CatCHN` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Moto_RG` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Prop_Nome` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Prop_Endereco` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Prop_Fone` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Prop_CPF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Prop_RG` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Veic_Marca` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Veic_Modelo` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Veic_Capacidade` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Veic_Placa` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Código`),
  INDEX `tbl_TranspEscolar$tbl_TranspEscolarRota_Numero` (`Rota_Numero` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbl_TranspEscolarRotas
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbl_TranspEscolarRotas` (
  `Código` INT NOT NULL,
  `Rota_Numero` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Nome` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Final` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Turno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Inicio` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada1` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada2` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada3` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada4` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada5` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada6` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada7` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada8` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada9` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Rota_Parada10` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`Código`),
  INDEX `tbl_TranspEscolarRotas$tbl_TranspEscolarRotasRota_Numero` (`Rota_Numero` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tblCad_MotivoSaida
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tblCad_MotivoSaida` (
  `idMotivoSaida` INT NOT NULL,
  `Cod_Escola` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `motivoSaida` VARCHAR(80) CHARACTER SET 'utf8mb4' NULL,
  PRIMARY KEY (`idMotivoSaida`),
  INDEX `tblCad_MotivoSaida$idMotivoSaida` (`idMotivoSaida` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.TblDet_Matricula
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`TblDet_Matricula` (
  `ID_MatAlunos` INT NOT NULL,
  `CodEscola` INT NULL DEFAULT 0,
  `CodAlunoDet` INT NOT NULL,
  `Dt_Matricula` DATETIME(6) NULL,
  `AnoLetivo` INT NULL,
  `Serie_AnoEscolar` VARCHAR(3) CHARACTER SET 'utf8mb4' NULL,
  `Turma` VARCHAR(1) CHARACTER SET 'utf8mb4' NULL,
  `Nivel` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `Turno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `horarioAulaID` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `Nr_Aluno` INT NULL,
  `End_Aluno` VARCHAR(120) CHARACTER SET 'utf8mb4' NULL,
  `Numero` VARCHAR(15) CHARACTER SET 'utf8mb4' NULL,
  `DiasLetivos` INT NULL,
  `ProcedAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_EscolaProc` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_Cidade` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_UF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_SitCurricular` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TranspTipo` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TransRota` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TransEmbarque` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `HorasAnual` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Frequencia` FLOAT(24,0) NULL,
  `Resultado` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `dataSaida` DATETIME(6) NULL,
  `motivoSaidaID` INT NULL,
  `Resultado Final` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `LocalFotoAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D1_1B` FLOAT(24,0) NULL,
  `D1_2B` FLOAT(24,0) NULL,
  `D1_3B` FLOAT(24,0) NULL,
  `D1_4B` FLOAT(24,0) NULL,
  `D1_MA` DOUBLE NULL,
  `D1_Rec` FLOAT(24,0) NULL,
  `D1_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D2_1B` FLOAT(24,0) NULL,
  `D2_2B` FLOAT(24,0) NULL,
  `D2_3B` FLOAT(24,0) NULL,
  `D2_4B` FLOAT(24,0) NULL,
  `02_MA` DOUBLE NULL,
  `D2_Rec` FLOAT(24,0) NULL,
  `D2_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D3_1B` FLOAT(24,0) NULL,
  `D3_2B` FLOAT(24,0) NULL,
  `D3_3B` FLOAT(24,0) NULL,
  `D3_4B` FLOAT(24,0) NULL,
  `D3_MA` DOUBLE NULL,
  `D3_Rec` FLOAT(24,0) NULL,
  `D3_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D4_1B` FLOAT(24,0) NULL,
  `D4_2B` FLOAT(24,0) NULL,
  `D4_3B` FLOAT(24,0) NULL,
  `D4_4B` FLOAT(24,0) NULL,
  `D4_MA` DOUBLE NULL,
  `D4_Rec` FLOAT(24,0) NULL,
  `D4_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D5_1B` FLOAT(24,0) NULL,
  `D5_2B` FLOAT(24,0) NULL,
  `D5_3B` FLOAT(24,0) NULL,
  `D5_4B` FLOAT(24,0) NULL,
  `D5_MA` DOUBLE NULL,
  `D5_Rec` FLOAT(24,0) NULL,
  `D5_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D6_1B` FLOAT(24,0) NULL,
  `D6_2B` FLOAT(24,0) NULL,
  `D6_3B` FLOAT(24,0) NULL,
  `D6_4B` FLOAT(24,0) NULL,
  `D6_MA` DOUBLE NULL,
  `D6_Rec` FLOAT(24,0) NULL,
  `D6_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D7_1B` FLOAT(24,0) NULL,
  `D7_2B` FLOAT(24,0) NULL,
  `D7_3B` FLOAT(24,0) NULL,
  `D7_4B` FLOAT(24,0) NULL,
  `D7_MA` DOUBLE NULL,
  `D7_Rec` FLOAT(24,0) NULL,
  `D7_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D8_1B` FLOAT(24,0) NULL,
  `D8_2B` FLOAT(24,0) NULL,
  `D8_3B` FLOAT(24,0) NULL,
  `D8_4B` FLOAT(24,0) NULL,
  `D8_MA` DOUBLE NULL,
  `D8_Rec` FLOAT(24,0) NULL,
  `D8_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D9_1B` FLOAT(24,0) NULL,
  `D9_2B` FLOAT(24,0) NULL,
  `D9_3B` FLOAT(24,0) NULL,
  `D9_4B` FLOAT(24,0) NULL,
  `D9_MA` DOUBLE NULL,
  `D9_Rec` FLOAT(24,0) NULL,
  `D9_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D10_1B` FLOAT(24,0) NULL,
  `D10_2B` FLOAT(24,0) NULL,
  `D10_3B` FLOAT(24,0) NULL,
  `D10_4B` FLOAT(24,0) NULL,
  `D10_MA` DOUBLE NULL,
  `D10_Rec` FLOAT(24,0) NULL,
  `D10_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D11_1B` FLOAT(24,0) NULL,
  `D11_2B` FLOAT(24,0) NULL,
  `D11_3B` FLOAT(24,0) NULL,
  `D11_4B` FLOAT(24,0) NULL,
  `D11_MA` DOUBLE NULL,
  `D11_Rec` FLOAT(24,0) NULL,
  `D11_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D12_1B` FLOAT(24,0) NULL,
  `D12_2B` FLOAT(24,0) NULL,
  `D12_3B` FLOAT(24,0) NULL,
  `D12_4B` FLOAT(24,0) NULL,
  `D12_MA` DOUBLE NULL,
  `D12_Rec` FLOAT(24,0) NULL,
  `D12_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D13_1B` FLOAT(24,0) NULL,
  `D13_2B` FLOAT(24,0) NULL,
  `D13_3B` FLOAT(24,0) NULL,
  `D13_4B` FLOAT(24,0) NULL,
  `D13_MA` DOUBLE NULL,
  `D13_Rec` FLOAT(24,0) NULL,
  `D13_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D14_1B` FLOAT(24,0) NULL,
  `D14_2B` FLOAT(24,0) NULL,
  `D14_3B` FLOAT(24,0) NULL,
  `D14_4B` FLOAT(24,0) NULL,
  `D14_MA` DOUBLE NULL,
  `D14_Rec` FLOAT(24,0) NULL,
  `D14_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D15_1B` FLOAT(24,0) NULL,
  `D15_2B` FLOAT(24,0) NULL,
  `D15_3B` FLOAT(24,0) NULL,
  `D15_4B` FLOAT(24,0) NULL,
  `D15_MA` DOUBLE NULL,
  `D15_Rec` FLOAT(24,0) NULL,
  `D15_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D16_1B` FLOAT(24,0) NULL,
  `D16_2B` FLOAT(24,0) NULL,
  `D16_3B` FLOAT(24,0) NULL,
  `D16_4B` FLOAT(24,0) NULL,
  `D16_MA` DOUBLE NULL,
  `D16_Rec` FLOAT(24,0) NULL,
  `D16_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D1_Falta_1B` FLOAT(24,0) NULL,
  `D1_Falta_2B` FLOAT(24,0) NULL,
  `D1_Falta_3B` FLOAT(24,0) NULL,
  `D1_Falta_4B` FLOAT(24,0) NULL,
  `D1_FaltaTotal` SMALLINT NULL,
  `D2_Falta_1B` FLOAT(24,0) NULL,
  `D2_Falta_2B` FLOAT(24,0) NULL,
  `D2_Falta_3B` FLOAT(24,0) NULL,
  `D2_Falta_4B` FLOAT(24,0) NULL,
  `D2_FaltaTotal` SMALLINT NULL,
  `D3_Falta_1B` FLOAT(24,0) NULL,
  `D3_Falta_2B` FLOAT(24,0) NULL,
  `D3_Falta_3B` FLOAT(24,0) NULL,
  `D3_Falta_4B` FLOAT(24,0) NULL,
  `D3_FaltaTotal` SMALLINT NULL,
  `D4_Falta_1B` FLOAT(24,0) NULL,
  `D4_Falta_2B` FLOAT(24,0) NULL,
  `D4_Falta_3B` FLOAT(24,0) NULL,
  `D4_Falta_4B` FLOAT(24,0) NULL,
  `D4_FaltaTotal` SMALLINT NULL,
  `D5_Falta_1B` FLOAT(24,0) NULL,
  `D5_Falta_2B` FLOAT(24,0) NULL,
  `D5_Falta_3B` FLOAT(24,0) NULL,
  `D5_Falta_4B` FLOAT(24,0) NULL,
  `D5_FaltaTotal` SMALLINT NULL,
  `D6_Falta_1B` FLOAT(24,0) NULL,
  `D6_Falta_2B` FLOAT(24,0) NULL,
  `D6_Falta_3B` FLOAT(24,0) NULL,
  `D6_Falta_4B` FLOAT(24,0) NULL,
  `D6_FaltaTotal` SMALLINT NULL,
  `D7_Falta_1B` FLOAT(24,0) NULL,
  `D7_Falta_2B` FLOAT(24,0) NULL,
  `D7_Falta_3B` FLOAT(24,0) NULL,
  `D7_Falta_4B` FLOAT(24,0) NULL,
  `D7_FaltaTotal` SMALLINT NULL,
  `D8_Falta_1B` FLOAT(24,0) NULL,
  `D8_Falta_2B` FLOAT(24,0) NULL,
  `D8_Falta_3B` FLOAT(24,0) NULL,
  `D8_Falta_4B` FLOAT(24,0) NULL,
  `D8_FaltaTotal` SMALLINT NULL,
  `D9_Falta_1B` FLOAT(24,0) NULL,
  `D9_Falta_2B` FLOAT(24,0) NULL,
  `D9_Falta_3B` FLOAT(24,0) NULL,
  `D9_Falta_4B` FLOAT(24,0) NULL,
  `D9_FaltaTotal` SMALLINT NULL,
  `D10_Falta_1B` FLOAT(24,0) NULL,
  `D10_Falta_2B` FLOAT(24,0) NULL,
  `D10_Falta_3B` FLOAT(24,0) NULL,
  `D10_Falta_4B` FLOAT(24,0) NULL,
  `D10_FaltaTotal` SMALLINT NULL,
  `D11_Falta_1B` FLOAT(24,0) NULL,
  `D11_Falta_2B` FLOAT(24,0) NULL,
  `D11_Falta_3B` FLOAT(24,0) NULL,
  `D11_Falta_4B` FLOAT(24,0) NULL,
  `D11_FaltaTotal` SMALLINT NULL,
  `D12_Falta_1B` FLOAT(24,0) NULL,
  `D12_Falta_2B` FLOAT(24,0) NULL,
  `D12_Falta_3B` FLOAT(24,0) NULL,
  `D12_Falta_4B` FLOAT(24,0) NULL,
  `D12_FaltaTotal` SMALLINT NULL,
  `D13_Falta_1B` FLOAT(24,0) NULL,
  `D13_Falta_2B` FLOAT(24,0) NULL,
  `D13_Falta_3B` FLOAT(24,0) NULL,
  `D13_Falta_4B` FLOAT(24,0) NULL,
  `D13_FaltaTotal` SMALLINT NULL,
  `D14_Falta_1B` FLOAT(24,0) NULL,
  `D14_Falta_2B` FLOAT(24,0) NULL,
  `D14_Falta_3B` FLOAT(24,0) NULL,
  `D14_Falta_4B` FLOAT(24,0) NULL,
  `D14_FaltaTotal` SMALLINT NULL,
  `D15_Falta_1B` FLOAT(24,0) NULL,
  `D15_Falta_2B` FLOAT(24,0) NULL,
  `D15_Falta_3B` FLOAT(24,0) NULL,
  `D15_Falta_4B` FLOAT(24,0) NULL,
  `D15_FaltaTotal` SMALLINT NULL,
  `D16_Falta_1B` FLOAT(24,0) NULL,
  `D16_Falta_2B` FLOAT(24,0) NULL,
  `D16_Falta_3B` FLOAT(24,0) NULL,
  `D16_Falta_4B` FLOAT(24,0) NULL,
  `D16_FaltaTotal` SMALLINT NULL,
  `Dt_Alteracao` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  INDEX `TblDet_Matricula$horarioAulaID` (`horarioAulaID` ASC) VISIBLE,
  UNIQUE INDEX `TblDet_Matricula$ID_MatAlunos` (`ID_MatAlunos` ASC) VISIBLE,
  INDEX `TblDet_Matricula$motivoSaidaID` (`motivoSaidaID` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.TblDet_Matricula1
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`TblDet_Matricula1` (
  `ID_MatAlunos` INT NOT NULL,
  `CodEscola` INT NULL DEFAULT 0,
  `CodAlunoDet` INT NOT NULL,
  `Dt_Matricula` DATETIME(6) NULL,
  `AnoLetivo` INT NULL,
  `Serie_AnoEscolar` VARCHAR(3) CHARACTER SET 'utf8mb4' NULL,
  `Turma` VARCHAR(1) CHARACTER SET 'utf8mb4' NULL,
  `Nivel` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `Turno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `horarioAulaID` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `Nr_Aluno` INT NULL,
  `End_Aluno` VARCHAR(120) CHARACTER SET 'utf8mb4' NULL,
  `Numero` VARCHAR(15) CHARACTER SET 'utf8mb4' NULL,
  `DiasLetivos` INT NULL,
  `ProcedAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_EscolaProc` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_Cidade` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_UF` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `AlunosTransf_SitCurricular` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TranspTipo` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TransRota` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Aluno_TransEmbarque` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `HorasAnual` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Frequencia` FLOAT(24,0) NULL,
  `Resultado` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `dataSaida` DATETIME(6) NULL,
  `motivoSaidaID` INT NULL,
  `Resultado Final` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `LocalFotoAluno` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `D1_1B` FLOAT(24,0) NULL,
  `D1_2B` FLOAT(24,0) NULL,
  `D1_3B` FLOAT(24,0) NULL,
  `D1_4B` FLOAT(24,0) NULL,
  `D1_MA` DOUBLE NULL,
  `D1_Rec` FLOAT(24,0) NULL,
  `D1_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D2_1B` FLOAT(24,0) NULL,
  `D2_2B` FLOAT(24,0) NULL,
  `D2_3B` FLOAT(24,0) NULL,
  `D2_4B` FLOAT(24,0) NULL,
  `02_MA` DOUBLE NULL,
  `D2_Rec` FLOAT(24,0) NULL,
  `D2_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D3_1B` FLOAT(24,0) NULL,
  `D3_2B` FLOAT(24,0) NULL,
  `D3_3B` FLOAT(24,0) NULL,
  `D3_4B` FLOAT(24,0) NULL,
  `D3_MA` DOUBLE NULL,
  `D3_Rec` FLOAT(24,0) NULL,
  `D3_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D4_1B` FLOAT(24,0) NULL,
  `D4_2B` FLOAT(24,0) NULL,
  `D4_3B` FLOAT(24,0) NULL,
  `D4_4B` FLOAT(24,0) NULL,
  `D4_MA` DOUBLE NULL,
  `D4_Rec` FLOAT(24,0) NULL,
  `D4_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D5_1B` FLOAT(24,0) NULL,
  `D5_2B` FLOAT(24,0) NULL,
  `D5_3B` FLOAT(24,0) NULL,
  `D5_4B` FLOAT(24,0) NULL,
  `D5_MA` DOUBLE NULL,
  `D5_Rec` FLOAT(24,0) NULL,
  `D5_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D6_1B` FLOAT(24,0) NULL,
  `D6_2B` FLOAT(24,0) NULL,
  `D6_3B` FLOAT(24,0) NULL,
  `D6_4B` FLOAT(24,0) NULL,
  `D6_MA` DOUBLE NULL,
  `D6_Rec` FLOAT(24,0) NULL,
  `D6_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D7_1B` FLOAT(24,0) NULL,
  `D7_2B` FLOAT(24,0) NULL,
  `D7_3B` FLOAT(24,0) NULL,
  `D7_4B` FLOAT(24,0) NULL,
  `D7_MA` DOUBLE NULL,
  `D7_Rec` FLOAT(24,0) NULL,
  `D7_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D8_1B` FLOAT(24,0) NULL,
  `D8_2B` FLOAT(24,0) NULL,
  `D8_3B` FLOAT(24,0) NULL,
  `D8_4B` FLOAT(24,0) NULL,
  `D8_MA` DOUBLE NULL,
  `D8_Rec` FLOAT(24,0) NULL,
  `D8_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D9_1B` FLOAT(24,0) NULL,
  `D9_2B` FLOAT(24,0) NULL,
  `D9_3B` FLOAT(24,0) NULL,
  `D9_4B` FLOAT(24,0) NULL,
  `D9_MA` DOUBLE NULL,
  `D9_Rec` FLOAT(24,0) NULL,
  `D9_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D10_1B` FLOAT(24,0) NULL,
  `D10_2B` FLOAT(24,0) NULL,
  `D10_3B` FLOAT(24,0) NULL,
  `D10_4B` FLOAT(24,0) NULL,
  `D10_MA` DOUBLE NULL,
  `D10_Rec` FLOAT(24,0) NULL,
  `D10_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D11_1B` FLOAT(24,0) NULL,
  `D11_2B` FLOAT(24,0) NULL,
  `D11_3B` FLOAT(24,0) NULL,
  `D11_4B` FLOAT(24,0) NULL,
  `D11_MA` DOUBLE NULL,
  `D11_Rec` FLOAT(24,0) NULL,
  `D11_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D12_1B` FLOAT(24,0) NULL,
  `D12_2B` FLOAT(24,0) NULL,
  `D12_3B` FLOAT(24,0) NULL,
  `D12_4B` FLOAT(24,0) NULL,
  `D12_MA` DOUBLE NULL,
  `D12_Rec` FLOAT(24,0) NULL,
  `D12_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D13_1B` FLOAT(24,0) NULL,
  `D13_2B` FLOAT(24,0) NULL,
  `D13_3B` FLOAT(24,0) NULL,
  `D13_4B` FLOAT(24,0) NULL,
  `D13_MA` DOUBLE NULL,
  `D13_Rec` FLOAT(24,0) NULL,
  `D13_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D14_1B` FLOAT(24,0) NULL,
  `D14_2B` FLOAT(24,0) NULL,
  `D14_3B` FLOAT(24,0) NULL,
  `D14_4B` FLOAT(24,0) NULL,
  `D14_MA` DOUBLE NULL,
  `D14_Rec` FLOAT(24,0) NULL,
  `D14_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D15_1B` FLOAT(24,0) NULL,
  `D15_2B` FLOAT(24,0) NULL,
  `D15_3B` FLOAT(24,0) NULL,
  `D15_4B` FLOAT(24,0) NULL,
  `D15_MA` DOUBLE NULL,
  `D15_Rec` FLOAT(24,0) NULL,
  `D15_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D16_1B` FLOAT(24,0) NULL,
  `D16_2B` FLOAT(24,0) NULL,
  `D16_3B` FLOAT(24,0) NULL,
  `D16_4B` FLOAT(24,0) NULL,
  `D16_MA` DOUBLE NULL,
  `D16_Rec` FLOAT(24,0) NULL,
  `D16_Resultado` VARCHAR(30) CHARACTER SET 'utf8mb4' NULL,
  `D1_Falta_1B` FLOAT(24,0) NULL,
  `D1_Falta_2B` FLOAT(24,0) NULL,
  `D1_Falta_3B` FLOAT(24,0) NULL,
  `D1_Falta_4B` FLOAT(24,0) NULL,
  `D1_FaltaTotal` SMALLINT NULL,
  `D2_Falta_1B` FLOAT(24,0) NULL,
  `D2_Falta_2B` FLOAT(24,0) NULL,
  `D2_Falta_3B` FLOAT(24,0) NULL,
  `D2_Falta_4B` FLOAT(24,0) NULL,
  `D2_FaltaTotal` SMALLINT NULL,
  `D3_Falta_1B` FLOAT(24,0) NULL,
  `D3_Falta_2B` FLOAT(24,0) NULL,
  `D3_Falta_3B` FLOAT(24,0) NULL,
  `D3_Falta_4B` FLOAT(24,0) NULL,
  `D3_FaltaTotal` SMALLINT NULL,
  `D4_Falta_1B` FLOAT(24,0) NULL,
  `D4_Falta_2B` FLOAT(24,0) NULL,
  `D4_Falta_3B` FLOAT(24,0) NULL,
  `D4_Falta_4B` FLOAT(24,0) NULL,
  `D4_FaltaTotal` SMALLINT NULL,
  `D5_Falta_1B` FLOAT(24,0) NULL,
  `D5_Falta_2B` FLOAT(24,0) NULL,
  `D5_Falta_3B` FLOAT(24,0) NULL,
  `D5_Falta_4B` FLOAT(24,0) NULL,
  `D5_FaltaTotal` SMALLINT NULL,
  `D6_Falta_1B` FLOAT(24,0) NULL,
  `D6_Falta_2B` FLOAT(24,0) NULL,
  `D6_Falta_3B` FLOAT(24,0) NULL,
  `D6_Falta_4B` FLOAT(24,0) NULL,
  `D6_FaltaTotal` SMALLINT NULL,
  `D7_Falta_1B` FLOAT(24,0) NULL,
  `D7_Falta_2B` FLOAT(24,0) NULL,
  `D7_Falta_3B` FLOAT(24,0) NULL,
  `D7_Falta_4B` FLOAT(24,0) NULL,
  `D7_FaltaTotal` SMALLINT NULL,
  `D8_Falta_1B` FLOAT(24,0) NULL,
  `D8_Falta_2B` FLOAT(24,0) NULL,
  `D8_Falta_3B` FLOAT(24,0) NULL,
  `D8_Falta_4B` FLOAT(24,0) NULL,
  `D8_FaltaTotal` SMALLINT NULL,
  `D9_Falta_1B` FLOAT(24,0) NULL,
  `D9_Falta_2B` FLOAT(24,0) NULL,
  `D9_Falta_3B` FLOAT(24,0) NULL,
  `D9_Falta_4B` FLOAT(24,0) NULL,
  `D9_FaltaTotal` SMALLINT NULL,
  `D10_Falta_1B` FLOAT(24,0) NULL,
  `D10_Falta_2B` FLOAT(24,0) NULL,
  `D10_Falta_3B` FLOAT(24,0) NULL,
  `D10_Falta_4B` FLOAT(24,0) NULL,
  `D10_FaltaTotal` SMALLINT NULL,
  `D11_Falta_1B` FLOAT(24,0) NULL,
  `D11_Falta_2B` FLOAT(24,0) NULL,
  `D11_Falta_3B` FLOAT(24,0) NULL,
  `D11_Falta_4B` FLOAT(24,0) NULL,
  `D11_FaltaTotal` SMALLINT NULL,
  `D12_Falta_1B` FLOAT(24,0) NULL,
  `D12_Falta_2B` FLOAT(24,0) NULL,
  `D12_Falta_3B` FLOAT(24,0) NULL,
  `D12_Falta_4B` FLOAT(24,0) NULL,
  `D12_FaltaTotal` SMALLINT NULL,
  `D13_Falta_1B` FLOAT(24,0) NULL,
  `D13_Falta_2B` FLOAT(24,0) NULL,
  `D13_Falta_3B` FLOAT(24,0) NULL,
  `D13_Falta_4B` FLOAT(24,0) NULL,
  `D13_FaltaTotal` SMALLINT NULL,
  `D14_Falta_1B` FLOAT(24,0) NULL,
  `D14_Falta_2B` FLOAT(24,0) NULL,
  `D14_Falta_3B` FLOAT(24,0) NULL,
  `D14_Falta_4B` FLOAT(24,0) NULL,
  `D14_FaltaTotal` SMALLINT NULL,
  `D15_Falta_1B` FLOAT(24,0) NULL,
  `D15_Falta_2B` FLOAT(24,0) NULL,
  `D15_Falta_3B` FLOAT(24,0) NULL,
  `D15_Falta_4B` FLOAT(24,0) NULL,
  `D15_FaltaTotal` SMALLINT NULL,
  `D16_Falta_1B` FLOAT(24,0) NULL,
  `D16_Falta_2B` FLOAT(24,0) NULL,
  `D16_Falta_3B` FLOAT(24,0) NULL,
  `D16_Falta_4B` FLOAT(24,0) NULL,
  `D16_FaltaTotal` SMALLINT NULL,
  `Dt_Alteracao` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  PRIMARY KEY (`ID_MatAlunos`),
  INDEX `TblDet_Matricula1$horarioAulaID` (`horarioAulaID` ASC) VISIBLE,
  INDEX `TblDet_Matricula1$ID_MatAlunos` (`ID_MatAlunos` ASC) VISIBLE,
  INDEX `TblDet_Matricula1$motivoSaidaID` (`motivoSaidaID` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tbldias
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tbldias` (
  `Numdia` INT NULL DEFAULT 0,
  `DataAtual` DATETIME(6) NULL);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tblFunções
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tblFunções` (
  `IdFuncao` INT NOT NULL,
  `Funcao` VARCHAR(100) CHARACTER SET 'utf8mb4' NOT NULL,
  `Objeto` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `Status` TINYINT(1) NULL DEFAULT 0,
  `StatusSuspenso` TINYINT(1) NULL DEFAULT 0,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  PRIMARY KEY (`IdFuncao`),
  INDEX `tblFunções$IdFuncao` (`IdFuncao` ASC) VISIBLE,
  INDEX `tblFunções$idxFunFormulario` (`Objeto` ASC) VISIBLE,
  INDEX `tblFunções$idxFunNome` (`Funcao` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tblRibbons
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tblRibbons` (
  `Id` INT NOT NULL,
  `RibbonName` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL,
  `RibbonXml` VARCHAR(0) CHARACTER SET 'utf8mb4' NULL,
  `Versao` INT NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tblSeries
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tblSeries` (
  `ID` INT NOT NULL,
  `Nserie` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  INDEX `tblSeries$ID` (`ID` ASC) VISIBLE);

-- ----------------------------------------------------------------------------
-- Table ACCTOSQL.tblUsuários
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `ACCTOSQL`.`tblUsuários` (
  `IdUsuario` INT NOT NULL,
  `ID_Usuario` INT NULL DEFAULT 0,
  `Usuario` VARCHAR(16) CHARACTER SET 'utf8mb4' NOT NULL,
  `Alcunha` VARCHAR(255) CHARACTER SET 'utf8mb4' NULL,
  `Senha` VARCHAR(20) CHARACTER SET 'utf8mb4' NOT NULL,
  `Bloqueado` TINYINT(1) NULL DEFAULT 0,
  `UserSetor` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `strDataHora` VARCHAR(50) CHARACTER SET 'utf8mb4' NULL,
  `SSMA_TimeStamp` BINARY(8) NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  INDEX `tblUsuários$ID_Usuario` (`ID_Usuario` ASC) VISIBLE,
  INDEX `tblUsuários$IdUsuario` (`IdUsuario` ASC) VISIBLE);
SET FOREIGN_KEY_CHECKS = 1;
