import os
import re

def verify_all_site_images():
    src_dir = "src"
    public_dir = "public"
    
    # Matches src="/images/..." or src={"/images/..."} or src={some_imported_image}
    # Let's extract all static paths starting with slash, e.g. /images/... or /about_hero.png
    path_regex = re.compile(r'src=["\'](/[^"\']+)["\']')
    
    # We will search in all .tsx and .ts files
    referenced_images = set()
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                        matches = path_regex.findall(content)
                        for m in matches:
                            # Clean query parameters if any (e.g. ?q=80)
                            clean_m = m.split("?")[0]
                            referenced_images.add((clean_m, f"{root}/{file}"))
                except Exception as e:
                    print(f"Error reading {path}: {e}")
                    
    print(f"Found {len(referenced_images)} static image paths in the code.")
    
    broken_images = []
    ok_count = 0
    for img_path, ref_file in sorted(referenced_images):
        # Physical path on disk is public + img_path
        disk_path = os.path.join(public_dir, img_path.lstrip("/"))
        # normalize path separators
        disk_path = os.path.abspath(disk_path)
        
        # Check if the file exists
        if not os.path.exists(disk_path):
            # Also check if it's a dynamic path or external path (though we matched leading slash)
            # Skip if it is a folder (sometimes /images/about is referenced, though rare)
            if os.path.isdir(disk_path):
                continue
            broken_images.append((img_path, ref_file, disk_path))
        else:
            ok_count += 1
            
    print(f"Verified {ok_count} files exist in public/ directory.")
    if broken_images:
        print("\n[WARNING] Found broken image references:")
        for img, ref, disk in broken_images:
            print(f"- Reference: '{img}'")
            print(f"  Used in: {ref}")
            print(f"  Expected Disk Path: {disk}\n")
    else:
        print("\n[SUCCESS] No broken static image references found in the codebase!")

if __name__ == "__main__":
    verify_all_site_images()
