#!/usr/bin/env bash
set -euo pipefail

HOMEPAGE_REPO_ROOT="${HOMEPAGE_REPO_ROOT:?HOMEPAGE_REPO_ROOT is not set}"

PUBLIC_DIR="$HOMEPAGE_REPO_ROOT/public"
PROFILE_IMAGE_DIR="$PUBLIC_DIR/assets/images"
PROFILE_SOURCE_PATH="$PROFILE_IMAGE_DIR/profile-source.png"
PROFILE_PNG_140_PATH="$PROFILE_IMAGE_DIR/profile-140.png"
PROFILE_PNG_280_PATH="$PROFILE_IMAGE_DIR/profile-280.png"
PROFILE_WEBP_140_PATH="$PROFILE_IMAGE_DIR/profile-140.webp"
PROFILE_WEBP_280_PATH="$PROFILE_IMAGE_DIR/profile-280.webp"
PROFILE_AVIF_140_PATH="$PROFILE_IMAGE_DIR/profile-140.avif"
PROFILE_AVIF_280_PATH="$PROFILE_IMAGE_DIR/profile-280.avif"

GITHUB_IMAGE_URL="https://github.com/wiebesiek.png"

mkdir -p "$PUBLIC_DIR" "$PROFILE_IMAGE_DIR"

echo "Downloading GitHub profile image to $PROFILE_SOURCE_PATH"
curl -fsSL "$GITHUB_IMAGE_URL" -o "$PROFILE_SOURCE_PATH"

if ! command -v convert >/dev/null 2>&1; then
	echo "Error: ImageMagick is required but 'convert' was not found in PATH."
	exit 1
fi

echo "Generating optimized avatar assets"

convert "$PROFILE_SOURCE_PATH" \
	-auto-orient -strip -thumbnail 140x140^ -gravity center -extent 140x140 \
	"$PROFILE_PNG_140_PATH"
convert "$PROFILE_SOURCE_PATH" \
	-auto-orient -strip -thumbnail 280x280^ -gravity center -extent 280x280 \
	"$PROFILE_PNG_280_PATH"

if ! convert "$PROFILE_SOURCE_PATH" \
	-auto-orient -strip -thumbnail 140x140^ -gravity center -extent 140x140 -quality 80 \
	"$PROFILE_WEBP_140_PATH"; then
	echo "Warning: WebP generation failed for 140px output."
fi

if ! convert "$PROFILE_SOURCE_PATH" \
	-auto-orient -strip -thumbnail 280x280^ -gravity center -extent 280x280 -quality 80 \
	"$PROFILE_WEBP_280_PATH"; then
	echo "Warning: WebP generation failed for 280px output."
fi

if ! convert "$PROFILE_SOURCE_PATH" \
	-auto-orient -strip -thumbnail 140x140^ -gravity center -extent 140x140 -quality 50 \
	"$PROFILE_AVIF_140_PATH"; then
	echo "Warning: AVIF generation failed for 140px output."
fi

if ! convert "$PROFILE_SOURCE_PATH" \
	-auto-orient -strip -thumbnail 280x280^ -gravity center -extent 280x280 -quality 50 \
	"$PROFILE_AVIF_280_PATH"; then
	echo "Warning: AVIF generation failed for 280px output."
fi

echo "Profile image refreshed at $PROFILE_SOURCE_PATH"