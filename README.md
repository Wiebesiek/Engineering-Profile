# Engineering Profile

Simple personal profile website using vanilla tooling for minimal bloat and strong performance. Fun, naive inlining tools created to minimize load time and achieve optimal performance.

## Installation
Install to the web root of your preferred web server. Define path variables in the reload script and run `Reload_Homepage`.

## Required Tooling
- `git`
- `curl`
- `bash`
- `ImageMagick` with the `convert` command is required for generating the local avatar assets in PNG/WebP/AVIF

On Ubuntu/Debian:
```bash
sudo apt update
sudo apt install git curl imagemagick
```

To verify your ImageMagick install provides `convert`:
```bash
convert -version
```

ImageMagick must provide the `convert` command on your PATH for the refresh script to work.

## Scripts
- `scripts/Reload_Homepage.sh` updates the repo, refreshes the profile image assets, and deploys the site.
- `scripts/Refresh_Profile_Image.sh` downloads the GitHub avatar and generates optimized local image variants.

## Features
- No bloat. Simple design creates incredible speed.
- Profile picture can be refreshed from GitHub by running the update script.
- Simple updates: push the repo to GitHub, then run `scripts/Reload_Homepage.sh` to refresh the page and profile picture.
- 100s across the board on Google Lighthouse analytics for performance.

## Lighthouse Results

The site currently achieves perfect Lighthouse scores across all core categories.

![Perfect Lighthouse scores (Performance, Accessibility, Best Practices, SEO)](./public/lighthouse-perfect-score.png)
