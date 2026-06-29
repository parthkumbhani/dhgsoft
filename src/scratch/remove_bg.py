import os
import sys

def main():
    try:
        from rembg import remove
        from PIL import Image
    except ImportError:
        print("ImportError: rembg or PIL not installed. Run 'pip install rembg pillow'")
        return

    input_path = r'c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\public\CEO.jpeg'
    output_path = r'c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\public\CEO_nobg_clean.png'

    if not os.path.exists(input_path):
        print(f"Error: Input file {input_path} not found.")
        return

    print("Removing background... This may take a few seconds on first run (downloading model)...")
    try:
        input_img = Image.open(input_path)
        output_img = remove(input_img)
        output_img.save(output_path, 'PNG')
        print(f"Success! Background-removed image saved to: {output_path}")
    except Exception as e:
        print(f"Error occurred: {e}")

if __name__ == '__main__':
    main()
