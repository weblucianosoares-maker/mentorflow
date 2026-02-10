# Script para criar um repositório limpo sem histórico de arquivos grandes

$repoPath = "c:\Users\weblu\Downloads\Nova_LP_mentorflow"
$backupPath = "c:\Users\weblu\Downloads\Nova_LP_mentorflow_backup"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Limpeza Completa do Repositório Git" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Fazer backup da pasta .git
Write-Host "1. Fazendo backup do repositório atual..." -ForegroundColor Yellow
if (Test-Path $backupPath) {
    Remove-Item $backupPath -Recurse -Force
}
Copy-Item "$repoPath\.git" -Destination "$backupPath\.git" -Recurse
Write-Host "   Backup criado em: $backupPath" -ForegroundColor Green
Write-Host ""

# 2. Remover .git atual
Write-Host "2. Removendo repositório Git atual..." -ForegroundColor Yellow
Remove-Item "$repoPath\.git" -Recurse -Force
Write-Host "   Repositório removido" -ForegroundColor Green
Write-Host ""

# 3. Inicializar novo repositório
Write-Host "3. Inicializando novo repositório limpo..." -ForegroundColor Yellow
Set-Location $repoPath
git init
Write-Host "   Novo repositório inicializado" -ForegroundColor Green
Write-Host ""

# 4. Adicionar todos os arquivos atuais
Write-Host "4. Adicionando arquivos atuais..." -ForegroundColor Yellow
git add .
Write-Host "   Arquivos adicionados" -ForegroundColor Green
Write-Host ""

# 5. Criar commit inicial
Write-Host "5. Criando commit inicial..." -ForegroundColor Yellow
git commit -m "chore: repositório limpo sem arquivos grandes do histórico"
Write-Host "   Commit criado" -ForegroundColor Green
Write-Host ""

# 6. Adicionar remote
Write-Host "6. Configurando remote do GitHub..." -ForegroundColor Yellow
git remote add origin https://github.com/weblucianosoares-maker/mentorflow.git
git branch -M main
Write-Host "   Remote configurado" -ForegroundColor Green
Write-Host ""

# 7. Mostrar tamanho do novo repositório
Write-Host "7. Verificando tamanho do novo repositório..." -ForegroundColor Yellow
git count-objects -vH
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Repositório limpo criado com sucesso!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "PRÓXIMO PASSO:" -ForegroundColor Yellow
Write-Host "Execute: git push -f origin main" -ForegroundColor Cyan
Write-Host "(Isso irá sobrescrever o repositório remoto com a versão limpa)" -ForegroundColor Red
Write-Host ""
