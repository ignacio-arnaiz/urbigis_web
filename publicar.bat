@echo off
cd /d "C:\Users\Usuario\Documents\urbigis_web"

echo.
echo === Publicando cambios en urbiGIS Web ===
echo.

git add .

set /p msg="Descripcion del cambio (Enter para fecha automatica): "
if "%msg%"=="" set msg=Actualizacion %date% %time%

git commit -m "%msg%"

echo.
echo Sincronizando con GitHub...
git pull origin main --rebase

if %errorlevel% neq 0 (
  echo.
  echo ERROR al sincronizar. Abortando rebase...
  git rebase --abort
  echo Intenta de nuevo o resuelve los conflictos manualmente.
  pause
  exit /b 1
)

echo.
echo Subiendo cambios...
git push origin main

if %errorlevel% neq 0 (
  echo.
  echo ERROR al subir. Intentando con force...
  git push origin main --force
)

echo.
echo === Publicado correctamente ===
echo El sitio se actualizara en 1-2 minutos en:
echo https://ignacio-arnaiz.github.io/urbigis_web
echo.
pause
