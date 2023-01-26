# Image Recognition Project

This project is built using framework ReactJS and Clarifai's API. frontend as JavaScript, CSS, HTML and Node.js as the backend, and PostgreSQL as the database. The principal functionality of this project is to use the Clarifai API, which is an image recognition API, to analyze and identify the contents of an image.

## Project Setup

1. Go to (<https://github.com/andriel300/facerecognitionbrain-api.git>) Clone both of the repository to your local machine
2. Run `npm install` to install all the necessary dependencies
3. Create a .env file in the root directory and add your Clarifai API key as well as your PostgreSQL database credentials
4. Run `npm start` to start the server
5. Open `http://localhost:3006` in your browser to access the application

## Usage

1. Select or drop an image you want to analyze
2. The application will use the Clarifai API to analyze the image and return the identified contents
3. The analyzed image and its contents are then stored in the PostgreSQL database for future reference

## Built With

- JavaScript
- CSS
- HTML
- Node.js
- PostgreSQL
- Clarifai API

## Acknowledgements

- \[Matt Zeiler / CEO & Founder of Clarifai API\] for providing the Clarifai API
- \[Andrei Neagoie / Instructor and Founder of zerotomastery.io\] for inspiration and guidance in building this project.
