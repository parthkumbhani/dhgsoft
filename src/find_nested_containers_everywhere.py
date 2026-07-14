import os
import re

def scan_files(dir_path):
    issues = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith(".tsx"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                
                # If the file uses Section component
                if "<Section" in content:
                    lines = content.splitlines()
                    in_section = False
                    for i, line in enumerate(lines, 1):
                        if "<Section" in line:
                            in_section = True
                        elif "</Section>" in line:
                            in_section = False
                        
                        if in_section:
                            # Search for nested container classes
                            # but exclude the line with <Section itself
                            if "<Section" not in line:
                                match_classes = ["px-gutter", "max-w-site", "max-w-site-wide", "mx-auto w-full max-w-"]
                                if any(cls in line for cls in match_classes) and "className=" in line:
                                    # Filter out some cases that might be fine, e.g. text alignment or small max-w-[200px]
                                    # but if it contains px-gutter or max-w-site/max-w-site-wide, it's definitely a container.
                                    issues.append({
                                        "file": filepath,
                                        "line_num": i,
                                        "line_content": line.strip()
                                    })
    return issues

if __name__ == "__main__":
    src_dir = r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src"
    results = scan_files(src_dir)
    print(f"Found {len(results)} potential nested container issues:")
    for res in results:
        rel_path = os.path.relpath(res["file"], src_dir)
        print(f"File: {rel_path} (Line {res['line_num']})")
        print(f"  Code: {res['line_content']}")
