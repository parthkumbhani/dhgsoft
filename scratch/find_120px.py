import os

directories = [
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\app",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components"
]

search_string = "lg:px-[120px]"

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

            if search_string in content:
                rel_path = os.path.relpath(filepath, r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend")
                lines = content.split('\n')
                for line_num, line in enumerate(lines, 1):
                    if search_string in line:
                        print(f"{rel_path}:{line_num}: {line.strip()}")
