# My blog


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
With inspiration and starter source code taken from a [LinkedIn Learning tutorial] (https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site)


## Available Scripts

### Preliminary

### npm creat-react-app my-blog --use-npm
(If not done yet) Create our React app template

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
Not that when the build folder made within my-blog (frontend), copy it from the main directory and paste it into the source directory of our backend (my-blog-backend), in order to allow our server to serve our client side to the users.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### npm install -g serve
Deploy the build. Install serve for the purpopse.

### serve -s build

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<hr>

## For the back-end, in the back-end folder

### npm init -y

### npm install express

Now, let's install babel which allows use to write our code in ES6 syntax while still working with systems that do not support ES6
### npm install --save-dev @babel/core @babel/node @babel/preset-env

The file .babelrc newly created in the backend folder, is where we tell babel how we want to transform the ES6 code that we write into the common JS code that Node JS can execute
### nano .babelrc

Run our express server with node js
### npx babel-node src/server.js

This npm module (body-parser) that allows our server to parse the json data we send along with our (post) request
### npm install --save body-parser


### npm install --save-dev nodemon
allows our server to sense when our file has changed and automatically restart itself. Then

### npx nodemon --exec npx babel-node src/server.js
Note. A simpler way to run that command is to add it to package.json file (in scripts section, at "start")
and then run the nodemon server with
### npm start


## mongo
launch mongodb for our backend, instead of a static api db. Launches mongo shell

### Learn more on MongoDB installation and connection on windows (or linux)
[here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
 - If You Installed MongoDB as a Windows Service
 1. run `"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"` on the command line (as Admin). It starts MongoDB as a Windows Service.
 2. To stop/pause the MongoDB service, Right-click on the MongoDB service and click Stop (or Pause). Then,
 3. To remove the MongoDB service, run `sc.exe delete MongoD`B on the command line (as Admin).

 - Once MongoDB launched,
 1. To create database directory where MongoDB stores data, run `cd C:\` then `md "\data\db"` (only on widows; ``sudo mkdir -p /data/db` on linux). Note. MongoDB’s default data directory path is the absolute path \data\db on the drive.
 2. Start MongoDB database by running mongo.exe this way `"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"`, with --dbpath option pointing to the database directory.
 If the MongoDB database server is running correctly, the Command Interpreter displays `[initandlisten] waiting for connections`.

- Once mongo db created and awaiting connecting,
1. To connect to MongoDB, run `"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"`. Then proceed to CRUD tasks as needed.

## Alternatively, for linux systems
### mongod
starts the mongodemon, to seemlessly restarts the server after changes.

### mongo
launches the mongo shell on linux, where we can create and modify mongo database on our machine

### use my-blog
create a new database for our blog site, here named my-blog.  We then see `switched to db my-blog`.
We want to create a collection called articles which contains the articles we used to have on our server code. Content of db is entered as an array of objects ( this way [{}])

### db.articles.insert([{
...     name: 'learn-react',
...     upvotes: 0,
...     comments: [],
...     }, {
...     name: 'learn-node',
...     upvotes: 0,
...     comments: [],
...     }, {
...     name: 'my-thoughts-on-resumes',
...     upvotes: 0,
...     comments: [],
...     }])


### db.articles.find({})
allows us to see all the articles we've added to our articles collection (with ({}) indicates an empty object inside).
Tips: `db.articles.find({}).pretty()` displays content in a more readable format. Note. MongoDB adds an Id to the collection's items.

### db.articles.find({ name: 'learn-react' }).pretty()
finds the article that fits the criteria in parenthesis.

### db.articles.find({}).pretty()
expects to find one result.


### npm install --save mongodb
installs mongodb npm package into our project. It allows us to connect to and modify our local db from inside our server code; data won't be wiped away every time we restart.


### npm install --save whatwg-fetch
when joining frontend and backend with **fetch** and **POST** method, install this library within my-blog folder to make that fetch method work on internet explorer. Once imported, add line `import 'whatwg-fetch'`.


### npm start && mongo
Note. make sure that when testing the react app on both front and back end sides, app is launched from both my-blog and my-blog-backend, as well as mongodb initiated too.

***

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
