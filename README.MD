This is the backend for the youtube-mediaplayer. This is a very simple backend -> not much time has been spent on making this (architecture, promise-handline etc.). Most important thing is that it works and is able to communicate with the database. The main things are happening on the frontend (request to the youtube API, filttering etc.).

For using this media player:

1. Clone this repository
2. The production build from the frontend has already been done (on the build folder)
3. Push this into a service for i.e. Heroku
4. Frontend is served from the build folder automatically
5. When you see this on Heroku page -> search for first song -> press "aloita"
6. Then just keep putting songs on the list