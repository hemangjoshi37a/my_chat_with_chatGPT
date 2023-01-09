import subprocess

# Add all changes to the staging area
subprocess.run(["git", "add", "."])

# Commit the changes with a message
subprocess.run(["git", "commit", "-m", "Automatic commit"])

# Push the changes to the remote repository
subprocess.run(["git", "push"])

