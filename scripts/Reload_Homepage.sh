#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

HOMEPAGE_REPO_ROOT="${HOMEPAGE_REPO_ROOT:?HOMEPAGE_REPO_ROOT is not set}"
HOMEPAGE_WEB_ROOT="${HOMEPAGE_WEB_ROOT:?HOMEPAGE_WEB_ROOT is not set}"

echo "Updating repository at $HOMEPAGE_REPO_ROOT"
cd "$HOMEPAGE_REPO_ROOT"
git pull --ff-only

"$SCRIPT_DIR/Refresh_Profile_Image.sh"

echo "Deploying site to $HOMEPAGE_WEB_ROOT"
cp -r . "$HOMEPAGE_WEB_ROOT"

echo "Homepage deploy complete"
