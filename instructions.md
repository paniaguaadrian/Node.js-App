### Set up database with mongoDB Atlass

- Go to www.mongodb.com
- Sign in
- Create a new organization
- "We can add here members and set permissions"
- Create a new project (we can add members as well)

# Create a new Cluster

- Go through the settings page
- Create Database Access (left menu)
- Create a new user with password authentification
- Adrian1234 // Adrian1234

# Network access (left menu)

- Allow acces from anywhere (click that option)

# Connect to our app

- Connect button (on the dashboard)
- There is a string that we need to use to connect the app.
- My connection string below...
<!-- mongodb+srv://adrian1234:<password>@dressappcluster.2rb6o.mongodb.net/<dbname>?retryWrites=true&w=majority -->

### Dependencies must install

- express (Web framework to create routes)
- mongoose (work with database and create models)
- connect-mongo (store sessions in our database)
- express-session (sessions and cookies)
- express-handlebars (template engine)
- dotenv (put our environment variables into a file)
- method-override (makes pull and delete request from templates)
- moment (to format dates)
- morgan (for the login)
- passport (for authentification)
- passport-google-oauth20 (google authentification)

## Dev Dependencies

<!-- ! Command to install that packages (npm i -d  *dependencie* ) -->

- nodemon (continue watch our server, we don't need to restart it)
- cross-env (put inside our scriptes and dev scripts we want a global variable for node environment)

### Scripts section on package.json

<!-- * To work on production... -->

"start": "cross-env NODE_ENV=production node app"

<!-- * To work on development... -->

"dev": "cross-env NODE_ENV=development nodemon app"

### Ready to code on file app.js

<!-- min 10:24 -->
