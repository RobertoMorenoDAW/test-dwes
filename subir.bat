@echo off

echo =====================
echo AÑADIENDO CAMBIOS
echo =====================
git add .

echo.
echo =====================
echo CREANDO COMMIT
echo =====================
git commit -m "%date% %time%"

echo.
echo =====================
echo SUBIENDO A GITHUB
echo =====================

set RETRY=0

:PUSH
git push

IF %ERRORLEVEL% EQU 0 GOTO SUCCESS

set /A RETRY=%RETRY%+1

echo.
echo Error de conexion. Reintentando... Intento %RETRY%
timeout /t 5 >nul

IF %RETRY% LSS 5 GOTO PUSH

echo.
echo ==================================
echo NO SE PUDO SUBIR A GITHUB
echo ==================================
pause
exit

:SUCCESS
echo.
echo ==================================
echo SUBIDA COMPLETADA CORRECTAMENTE
echo ==================================

pause