import os
import re
import urllib.request

def verify_external_images():
    src_dir = "src"
    
    # Regex to match http/https image URLs in code (ending with .png, .jpg, .jpeg, etc. or generated rocket.new images)
    url_regex = re.compile(r'https?://[^\s"\']+\.(?:png|jpg|jpeg|gif|svg|webp)[^\s"\']*|https?://img\.rocket\.new/[^\s"\']+')
    
    referenced_urls = set()
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                        matches = url_regex.findall(content)
                        for m in matches:
                            referenced_urls.add((m, f"{root}/{file}"))
                except Exception as e:
                    print(f"Error reading {path}: {e}")
                    
    print(f"Found {len(referenced_urls)} external image URLs in the code.")
    
    broken_urls = []
    ok_count = 0
    
    for url, ref_file in sorted(referenced_urls):
        try:
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
            )
            # Fetch headers
            with urllib.request.urlopen(req, timeout=5) as response:
                status = response.getcode()
                if status == 200:
                    ok_count += 1
                else:
                    broken_urls.append((url, ref_file, f"Status: {status}"))
        except Exception as e:
            broken_urls.append((url, ref_file, str(e)))
            
    print(f"Verified {ok_count} external images load successfully (HTTP 200).")
    if broken_urls:
        print("\n[WARNING] Found broken external image references:")
        for url, ref, err in broken_urls:
            print(f"- URL: '{url}'")
            print(f"  Used in: {ref}")
            print(f"  Error: {err}\n")
    else:
        print("\n[SUCCESS] All external image references load successfully!")

if __name__ == "__main__":
    verify_external_images()
