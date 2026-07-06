import re
import os
import glob

def clean_class_string(class_str):
    classes = class_str.split()
    # Check if this div actually has a container-level max-width class
    container_widths = ['1440', '1700', '1280', '7xl', '6xl', '5xl', 'site', 'prose']
    has_container = any(any(w in c for w in container_widths) for c in classes if c.startswith('max-w-'))
    
    if not has_container:
        return class_str # Not a container, don't change anything!
        
    new_classes = []
    for c in classes:
        # Check if the class is a container alignment/padding class we want to remove
        if c == 'mx-auto' or 'px-' in c or c.endswith('px-') or 'px-[' in c:
            continue
        if c.startswith('max-w-') and any(term in c for term in container_widths):
            continue
        new_classes.append(c)
    return ' '.join(new_classes)

def refactor_file(file_path):
    print(f"Refactoring: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add import for Section if not already there
    if '@/components/ui/Section' not in content:
        lines = content.split('\n')
        insert_idx = 0
        for idx, line in enumerate(lines[:3]):
            if 'use client' in line:
                insert_idx = idx + 1
                break
        lines.insert(insert_idx, 'import { Section } from "@/components/ui/Section";')
        content = '\n'.join(lines)

    # 2. Replace section tags
    def replace_section(match):
        attributes = match.group(1)
        # Determine the variant from className
        variant = "white"
        if "bg-mist" in attributes or "bg-[#F4F5F7]" in attributes or "bg-[#FAFBFC]" in attributes:
            variant = "mist"
            attributes = attributes.replace("bg-mist", "").replace("bg-[#F4F5F7]", "").replace("bg-[#FAFBFC]", "")
        elif "bg-ink" in attributes or "bg-[#0A0E1A]" in attributes or "bg-slate-950" in attributes or "bg-slate-900" in attributes or "bg-slate-800" in attributes:
            variant = "ink"
            attributes = attributes.replace("bg-ink", "").replace("bg-[#0A0E1A]", "").replace("bg-slate-950", "").replace("bg-slate-900", "").replace("bg-slate-800", "")
        elif "bg-[#B4123F]/5" in attributes or "bg-brand/5" in attributes:
            variant = "brandTint"
            attributes = attributes.replace("bg-brand/5", "").replace("bg-[#B4123F]/5", "")
        elif "bg-gradient-to-r" in attributes:
            variant = "gradient"
            attributes = re.sub(r'bg-gradient-to-r\s+from-brand-hot\s+via-brand\s+to-brand-deep', '', attributes)
            attributes = re.sub(r'bg-gradient-to-r\s+from-brand-hot\s+to-brand-deep', '', attributes)

        # Remove bespoke padding classes
        attributes = re.sub(r'py-\d+|md:py-\d+|lg:py-\d+|pt-\d+|pb-\d+|pt-20', '', attributes)
        
        # Determine containerSize
        container_size = "default"
        if "max-w-[1440px]" in content or "max-w-site-wide" in content or "px-16" in content or "lg:px-[120px]" in content:
            container_size = "wide"
        
        # Build the new Section opening tag
        new_attributes = f'variant="{variant}" containerSize="{container_size}" ' + attributes
        # Clean up whitespace
        new_attributes = re.sub(r'\s+', ' ', new_attributes).strip()
        if new_attributes.endswith('/'):
            new_attributes = new_attributes[:-1].strip() + " /"
        return f'<Section {new_attributes}'

    content = re.sub(r'<section\b([^>]*)', replace_section, content)
    content = content.replace('</section>', '</Section>')

    # 3. Replace inner container div
    def replace_container_div(match):
        full_tag = match.group(0)
        class_match = re.search(r'className="([^"]*)"', full_tag)
        if class_match:
            classes = class_match.group(1)
            cleaned = clean_class_string(classes)
            if cleaned != classes: # Only modify if it was actually a container
                # Add relative z-10 w-full if not there
                if 'relative' not in cleaned:
                    cleaned = 'relative z-10 ' + cleaned
                if 'w-full' not in cleaned:
                    cleaned = 'w-full ' + cleaned
                # Clean up whitespace
                cleaned = re.sub(r'\s+', ' ', cleaned).strip()
                # Replace className
                full_tag = full_tag.replace(class_match.group(0), f'className="{cleaned}"')
        return full_tag

    # Match classNames that look like they contain container classes
    content = re.sub(r'<div\b[^>]*className="[^"]*max-w-[^"]*"[^>]*>', replace_container_div, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Search recursively for all .tsx files in src/app and src/components
all_tsx_files = glob.glob(r'src/app/**/*.tsx', recursive=True) + glob.glob(r'src/components/**/*.tsx', recursive=True)

# List of files we want to skip (manually refactored or system files)
skip_files = [
    'src/components/ui/Container.tsx',
    'src/components/ui/Section.tsx',
    'src/components/ui/accordion.tsx',
    'src/components/ui/badge.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/dialog.tsx',
    'src/components/ui/navigation-menu.tsx',
    'src/components/ui/separator.tsx',
    'src/components/ui/sheet.tsx',
    'src/components/ui/tabs.tsx',
    'src/components/ui/tooltip.tsx',
    'src/components/Header.tsx',
    'src/components/Footer.tsx',
    'src/components/about/Footer.tsx',
    'src/components/Hero.tsx',
    'src/components/CEOMessage.tsx',
    'src/components/Industries.tsx',
    'src/components/Services.tsx',
    'src/components/ServiceDelivery.tsx',
    'src/components/Ecosystem.tsx',
    'src/components/CaseStudies.tsx',
    'src/components/TechEcosystem.tsx',
    'src/components/InnovationInstitute.tsx',
    'src/components/WhyChooseUs.tsx',
    'src/components/Careers.tsx',
    'src/components/ContactSection.tsx'
]

# Standardize path separators for comparison
skip_files_norm = {os.path.normpath(f) for f in skip_files}

# Run refactor on all matched files
for file_path in all_tsx_files:
    file_path_norm = os.path.normpath(file_path)
    if file_path_norm in skip_files_norm:
        print(f"Skipping: {file_path}")
        continue
    # Only refactor files that contain raw <section tags
    with open(file_path, 'r', encoding='utf-8') as f:
        file_content = f.read()
    if '<section' in file_content:
        refactor_file(file_path)
    else:
        print(f"No sections in: {file_path}")
