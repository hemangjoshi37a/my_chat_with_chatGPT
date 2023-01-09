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

    # Find the chat messages and responses by looking for elements with the `min-h-20px flex flex-col` and `markdown prose w-full break-words` classes
    chat_msgs = soup.find_all(class_="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap")
    chat_responses = soup.find_all(class_="markdown prose w-full break-words dark:prose-invert dark")

    # Zip the chat messages and responses into a list of tuples, with each tuple containing a message and a response
    chat_data = list(zip(chat_msgs, chat_responses))

    # Convert the list of tuples to a list of dictionaries, with each dictionary containing a message and a response
    chat_data = [{"message": m.text, "response": r.text} for m, r in chat_data]

    # Convert the list to a JSON object
    json_data = json.dumps(chat_data, indent=4)

    # Save the JSON object to a file
    with open(html_file.replace('.html', '.json'), "w") as f:
        json.dump(json_data, f, indent=4)

