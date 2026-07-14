import os

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
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Check if the file uses Section
        if "<Section" in content:
            print(f"\nFile: {os.path.basename(file)} uses <Section>")
            # Find any inner divs or elements with container classes
            lines = content.splitlines()
            section_level = 0
            for i, line in enumerate(lines, 1):
                if "<Section" in line:
                    section_level = 1
                elif "</Section>" in line:
                    section_level = 0
                
                if section_level == 1:
                    if "px-gutter" in line or "max-w-site" in line:
                        print(f"  Line {i}: {line.strip()}")
