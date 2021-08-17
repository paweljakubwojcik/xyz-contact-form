# Formularz zgłoszeniowy

[DEMO](https://paweljakubwojcik.github.io/xyz-contact-form/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Manual build

to build app on your local machine clone this repo:

`git clone https://github.com/paweljakubwojcik/xyz-contact-form.git [your-directory-name]`

and run:

 `npm install`
 
After that you can run app in dev/build mode or deploy it on gh-pages

Scripts: 

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run deploy`

Triggers deployment on gh-pages

## Run using Docker 

### build docker image

`docker build . --tag [image-name]`

### run container 

`docker run -p 3000:3000 [image-name]`

