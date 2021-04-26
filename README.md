# Giphy Trending and Search App

## Features

- List of trending GIFs upon loading.
- Search feature.
- Family safe option to filter out non-G rated content.
- Button to load more items.
- Skeleton card while gifs are being loaded.

## How to clone and run this app on your computer?

- Clone github repor in your machine: `git clone https://github.com/petrussola/giphy-app.git NAME_OF_YOUR-APP`
- Type `npm install` in your command line to install dependencies.
- Create a `.env.local` file and add a GIPHY API key as a value for variable `REACT_APP_API_KEY`:

`REACT_APP_API_KEY={{ADD YOUR GIPHY API KEY}}`

- You can create a Giphy API key by heading to https://developers.giphy.com/ > Get Started > Sign Up > Create an App (top right corner) >  Create an App (under Your Apps section)
- `npm run start` to start local development server. App will display in `http://localhost:3000/` 
- `npm run test` to run unit tests
- `npm run build` to build for production

## What stack did I use?

- React (w/ Create-React-App)
- Chakra UI (for styling and icons)
- Axios (for HTTP calls)
- Jest/React Testing Library (for Unit Testing)

Any question, please reach out!