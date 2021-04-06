# notesy
Node, Express, EJS App allowing logged in authenticated users to create, read, update, delete notes.

## Author: Anne Thorsteinson

**[Front End - UNDER CONSTRUCTION](https://auth-api-at.herokuapp.com/)**

## Setup

```.env``` requirements:

- ```PORT``` - port number
- ```SECRET``` - used to create jwt
- ```SESSION_SECRET``` - used to create session storage

## Running the App

Can be run with npm start to connect to localhost; live front end is under contruction as are internal routes

- ```npm start``` will call ```nodemon index.js```
 
### Endpoints:

* ```POST``` requests to ```/sign-in``` will compare the plain text password with the bcrypt hash stored in the Users database and return the user and a list of the notes they have created *(directing to these routes is in progress)*
* ```POST``` requests to ```/sign-up``` will has the password and send to the user database to store (if the user with this username does not already exist)
* ```GET``` requests to ```/users``` will return a list of usernames that are currently signed up to validated users, invalid users will get an error message; user names will be returned in the format ```["name1", "name2", "name3"...]```
* ```GET``` requests to ```/secret``` will give validated users access to the secret area, invalid users will be locked out; it will show a message saying "Welcome to the secret area!"

### Non access controlled endpoints

* Note that the type of record is determined by the model param *
* ```GET /api/v1/:model'``` returns all models
* ```GET /api/v1/:model/:id```returns one model record by id
* ```POST /api/v1/:model``` creates a new record
* ```PUT /api/v1/:model/:id``` updates a record with the input id
* ```DELETE /api/v1/:model/:id``` deletes a record with the input id

### Access controlled endpoints

* Note that the type of record is determined by the model param *
* ```GET /api/v2/:model'``` returns all models, requires bearer auth with read permission
* ```GET /api/v2/:model/:id```returns one model record by id requires bearer auth with read permission
* ```POST /api/v2/:model``` creates a new record requires bearer auth with create permission
* ```PUT /api/v2/:model/:id``` updates a record with the input id requires bearer auth with update permission
* ```DELETE /api/v2/:model/:id``` deletes a record with the input id requires bearer auth with delete permissions

### Access Control List Setup

Role | Capabilities
---- | ------------
User | Read
Editor | Read, Create, Update
Admin | Read, Create, Update, Delete

## Tests

- Unit Tests: ```npm run test``` (auth-routes, non ACL routes, and ACL route test suites implemented)
- Lint Tests: ```npm run lint```
