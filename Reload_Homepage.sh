#!/usr/bin/env bash

# Gets the latest GitHub profile image and updates the homepage with optimized avatar assets
set -euo pipefail

HOMEPAGE_REPO_ROOT="${HOMEPAGE_REPO_ROOT:?HOMEPAGE_REPO_ROOT is not set}"
HOMEPAGE_WEB_ROOT="${HOMEPAGE_WEB_ROOT:?HOMEPAGE_WEB_ROOT is not set}"

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

echo "Updating repository at $HOMEPAGE_REPO_ROOT"
cd "$HOMEPAGE_REPO_ROOT"
git pull --ff-only

mkdir -p "$PUBLIC_DIR" "$PROFILE_IMAGE_DIR"

echo "Downloading GitHub profile image to $PROFILE_SOURCE_PATH"
curl -fsSL "$GITHUB_IMAGE_URL" -o "$PROFILE_SOURCE_PATH"

if command -v magick >/dev/null 2>&1; then
	IMG_CMD="magick"
elif command -v convert >/dev/null 2>&1; then
	IMG_CMD="convert"
else
	echo "Warning: ImageMagick is not installed. Only source profile image was downloaded."
	IMG_CMD=""
fi

if [[ -n "$IMG_CMD" ]]; then
	echo "Generating optimized avatar assets"

	"$IMG_CMD" "$PROFILE_SOURCE_PATH" \
		-auto-orient -strip -thumbnail 140x140^ -gravity center -extent 140x140 \
		"$PROFILE_PNG_140_PATH"
	"$IMG_CMD" "$PROFILE_SOURCE_PATH" \
		-auto-orient -strip -thumbnail 280x280^ -gravity center -extent 280x280 \
		"$PROFILE_PNG_280_PATH"

	if ! "$IMG_CMD" "$PROFILE_SOURCE_PATH" \
		-auto-orient -strip -thumbnail 140x140^ -gravity center -extent 140x140 -quality 80 \
		"$PROFILE_WEBP_140_PATH"; then
		echo "Warning: WebP generation failed for 140px output; continuing with PNG."
	fi

	if ! "$IMG_CMD" "$PROFILE_SOURCE_PATH" \
		-auto-orient -strip -thumbnail 280x280^ -gravity center -extent 280x280 -quality 80 \
		"$PROFILE_WEBP_280_PATH"; then
		echo "Warning: WebP generation failed for 280px output; continuing with PNG."
	fi

	if ! "$IMG_CMD" "$PROFILE_SOURCE_PATH" \
		-auto-orient -strip -thumbnail 140x140^ -gravity center -extent 140x140 -quality 50 \
		"$PROFILE_AVIF_140_PATH"; then
		echo "Warning: AVIF generation failed for 140px output; continuing with WebP/PNG."
	fi

	if ! "$IMG_CMD" "$PROFILE_SOURCE_PATH" \
		-auto-orient -strip -thumbnail 280x280^ -gravity center -extent 280x280 -quality 50 \
		"$PROFILE_AVIF_280_PATH"; then
		echo "Warning: AVIF generation failed for 280px output; continuing with WebP/PNG."
	fi
else
	cp "$PROFILE_SOURCE_PATH" "$PROFILE_PNG_140_PATH"
	cp "$PROFILE_SOURCE_PATH" "$PROFILE_PNG_280_PATH"
fi

echo "Profile image refreshed at $PROFILE_SOURCE_PATH"

echo "Deploying site to $HOMEPAGE_WEB_ROOT"
cp -r . "$HOMEPAGE_WEB_ROOT"

echo "Homepage deploy complete"
