import os
import re

directories = [
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\app",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components"
]

patterns = [
    r"lg:px-\[120px\]",
    r"px-6 md:px-16 lg:px-\[120px\]",
    r"lg:pl-\[[^\]]+\]",
    r"lg:pr-\[[^\]]+\]",
    r"pl-\[[^\]]+\]",
    r"pr-\[[^\]]+\]",
    r"px-16",
    r"md:px-16",
    r"lg:px-16"
]

combined_pattern = "|".join(patterns)
regex = re.compile(combined_pattern)

for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if not file.endswith((".tsx", ".ts", ".js", ".css")):
                continue
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                try:
                    with open(filepath, 'r', encoding='latin1') as f:
                        content = f.read()
                except Exception as e2:
                    continue

            rel_path = os.path.relpath(filepath, r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend")
            lines = content.split('\n')
            for line_num, line in enumerate(lines, 1):
                if regex.search(line):
                    print(f"{rel_path}:{line_num}: {line.strip()}")
