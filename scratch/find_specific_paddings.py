import os

directories = [
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\app",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components"
]

search_strings = ["120px", "px-16", "md:px-16", "lg:px-16", "lg:px-[120px]", "lg:pl-[8vw]"]

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

            for s in search_strings:
                if s in content:
                    rel_path = os.path.relpath(filepath, r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend")
                    # find the line number
                    lines = content.split('\n')
                    for line_num, line in enumerate(lines, 1):
                        if s in line:
                            print(f"{rel_path}:{line_num}: found '{s}' -> {line.strip()}")
