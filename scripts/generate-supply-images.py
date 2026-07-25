import os
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

target_dir = r"C:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\public\images\home"
os.makedirs(target_dir, exist_ok=True)

categories = [
    ("supply-automation.png", "#0F172A", "#8C123B"),
    ("supply-networking.png", "#0B132B", "#C2185B"),
    ("supply-computing.png", "#0A0E17", "#8C123B"),
    ("supply-drives.png", "#110D18", "#A01440"),
    ("supply-instrumentation.png", "#0F172A", "#8C123B"),
    ("supply-iot.png", "#0A1128", "#C2185B"),
    ("supply-power.png", "#160C18", "#8C123B"),
    ("supply-software.png", "#080F1E", "#A01440"),
    ("supply-procurement.png", "#0F172A", "#8C123B"),
]

for name, base_hex, accent_hex in categories:
    save_path = os.path.join(target_dir, name)
    img = Image.new("RGB", (2400, 1600), base_hex)
    draw = ImageDraw.Draw(img)
    
    # Draw geometric circuit & industrial technology grid pattern
    for i in range(0, 2400, 80):
        draw.line([(i, 0), (i, 1600)], fill="#1E293B", width=1)
    for j in range(0, 1600, 80):
        draw.line([(0, j), (2400, j)], fill="#1E293B", width=1)
        
    # Glowing diagonal technology lines
    draw.line([(0, 0), (2400, 1600)], fill=accent_hex, width=3)
    draw.line([(0, 800), (1600, 0)], fill=accent_hex, width=2)
    draw.line([(800, 1600), (2400, 800)], fill=accent_hex, width=2)
    
    # Central technological glowing core circle
    draw.ellipse([900, 500, 1500, 1100], outline=accent_hex, width=6)
    draw.ellipse([1050, 650, 1350, 950], fill=accent_hex)
    
    img = img.filter(ImageFilter.GaussianBlur(radius=3))
    img.save(save_path, format="PNG", quality=95)
    print(f"Generated industrial supply asset: {save_path}")
