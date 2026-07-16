import os
import urllib.request
from PIL import Image

images_to_download = {
    # Overview
    "public/images/about/overview-hero.jpg": ("photo-1616401784845-180882ba9ba8", "portrait"),
    "public/images/about/overview-story.jpg": ("photo-1581092921461-eab62e97a780", "portrait"),
    "public/images/about/overview-industries.jpg": ("photo-1563986768609-322da13575f3", "portrait"),
    "public/images/about/overview-closing.jpg": ("photo-1504917595217-d4dc5ebe6122", "landscape"),
    
    # Vision
    "public/images/about/vision-hero.jpg": ("photo-1451187580459-43490279c0fa", "landscape"),
    "public/images/about/vision-vision.jpg": ("photo-1509391366360-2e959784a276", "portrait"),
    "public/images/about/vision-mission.jpg": ("photo-1537462715879-360eeb61a0bc", "portrait"),
    "public/images/about/vision-purpose.jpg": ("photo-1522071820081-009f0129c71c", "portrait"),
    
    # Leadership
    "public/images/about/leadership-hero.jpg": ("photo-1497366216548-37526070297c", "landscape"),
    "public/images/about/leadership-philosophy.jpg": ("photo-1517245386807-bb43f82c33c4", "portrait"),
    "public/images/about/leadership-principles.jpg": ("photo-1497215728101-856f4ea42174", "landscape"),
    
    # Why DHGsoft
    "public/images/about/why-hero.jpg": ("photo-1581091226825-a6a2a5aee158", "landscape"),
    "public/images/about/why-strengths.jpg": ("photo-1551288049-bebda4e38f71", "landscape"),
    "public/images/about/why-matters.jpg": ("photo-1485827404703-89b55fcc595e", "portrait"),
    
    # Partners
    "public/images/about/partners-hero.jpg": ("photo-1521791136368-1a851900d14b", "landscape"),
    "public/images/about/partners-overview.jpg": ("photo-1542744173-8e08562744ad", "portrait"),
    "public/images/about/partners-model.jpg": ("photo-1507679799987-c73779587ccf", "portrait"),
    
    # Technology Partners
    "public/images/about/technology-hero.jpg": ("photo-1558494949-ef010cbdcc31", "landscape"),
    "public/images/about/technology-overview.jpg": ("photo-1518770660439-4636190af475", "portrait"),
    "public/images/about/technology-philosophy.jpg": ("photo-1551434678-e076c223a692", "portrait"),
    
    # Sustainability
    "public/images/about/sustainability-hero.jpg": ("photo-1466611653911-95081537e5b7", "landscape"),
    "public/images/about/sustainability-overview.jpg": ("photo-1541888946425-d81bb19240f5", "portrait"),
    "public/images/about/sustainability-esg.jpg": ("photo-1530587191325-3db32d826c18", "portrait"),
    
    # Ethics
    "public/images/about/ethics-hero.jpg": ("photo-1563986768609-322da13575f3", "landscape"),
    "public/images/about/ethics-overview.jpg": ("photo-1450133064473-71024230f91b", "portrait"),
    "public/images/about/ethics-principles.jpg": ("photo-1550751827-4bd374c3f58b", "landscape"),
    
    # Recognition
    "public/images/about/recognition-hero.jpg": ("photo-1531482615713-2afd69097998", "landscape"),
    "public/images/about/recognition-accomplishments.jpg": ("photo-1573164713714-d95e436ab8d6", "portrait"),
    "public/images/about/recognition-milestones.jpg": ("photo-1517245386807-bb43f82c33c4", "portrait"),
    
    # Locations
    "public/images/about/locations-hero.jpg": ("photo-1529400971008-f566de0e6dfc", "landscape"),
    "public/images/about/locations-delivery.jpg": ("photo-1521737711867-e3b97375f902", "portrait"),
    "public/images/about/locations-offices.jpg": ("photo-1486406146926-c627a92ad1ab", "landscape")
}

def crop_and_resize(img, aspect_type, target_path):
    w, h = img.size
    
    if aspect_type == "portrait":
        # 4:5 aspect ratio
        target_w, target_h = 1000, 1250
    elif aspect_type == "landscape":
        # 16:9 aspect ratio
        target_w, target_h = 1600, 900
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

def main():
    print("Starting download process for 32 image assets...")
    for idx, (path, (photo_id, aspect)) in enumerate(images_to_download.items(), 1):
        if os.path.exists(path):
            print(f"[{idx}/32] File already exists, skipping: {path}")
            continue
            
        url = f"https://images.unsplash.com/{photo_id}?q=80&w=1600"
        temp_name = f"temp_{photo_id}.jpg"
        try:
            print(f"[{idx}/32] Downloading {photo_id}...")
            urllib.request.urlretrieve(url, temp_name)
            with Image.open(temp_name) as img:
                crop_and_resize(img, aspect, path)
            if os.path.exists(temp_name):
                os.remove(temp_name)
        except Exception as e:
            print(f"Error processing {photo_id}: {e}")
            if os.path.exists(temp_name):
                try: os.remove(temp_name)
                except: pass

if __name__ == "__main__":
    main()
