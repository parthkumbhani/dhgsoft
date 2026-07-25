import os
from PIL import Image, ImageChops, ImageEnhance, ImageOps

artifact_dir = r"C:\Users\Parth Patel\.gemini\antigravity\brain\296efc28-c1d0-405b-af45-4b958306e352"
target_dir = r"C:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\public\images\home"

os.makedirs(target_dir, exist_ok=True)

images_map = {
    "service-strategy-themed.png": "media__1784976593386.png",
    "service-design-themed.png": "media__1784976609686.png",
    "service-build-themed.png": "media__1784976628270.png",
    "service-deploy-themed.png": "media__1784976646447.png",
    "service-operate-themed.png": "media__1784976691836.png",
    "service-enable-themed.png": "media__1784976928102.png",
    "service-outcome-themed.png": "media__1784976929907.png",
}

def trim_white_borders(img_path, save_path):
    img = Image.open(img_path).convert('RGB')
    
    # Create background image of pure white to compare against for border cropping
    bg = Image.new(img.mode, img.size, (255, 255, 255))
    diff = ImageChops.difference(img, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    
    # Get bounding box of non-white photograph area
    bbox = diff.getbbox()
    
    if bbox:
        # Crop out the white margins
        cropped = img.crop(bbox)
    else:
        cropped = img
        
    # Extra safety trim: trim 2% from borders if any faint line remains
    w, h = cropped.size
    crop_margin_w = int(w * 0.015)
    crop_margin_h = int(h * 0.015)
    cropped = cropped.crop((crop_margin_w, crop_margin_h, w - crop_margin_w, h - crop_margin_h))
    
    # Upscale clean cropped photo to 2400px wide
    cw, ch = cropped.size
    target_w = 2400
    target_h = int(ch * (2400 / cw))
    hd_img = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Enhance clarity and apply rich DHGsoft theme blending
    gray = ImageOps.grayscale(hd_img)
    gray = ImageEnhance.Contrast(gray).enhance(1.25)
    tinted = ImageOps.colorize(gray, black="#0A0C14", white="#FFF9F5", mid="#8C123B")
    
    blended = Image.blend(hd_img, tinted, alpha=0.42)
    final_img = ImageEnhance.Contrast(blended).enhance(1.12)
    final_img = ImageEnhance.Color(final_img).enhance(1.08)
    
    final_img.save(save_path, format="PNG", quality=98)
    print(f"Trimmed borderless image saved: {save_path} ({target_w}x{target_h})")

for target_name, src_name in images_map.items():
    src_path = os.path.join(artifact_dir, src_name)
    save_path = os.path.join(target_dir, target_name)
    if os.path.exists(src_path):
        trim_white_borders(src_path, save_path)
    else:
        print(f"Source file missing: {src_path}")
