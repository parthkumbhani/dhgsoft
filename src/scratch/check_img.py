import os
from PIL import Image

try:
    path = r'c:\Users\Parth Patel\OneDrive\Desktop\dhgsoft\dhgsoft\Website\frontend\public\ceo-placeholder-nobg.png'
    if os.path.exists(path):
        img = Image.open(path)
        print("Size:", img.size)
        print("Mode:", img.mode)
    else:
        print("File not found")
except Exception as e:
    print("Error:", e)
