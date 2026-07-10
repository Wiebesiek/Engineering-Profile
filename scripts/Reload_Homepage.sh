#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

HOMEPAGE_REPO_ROOT="${HOMEPAGE_REPO_ROOT:?HOMEPAGE_REPO_ROOT is not set}"
HOMEPAGE_WEB_ROOT="${HOMEPAGE_WEB_ROOT:?HOMEPAGE_WEB_ROOT is not set}"
DEPLOY_ARTIFACT_DIR="$(mktemp -d)"

cleanup() {
	rm -rf "$DEPLOY_ARTIFACT_DIR"
}

trap cleanup EXIT

echo "Updating repository at $HOMEPAGE_REPO_ROOT"
cd "$HOMEPAGE_REPO_ROOT"
git pull --ff-only

"$SCRIPT_DIR/Refresh_Profile_Image.sh"

echo "Building deploy artifact in $DEPLOY_ARTIFACT_DIR"
python3 "$SCRIPT_DIR/Build_Deploy_Artifact.py" "$HOMEPAGE_REPO_ROOT" "$DEPLOY_ARTIFACT_DIR"

echo "Deploying site to $HOMEPAGE_WEB_ROOT"
cp -r "$DEPLOY_ARTIFACT_DIR"/. "$HOMEPAGE_WEB_ROOT"

echo "Homepage deploy complete"
