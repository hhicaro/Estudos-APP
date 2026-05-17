@echo off
REM ====================================================
REM   Push automatico para GitHub - Monitorest
REM   Da dois cliques neste arquivo para subir tudo.
REM ====================================================

cd /d "%~dp0"

echo.
echo === Status atual do repositorio ===
git status --short

echo.
echo === Adicionando arquivos modificados/novos ===
git add .

echo.
echo === Commit ===
set /p MSG="Mensagem do commit (Enter para padrao): "
if "%MSG%"=="" set MSG=Atualizacao Monitorest (Claude)
git commit -m "%MSG%"

echo.
echo === Push para o GitHub ===
git push

echo.
echo === Concluido. Verifique no github.com ===
pause
