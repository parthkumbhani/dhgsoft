import os
import re

files_to_fix = [
    r"components\about\02_ChapterWhoWeAre.tsx",
    r"components\about\03_ChapterWhyWeExist.tsx",
    r"components\about\04_VisionMission.tsx",
    r"components\about\05_ValuesManifesto.tsx",
    r"components\about\06_StrategicTimeline.tsx",
    r"components\about\07_PartnershipMarquee.tsx"
]

src_dir = r"c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\src"

for rel_path in files_to_fix:
    filepath = os.path.join(src_dir, rel_path)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Let's find the Section wrap pattern:
    # <Section ...>
    #   <div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md">
    # ...
    #   </div>
    # </Section>
    
    # We want to replace:
    # <Section variant="..." size="..." pattern="...">
    #   <div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md">
    # with:
    # <Section variant="..." size="..." pattern="...">
    # and the trailing:
    #       </div>
    #     </Section>
    # with:
    #     </Section>
    
    pattern_start = r'(<Section[^>]*>)\s*<div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md">'
    
    # Let's see if pattern_start matches
    match = re.search(pattern_start, content)
    if not match:
        print(f"Start pattern not found in {rel_path}")
        continue
    
    # We replace the starting div
    new_content = re.sub(pattern_start, r'\1', content)
    
    # Now we need to remove the closing </div> that is just before </Section>
    # Specifically, we find '</div>\s*</Section>' at the end.
    pattern_end = r'</div>\s*</Section>'
    match_end = re.search(pattern_end, new_content)
    if not match_end:
        print(f"End pattern not found in {rel_path}")
        continue
    
    new_content = re.sub(pattern_end, r'</Section>', new_content)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Successfully fixed {rel_path}")
