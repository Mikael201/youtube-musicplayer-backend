This is the backend for the youtube-mediaplayer. This is a very simple backend -> not much time has been spent on making this (architecture, promise-handline etc.). Most important thing is that it works and is able to communicate with the database. The main things are happening on the frontend (request to the youtube API, filttering etc.).

For using this media player:

1. Clone this repository
2. Clone the frontend repository (youtube-mediaplayer)
3. Add your own API_KEYS to the frontend
4. Add your connection string to the .env file to the database
5. Make production build from frontend and put the production build on the backend's build folder
6. Push this into a service for i.e. Heroku
7. Frontend is served from the build folder automatically
8. When you see this on Heroku page -> search for first song -> press "aloita"
9. Then just keep putting songs on the list
