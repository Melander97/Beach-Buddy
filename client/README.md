# BEACH-BUDDY

Beach-buddy is a website to search and share your favourite beaches.

You are also able to save your favourite beach so you wont forget where to find them.

# Tech used

The product is developed using NODE.JS for the backend and

- JS
- REACT
- HTML
- SASS
- TAILWIND
- Mongo DB

Havs- och vattenmyndighetens API has been used to get location of EU approved beaches and it`s data around Sweden.

# Reason for the app and code

We wanted to create a product where you as a user easily can find beach locations near where you are at the moment but also if you plan to go for maybe a family vacation across the country and have no idea where to take a swim.

As we also wish to create a safe app for our users we choose to use the API from Havs- och vattenmyndighetens as they have included all the EU approved beaches and we will also demonstrate that for our user in the app. So what does it mean that a beach is EU approved? It simply means that several samples of the water has been testead for different types of bacteria that could be harmful for humans. And as long as a beach location and its water meets these conditions they will be EU apporoved.

We as people have a lot of things in our heads these days so it is easy to forget things and places, so we also wanted to create a function so that our registered users also could save their favoruite beach spots in their profile page.

To create a sense of community we also wanted to implement a second map for the registerd users where they can see eachothers favourite beaches.

## Installation

To use this application you will need to have Node.js, NPM, Git installd and we recomend VS code but any text editor will work.

To start, clone the repo from Github to your local machine:

#### Open your terminal and then type:

```bash
$ git clone {the url to the GitHub repo}
```

This clones the repo.

#### cd into the new folder and type:

```bash
 $ npm install. This installs the required dependencies.
```

#### cd into the client folder and type:

```bash
 $ npm install. This installs the required dependencies.
```
To run this project, you will need to add the following environment variables to your .env file in the root directory.

`PORT=`

`USERNAME=`

`PASSWORD=`

`JWT_SECRET=`

The JWT_SECRET is a random string you want to encrypt your tokens with.

You also need a second .env inside your client folder, this is where you'll store your google maps api key.

`REACT_APP_GMAPS_API_KEY=`

To get a google maps api key you need to visit [Google Developer Console](https://console.cloud.google.com/ "Google's Developer Console") and sign in.

Well signed up you need to enable these services:
- Maps JavaScript API (This is the service which api key you need in your .env inside the client folder)
- Places API
- GeoCoding API
#### To run the React project:

```bash
$ npm start in the client folder.
```

#### In the root folder type:

```bash
$ npm start to start the server.

```

Locally the server runs on http://localhost:4000/ with the installation above, and the application can be viewed at http://localhost:3000.

Create a account for Mongo DB and set up a new connection with your URI, make sure to change this in the config folder and in the db.js file, on line 6 you can change the URI to your own and make sure that you add two variables in the .env file to USERNAME and PASSWORD. Under the header "Environment Variables" you can simply copy the text and paste it in the .env file. The fill in your own USERNAME and PASSWORD. In your URI link you have to include your variables like this "${process.env.USERNAME}" and "${process.env.PASSWORD}". We run our backend on PORT 4000 but if you use that port for another project you can simply use a port that you have free, just make sure to include this in the .env file.

## API Reference

Authentication & Authorization

For a user to be able to create a list and save beaches and also to see other users beaches they will have to register and then log in.

For non-registred users, only the data from Havs- bad myndigehtens API will be availabale.

When a user logs in they'll be provided with a token which will be needed to see user profil and the shared map. Also to be able to sucessfully create, read, and delete lists.

A token has to be provided in order to do these tasks.

## Location routes:

| Method | URI                             | Description              |
| :----- | :------------------------------ | :----------------------- |
| `POST` | `api/locations/addLocation`     | protect, addLocation     |
| `GET`  | `api/locations/getLocation`     | protect, getLocation     |
| `POST` | `api/locations/delete`          | protect, deleteLocation  |
| `PUT`  | `api/locations/update`          | protect, updateLocation  |
| `GET`  | `api/locations/getLocationById` | protect, getLocationById |

## User routes

| Method | URI              | Description             |
| :----- | :--------------- | :---------------------- |
| `POST` | `api/`           | registerUser            |
| `GET`  | `api/login`      | loginUser               |
| `POST` | `api/:id`        | protect, getUserById    |
| `PUT`  | `api/delete/:id` | protect, deleteUserById |
| `GET`  | `api/logout`     | protect, logoutUser     |

## Documentation

<!-- [Documentation](https://linktodocumentation) -->

https://www.figma.com/file/fGIQVq3HrhiiiwmtkICQgx/BeachBuddy?node-id=0%3A1

https://github.com/chas-academy/u08-business-idea-beach-buddy/projects

## License

[NO ONE CAN USE THIS IT IS OUR PRECIOUS FOREVER](https://choosealicense.com/licenses/mit/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`PORT = ''`

`USERNAME = ''`

`PASSWORD = ''`
