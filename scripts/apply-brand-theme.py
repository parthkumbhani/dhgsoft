import os
from PIL import Image, ImageEnhance, ImageOps

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

def apply_dhg_theme(img_path, save_path):
    img = Image.open(img_path).convert('RGB')
    
    # 1. Convert to grayscale for clean tone mapping
    gray = ImageOps.grayscale(img)
    gray = ImageEnhance.Contrast(gray).enhance(1.25)
    gray = ImageEnhance.Sharpness(gray).enhance(1.2)
    
    # 2. Map dark shadows to Deep Slate (#0A0C12), midtones to Deep Burgundy (#8C123B), highlights to Warm Amber (#F59E0B) / Clean White
    # Color 1 (Shadows): #0B0E17
    # Color 2 (Midtones): #8C123B
    # Color 3 (Highlights): #FFF5EB
    
    tinted = ImageOps.colorize(gray, black="#0A0C14", white="#FFF8F0", mid="#8C123B")
    
    # 3. Blend original color details at 35% opacity to retain original realistic textures (wooden desk, skin, screen detail)
    blended = Image.blend(img, tinted, alpha=0.45)
    
    # 4. Final contrast & vibrance touch-up
    final_img = ImageEnhance.Contrast(blended).enhance(1.1)
    final_img.save(save_path, quality=95)
    print(f"Successfully processed: {save_path}")

for target_name, src_name in images_map.items():
    src_path = os.path.join(artifact_dir, src_name)
    save_path = os.path.join(target_dir, target_name)
    if os.path.exists(src_path):
        apply_dhg_theme(src_path, save_path)
    else:
        print(f"Source file missing: {src_path}")
