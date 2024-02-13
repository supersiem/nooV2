# Teletubby code mode activated

import http.server
import socketserver
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

PORT = 8080
WATCH_PATH = '.'  # Set the path to the directory you want to watch

Handler = http.server.SimpleHTTPRequestHandler

class AutoReloader(FileSystemEventHandler):
    def on_any_event(self, event):
        print(f'Reloading due to changes in {event.src_path}')
        restart_server()

def run_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("Server started at http://localhost:{}/".format(PORT))
        httpd.serve_forever()

def restart_server():
    os._exit(0)  # Forcefully exit the server to trigger a restart

if __name__ == "__main__":
    observer = Observer()
    observer.schedule(AutoReloader(), path=WATCH_PATH, recursive=True)
    observer.start()

    try:
        while True:
            run_server()
    except KeyboardInterrupt:
        observer.stop()

    observer.join()
