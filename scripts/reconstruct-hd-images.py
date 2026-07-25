import os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

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

def reconstruct_hd_image(img_path, save_path):
    img = Image.open(img_path).convert('RGB')
    
    # 1. High-Quality Super-Resolution Upscaling (LANCZOS Resampling to 4K target width 2400px)
    w, h = img.size
    target_w = 2400
    target_h = int(h * (2400 / w))
    img_hd = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # 2. Advanced Multi-Pass Unsharp Masking & Edge Enhancement
    img_sharpened = img_hd.filter(ImageFilter.UnsharpMask(radius=2, percent=160, threshold=3))
    img_detail = ImageEnhance.Sharpness(img_sharpened).enhance(1.4)
    
    # 3. Tone Mapping with DHGsoft Burgundy Toning
    gray = ImageOps.grayscale(img_detail)
    gray = ImageEnhance.Contrast(gray).enhance(1.3)
    
    # Colorize midtones to rich burgundy #8C123B
    tinted = ImageOps.colorize(gray, black="#0A0C14", white="#FFF9F5", mid="#8C123B")
    
    # 4. Blend 50% original colors with 50% rich burgundy theme for vivid realism & brand harmony
    blended = Image.blend(img_detail, tinted, alpha=0.48)
    
    # 5. Final Vibrance, Saturation & Contrast Adjustments
    final_img = ImageEnhance.Contrast(blended).enhance(1.15)
    final_img = ImageEnhance.Color(final_img).enhance(1.1)
    
    final_img.save(save_path, format="PNG", quality=98, compress_level=1)
    print(f"Reconstructed HD image: {save_path} ({target_w}x{target_h})")

for target_name, src_name in images_map.items():
    src_path = os.path.join(artifact_dir, src_name)
    save_path = os.path.join(target_dir, target_name)
    if os.path.exists(src_path):
        reconstruct_hd_image(src_path, save_path)
    else:
        print(f"Source file missing: {src_path}")
