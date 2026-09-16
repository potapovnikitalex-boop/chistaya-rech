from PIL import Image
import sys

src = "src/assets/logo-source.jpg"
dst = "src/assets/logo.png"

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()

# White-ish background -> transparent, with soft edge antialiasing
# based on distance from white (handles JPEG compression halo around the circle).
THRESH_FULL = 235  # fully transparent above this (per-channel, near-pure white)
THRESH_EDGE = 190  # start of the alpha ramp

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        m = min(r, g, b)
        if m >= THRESH_FULL:
            px[x, y] = (r, g, b, 0)
        elif m >= THRESH_EDGE:
            # linear ramp between edge and full thresholds
            alpha = int(255 * (THRESH_FULL - m) / (THRESH_FULL - THRESH_EDGE))
            px[x, y] = (r, g, b, alpha)
        # else: keep fully opaque

MAX_SIZE = 640
if max(w, h) > MAX_SIZE:
    scale = MAX_SIZE / max(w, h)
    img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

img.save(dst, optimize=True)
print(f"Saved {dst} ({img.size[0]}x{img.size[1]})")
