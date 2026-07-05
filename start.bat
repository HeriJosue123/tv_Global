@echo off
title IPTV GLOBAL HD - Servidor
echo.
echo ===============================================================================
echo   INICIANDO IPTV GLOBAL HD ENGINE...
echo ===============================================================================
echo   Verificando e instalando dependencias (express, cors)...
echo.
cd /d "%~dp0"
call npm install express cors --silent 2>nul
echo   Dependencias listas. Lanzando nucleo del servidor...
echo.
node server.js
echo.
echo El servidor se detuvo. Presiona cualquier tecla para cerrar.
pause
