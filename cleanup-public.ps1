# Script para limpar a pasta public mantendo apenas arquivos usados pelo projeto

$publicPath = "c:\Users\weblu\Downloads\Nova_LP_mentorflow\public"

# Lista de arquivos que devem ser mantidos
$keepFiles = @(
    "bmw-x7.png",
    "luciano.jpg",
    "favicon.svg",
    "favicon-32x32.png",
    "favicon-16x16.png",
    "apple-touch-icon.png",
    "favicon.ico",
    "og-image.jpg",
    "logo.png",
    "bank-balance-mockup.html",
    "index.css",
    "robots.txt",
    "sitemap.xml"
)

# Obter todos os arquivos na pasta public (exceto subpastas)
$allFiles = Get-ChildItem -Path $publicPath -File

$deletedCount = 0
$deletedSize = 0

Write-Host "Iniciando limpeza da pasta public..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $allFiles) {
    if ($keepFiles -notcontains $file.Name) {
        $fileSize = $file.Length
        Write-Host "Removendo: $($file.Name) ($([math]::Round($fileSize/1MB, 2)) MB)" -ForegroundColor Red
        Remove-Item $file.FullName -Force
        $deletedCount++
        $deletedSize += $fileSize
    } else {
        Write-Host "Mantendo: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Limpeza concluída!" -ForegroundColor Green
Write-Host "Arquivos removidos: $deletedCount" -ForegroundColor Yellow
Write-Host "Espaço liberado: $([math]::Round($deletedSize/1GB, 2)) GB" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
