#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import shutil
from pathlib import Path


STYLE_LINK = '<link rel="stylesheet" href="./style.css" />'
APP_SCRIPT_TAG = '<script src="/src/app.js" defer></script>'


def minify_css(css: str) -> str:
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = re.sub(r"\s+", " ", css)
    css = re.sub(r"\s*([{}:;,>])\s*", r"\1", css)
    css = css.replace(";}", "}")
    return css.strip()


def build_artifact(repo_root: Path, deploy_root: Path) -> None:
    public_dir = repo_root / "public"
    source_index = public_dir / "index.html"
    source_style = public_dir / "style.css"
    source_app = repo_root / "src" / "app.js"

    shutil.copytree(repo_root, deploy_root, dirs_exist_ok=True)

    target_index = deploy_root / "public" / "index.html"
    target_style = deploy_root / "public" / "style.css"
    target_app = deploy_root / "src" / "app.js"

    html = source_index.read_text(encoding="utf-8")
    css = minify_css(source_style.read_text(encoding="utf-8"))
    js = source_app.read_text(encoding="utf-8").strip()

    if STYLE_LINK not in html:
        raise RuntimeError(f"Expected stylesheet link was not found in {source_index}")

    if APP_SCRIPT_TAG not in html:
        raise RuntimeError(f"Expected app script tag was not found in {source_index}")

    html = html.replace(STYLE_LINK, f"<style>{css}</style>")
    html = html.replace(APP_SCRIPT_TAG, f"<script>{js}</script>")
    target_index.write_text(html, encoding="utf-8")

    if target_style.exists():
        target_style.unlink()

    if target_app.exists():
        target_app.unlink()


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a deploy artifact for the homepage.")
    parser.add_argument("repo_root", type=Path)
    parser.add_argument("deploy_root", type=Path)
    args = parser.parse_args()

    build_artifact(args.repo_root.resolve(), args.deploy_root.resolve())


if __name__ == "__main__":
    main()