import os

# Get a list of all the files in the current directory
files = os.listdir('.')

# Loop through the list of files
for file in files:
    # Check if the file is a regular file and has the .html extension
    if os.path.isfile(file) and file.endswith('.html'):
        # Get the base filename and extension
        base, ext = os.path.splitext(file)
        # Convert the base filename to lowercase
        new_base = base.lower()
        # Replace spaces with underscores
        new_base = new_base.replace(' ', '_')
        # Construct the new filename
        new_filename = new_base + ext
        # Rename the file
        os.rename(file, new_filename)

