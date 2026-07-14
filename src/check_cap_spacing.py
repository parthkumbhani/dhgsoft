import os
import re

files = [
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\01_Hero.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\02_Overview.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\03_CoreCapabilities.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\04_FeaturedSpotlight.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\05_HowWeDeliver.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\06_IndustriesSupported.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\07_WhyChoose.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\08_DeliveryExcellenceBand.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\09_ClosingStatement.tsx",
    r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src\components\capabilities\landing\10_FinalCta.tsx"
]

for file in files:
    if os.path.exists(file):
        print(f"\n======================================")
        print(f"File: {os.path.basename(file)}")
        print(f"======================================")
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        for i, line in enumerate(content.splitlines(), 1):
            if any(term in line for term in ["max-w-", "px-", "pl-", "pr-", "mx-auto"]):
                # Clean line for presentation
                clean = line.strip()
                if clean.startswith("//") or clean.startswith("/*"):
                    continue
                print(f"  Line {i:03d}: {clean}")
    else:
        print(f"File not found: {file}")
