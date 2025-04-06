# Start the local server
python -m http.server 8000 &

# Launch Ngrok to make it public
ngrok http 8000
