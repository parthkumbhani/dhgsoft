import os
import re

directories = [
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\app",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components"
]

patterns = [
    (r"<Section[^>]*>[\s\S]*?<Container", "Nested Container inside Section"),
    (r"px-\[?\d+px\]?|pl-\[?\d+px\]?|pr-\[?\d+px\]?", "Custom pixel padding"),
    (r"pl-\[[^\]]+\]|pr-\[[^\]]+\]", "Custom viewport/arbitrary padding on left/right"),
    (r"max-w-\[[^\]]+\]", "Custom arbitrary max-width"),
]

for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if not file.endswith((".tsx", ".ts")):
                continue
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                # Try fallback encoding
                try:
                    with open(filepath, 'r', encoding='latin1') as f:
                        content = f.read()
                except Exception as e2:
                    continue

            for pattern, desc in patterns:
                matches = re.finditer(pattern, content)
                for match in matches:
                    start_idx = max(0, match.start() - 40)
                    end_idx = min(len(content), match.end() + 40)
                    snippet = content[start_idx:end_idx].replace('\n', ' ')
                    # Print relative path
                    rel_path = os.path.relpath(filepath, r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend")
                    print(f"[{desc}] {rel_path}: ... {snippet} ...")
