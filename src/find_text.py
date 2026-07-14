import os

src_dir = r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src"
target = "Digital transformation is no longer about"

found = []
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith((".tsx", ".ts", ".js", ".jsx", ".html")):
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                if target in content:
                    found.append(path)
            except Exception as e:
                pass

print("Found in:")
for p in found:
    print(p)
