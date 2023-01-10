from bs4 import BeautifulSoup
import json
import os

# Get a list of HTML files in the current directory
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for html_file in html_files:
    # Open the HTML file and read its contents
    with open(html_file, "r") as f:
        html_content = f.read()

    # Parse the HTML using Beautiful Soup
    soup = BeautifulSoup(html_content, "html.parser")

    # Find the element to keep using the xpath
    element_to_keep = soup.find(xpath="/html/body/div/div/div[1]/main/div[1]/div/div")

    # Remove all other elements from the HTML
    for element in soup.find_all():
        if element != element_to_keep:
            element.extract()

    # Write the modified HTML back to the file
    with open(html_file, "w") as f:
        f.write(str(soup))

