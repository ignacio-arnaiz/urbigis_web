#!/usr/bin/env python3
"""
Convierte los archivos HTML de blog/ y tutorial/ a Markdown (.md)
para que funcionen correctamente con Sveltia CMS / Decap CMS.

Uso: ejecutar desde la carpeta raíz de urbigis_web
  python convertir_a_markdown.py

Requisitos: pip install markdownify
"""

import os
import re
import sys

try:
    from markdownify import markdownify as md
except ImportError:
    print("Instalando markdownify...")
    os.system(f"{sys.executable} -m pip install markdownify")
    from markdownify import markdownify as md

def html_to_md(html_content):
    """Convierte HTML a Markdown limpio."""
    # Quitar el comentario frontmatter si existe
    html_content = re.sub(r'^<!--.*?-->\s*', '', html_content, flags=re.DOTALL)
    # Convertir
    result = md(html_content, heading_style='ATX', bullets='-', newline_style='backslash')
    # Limpiar líneas en blanco excesivas
    result = re.sub(r'\n{3,}', '\n\n', result)
    return result.strip()

def procesar_blog():
    carpeta = 'blog'
    if not os.path.exists(carpeta):
        print(f"Carpeta {carpeta}/ no encontrada")
        return 0

    convertidos = 0
    for fname in sorted(os.listdir(carpeta)):
        if not fname.endswith('.html'):
            continue

        fpath = os.path.join(carpeta, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extraer frontmatter del comentario
        fm_match = re.match(r'<!--\s*(.*?)\s*-->', content, re.DOTALL)
        frontmatter = ''
        if fm_match:
            fm_raw = fm_match.group(1)
            # Parsear campos title, date, slug
            title = re.search(r'title:\s*(.+)', fm_raw)
            date  = re.search(r'date:\s*(.+)', fm_raw)
            slug  = re.search(r'slug:\s*(.+)', fm_raw)
            title = title.group(1).strip() if title else fname.replace('.html','')
            date  = date.group(1).strip()  if date  else '2020-01-01'
            # Limpiar fecha si tiene hora
            date  = date[:10]
            frontmatter = f'---\ntitle: "{title}"\ndate: {date}\n---\n\n'

        body = html_to_md(content)

        # Guardar como .md con el mismo nombre
        md_path = os.path.join(carpeta, fname.replace('.html', '.md'))
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(frontmatter + body)

        # Eliminar el .html original
        os.remove(fpath)
        convertidos += 1

    print(f"Blog: {convertidos} archivos convertidos")
    return convertidos

def procesar_tutorial():
    carpeta = 'tutorial'
    if not os.path.exists(carpeta):
        print(f"Carpeta {carpeta}/ no encontrada")
        return 0

    convertidos = 0
    for fname in sorted(os.listdir(carpeta)):
        if not fname.endswith('.html'):
            continue

        fpath = os.path.join(carpeta, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extraer título del comentario frontmatter
        fm_match = re.match(r'<!--\s*(.*?)\s*-->', content, re.DOTALL)
        title = fname.replace('.html', '').replace('-', ' ').title()
        if fm_match:
            fm_raw = fm_match.group(1)
            t = re.search(r'title:\s*(.+)', fm_raw)
            if t:
                title = t.group(1).strip()

        frontmatter = f'---\ntitle: "{title}"\n---\n\n'
        body = html_to_md(content)

        md_path = os.path.join(carpeta, fname.replace('.html', '.md'))
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(frontmatter + body)

        os.remove(fpath)
        convertidos += 1

    print(f"Tutorial: {convertidos} archivos convertidos")
    return convertidos

if __name__ == '__main__':
    print("=== Convirtiendo HTML → Markdown ===\n")
    n1 = procesar_blog()
    n2 = procesar_tutorial()
    total = n1 + n2
    print(f"\n✓ Total: {total} archivos convertidos a .md")
    print("\nAhora actualiza admin/config.yml:")
    print("  - Cambia extension: 'html' → 'md'")
    print("  - Elimina la línea format: yaml-frontmatter")
    print("  - Elimina frontmatter_delimiter")
    print("\nEl sitio web sigue funcionando igual — el fetch carga .md en lugar de .html")
