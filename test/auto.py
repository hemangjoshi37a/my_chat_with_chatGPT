import requests
import os

# List of URLs to download HTML files from
urls = [
    "https://chat.openai.com/chat/59c48c7e-c8d7-45d8-88e0-15d176e375cf",
    "https://chat.openai.com/chat/81469e7b-243e-4ea8-a5c2-556c0f24b59d",
    "https://chat.openai.com/chat/27954229-993c-412b-817d-3b3e64aee12c",
    "https://chat.openai.com/chat/62878540-c16a-4dae-80a7-cd5d7db09a45",
    "https://chat.openai.com/chat/dd8363d8-3447-4c67-9639-0722d6c3931c",
    "https://chat.openai.com/chat/dce42e64-33a7-47ed-8359-4ed1ebe5174f",
    "https://chat.openai.com/chat/9e547d5e-1c13-4d93-b7e5-d31a2554a3f9",
    "https://chat.openai.com/chat/17ee8dc3-b79b-4a2d-9018-13b4d12ddca1",
    "https://chat.openai.com/chat/0c6aa5da-dd24-4804-a775-20f78b5a8191",
]

# Loop through the list of URLs
for url in urls:
    # Send a GET request to the URL and retrieve the HTML content
    response = requests.get(url)
    html = response.text
    
    # Extract the filename from the URL
    filename = url.split("/")[-1]
    
    # Save the HTML content to a file with the same name as the URL
    with open(filename, "w") as f:
        f.write(html)

# Run the rename.py script to rename the HTML files
os.system("python rename.py")

# Add all the changes to the Git repository
os.system("git add .")

# Commit the changes to the repository
os.system("git commit -m 'Added new HTML files'")

# Push the changes to the GitHub repository
os.system("git push origin master")

