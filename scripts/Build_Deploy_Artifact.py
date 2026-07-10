#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import shutil
from pathlib import Path


STYLE_LINK = '<link rel="stylesheet" href="./style.css" />'


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

    if deploy_root.exists():
        shutil.rmtree(deploy_root)

    shutil.copytree(repo_root, deploy_root)

    target_index = deploy_root / "public" / "index.html"
    target_style = deploy_root / "public" / "style.css"

    html = source_index.read_text(encoding="utf-8")
    css = minify_css(source_style.read_text(encoding="utf-8"))

    if STYLE_LINK not in html:
        raise RuntimeError(f"Expected stylesheet link was not found in {source_index}")

    html = html.replace(STYLE_LINK, f"<style>{css}</style>")
    target_index.write_text(html, encoding="utf-8")

    if target_style.exists():
        target_style.unlink()


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a deploy artifact for the homepage.")
    parser.add_argument("repo_root", type=Path)
    parser.add_argument("deploy_root", type=Path)
    args = parser.parse_args()

    build_artifact(args.repo_root.resolve(), args.deploy_root.resolve())


if __name__ == "__main__":
    main()