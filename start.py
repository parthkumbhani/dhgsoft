import subprocess
import sys
import os

def main():
    print("Starting Next.js development server on localhost...")
    # On Windows, we need shell=True to run npm.cmd
    cmd = "npm run dev"
    
    try:
        # Start the process.
        process = subprocess.Popen(cmd, shell=True)
        print("Server started. Press Ctrl+C to stop it.\n")
        
        # Wait for the process to finish or for Ctrl+C
        process.wait()
    except KeyboardInterrupt:
        print("\nStopping the server...")
        # Since shell=True spawns a shell process which in turn spawns node,
        # terminating the shell process directly leaves node orphaned on Windows.
        # We use taskkill /F /T to terminate the process and all its children.
        if os.name == 'nt':
            subprocess.run(f"taskkill /F /T /PID {process.pid}", shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        else:
            process.terminate()
            process.wait()
        print("Server stopped successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
