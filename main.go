package main

import (
	"log"
	"net/http"
	"path/filepath"
	"strings"
)

func main() {
	http.HandleFunc("/", serveHTML)

	// Start the server on port 8080
	log.Println("Server is running on http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}

// serveHTML dynamically serves HTML files based on the requested path
func serveHTML(w http.ResponseWriter, r *http.Request) {
	// Get the requested path (e.g., "/community")
	path := r.URL.Path

	// If the path is "/", serve the index.html
	if path == "/" {
		path = "/index"
	}

	// Construct the file path (e.g., "static/community.html")
	filePath := filepath.Join("static", strings.TrimPrefix(path, "/")+".html")

	// Serve the HTML file if it exists
	http.ServeFile(w, r, filePath)
}
