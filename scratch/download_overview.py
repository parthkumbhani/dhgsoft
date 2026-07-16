import os
import urllib.request
from PIL import Image

def crop_and_resize(img, aspect_type, target_path):
    w, h = img.size
    
    if aspect_type == "portrait":
        # 4:5 aspect ratio
        target_w, target_h = 1600, 2000
    elif aspect_type == "landscape":
        # 16:9 aspect ratio
        target_w, target_h = 2400, 1350
    else:
        target_w, target_h = 800, 600
        
    target_aspect = target_w / target_h
    current_aspect = w / h
    
    if current_aspect > target_aspect:
        # crop sides
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        right = left + new_w
        top = 0
        bottom = h
    else:
        # crop top/bottom
        new_h = int(w / target_aspect)
        top = (h - new_h) // 2
        bottom = top + new_h
        left = 0
        right = w
        
    cropped_img = img.crop((left, top, right, bottom))
    resized_img = cropped_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    resized_img.convert("RGB").save(target_path, "JPEG", quality=85)
    print(f"Saved: {target_path} ({target_w}x{target_h})")

def download_overview_images():
    images = {
        "public/images/about/overview-story.jpg": ("photo-1581092921461-eab62e97a780", "portrait"),
        "public/images/about/overview-industries.jpg": ("photo-1563986768609-322da13575f3", "portrait"),
        "public/images/about/overview-closing.jpg": ("photo-1504917595217-d4dc5ebe6122", "landscape")
    }
    
    for path, (photo_id, aspect) in images.items():
        url = f"https://images.unsplash.com/{photo_id}?q=80"
        temp_name = f"temp_{photo_id}.jpg"
        try:
            print(f"Downloading {photo_id} to {path}...")
            urllib.request.urlretrieve(url, temp_name)
            with Image.open(temp_name) as img:
                crop_and_resize(img, aspect, path)
            if os.path.exists(temp_name):
                os.remove(temp_name)
        except Exception as e:
            print(f"Error downloading {photo_id}: {e}")
            if os.path.exists(temp_name):
                try: os.remove(temp_name)
                except: pass

if __name__ == "__main__":
    download_overview_images()
