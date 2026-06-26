@echo off
cd /d "C:\Users\Usuario\Documents\urbigis_web"

echo.
echo === Publicando cambios en urbiGIS Web ===
echo.

git add .

set /p msg="Descripcion del cambio (Enter para fecha automatica): "
if "%msg%"=="" set msg=Actualizacion %date% %time%

git commit -m "%msg%"
git push

echo.
echo === Publicado correctamente ===
echo El sitio se actualizara en 1-2 minutos en:
echo https://ignacio-arnaiz.github.io/urbigis_web
echo.
pause
