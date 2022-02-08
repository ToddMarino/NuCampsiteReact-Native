If you are using a real mobile device and not the Android emulator, open a new bash terminal and enter this command:
adb reverse tcp:8097 tcp:8097

starting JSON-server:
json-server -H 0.0.0.0 --watch db.json -p (optional delay -d 2000)