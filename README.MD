This is the backend for the youtube-mediaplayer. This is a very simple backend -> not much time has been spent on making this (architecture, promise-handline etc.). Most important thing is that it works and is able to communicate with the database. The main things are happening on the frontend (request to the youtube API, filttering etc.).

For using this media player:

Instructions for using this media player:
(continuation from "youtube-music-player" repository's README.md)
5. Make a MongoDB account in MongoDB atlas and create DB and Collection
6. Install .env with "npm install dotenv"
7. Make .env file to the root of this project and add MONGO_URI variable for i.e. MONGO_URI = CONNECTION_STRING
8. Add also PORT variable with for i.e. PORT = 3001
9. Copy the build folder which was created in the step 2 (youtube-music-player repository's README.md) to the root of this project
10. Push this into a service for i.e. Heroku
11. Frontend is served from the build folder automatically
12. When you see this application on the Heroku page -> search for first song -> press "aloita" when there is a song in the queue
13. Then just keep putting songs on the list and the media player will play them in FIFO principle
