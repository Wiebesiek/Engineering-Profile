#!/usr/bin/env bash
set -euo pipefail

HOMEPAGE_REPO_ROOT="${HOMEPAGE_REPO_ROOT:?HOMEPAGE_REPO_ROOT is not set}"
HOMEPAGE_WEB_ROOT="${HOMEPAGE_WEB_ROOT:?HOMEPAGE_WEB_ROOT is not set}"

PUBLIC_DIR="$HOMEPAGE_REPO_ROOT/public"
PROFILE_IMAGE_PATH="$PUBLIC_DIR/profile.jpg"

GITHUB_IMAGE_URL="https://github.com/wiebesiek.png"

echo "Updating repository at $HOMEPAGE_REPO_ROOT"
cd "$HOMEPAGE_REPO_ROOT"
git pull --ff-only

mkdir -p "$PUBLIC_DIR"

echo "Downloading GitHub profile image to $PROFILE_IMAGE_PATH"
curl -fsSL "$GITHUB_IMAGE_URL" -o "$PROFILE_IMAGE_PATH"

echo "Profile image refreshed at $PROFILE_IMAGE_PATH"

echo "Deploying site to $HOMEPAGE_WEB_ROOT"
cp -r . "$HOMEPAGE_WEB_ROOT"

echo "Homepage deploy complete"
