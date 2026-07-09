#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$ROOT_DIR/public"
PROFILE_IMAGE_PATH="$PUBLIC_DIR/profile.jpg"

LINKEDIN_PROFILE_URL="${LINKEDIN_PROFILE_URL:-https://www.linkedin.com/in/zach-wiebesiek/}"
FALLBACK_IMAGE_URL="${FALLBACK_IMAGE_URL:-https://github.com/wiebesiek.png}"

mkdir -p "$PUBLIC_DIR"

echo "Attempting to pull profile image from LinkedIn page metadata..."
LINKEDIN_OG_IMAGE=""

if LINKEDIN_HTML="$(curl -fsSL -A "Mozilla/5.0" "$LINKEDIN_PROFILE_URL" 2>/dev/null)"; then
	LINKEDIN_OG_IMAGE="$(printf '%s' "$LINKEDIN_HTML" | sed -n 's/.*<meta property="og:image" content="\([^"]*\)".*/\1/p' | head -n 1)"
fi

if [[ -n "$LINKEDIN_OG_IMAGE" ]]; then
	echo "Downloading LinkedIn profile image to $PROFILE_IMAGE_PATH"
	curl -fsSL -A "Mozilla/5.0" "$LINKEDIN_OG_IMAGE" -o "$PROFILE_IMAGE_PATH"
else
	echo "LinkedIn image could not be resolved. Falling back to $FALLBACK_IMAGE_URL"
	curl -fsSL "$FALLBACK_IMAGE_URL" -o "$PROFILE_IMAGE_PATH"
fi

echo "Profile image refreshed at $PROFILE_IMAGE_PATH"
