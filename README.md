# [Notegenix](https://notegenix-client.vercel.app/)

Set yourself up for success by creating, and completing various tasks/todo items. A great way to prioritze your goals, events, and tasks. Tasks can be created, edited, and deleted.

## API Documentation

### Introduction
The NoteGenix API is organized around REST. The API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, and verbs.

The NoteGenix API can be used to programmatically retrieve and analyze data.
This API provides access to a multitude of notes

### Todos Endpoint

>> #### GET /api/v1/todos

Returns a list of all todos within the database.

>> GET /api/v1/todos/:id

Returns a single todo within the database at that id.

#### POST /api/v1/todos

Creates a todo object to send to the database
  
    {
     description: "" 
    }
  
#### Patch /api/v1/todos/:id

Edit/update a previously created todo within the database.

#### Delete /api/v1/todos/:id

### Overview


### Authentication
What is the preferred way of using the API?
- No Authentication

### Error Codes
Notegenix uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stripe's servers (these are rare).

### Rate limit
Is there a limit to the number of requests an user can send?
There is not a rate limit set at this time, user is able to make as many requests at they need

## Screenshots
![image](https://user-images.githubusercontent.com/44560811/96477226-3bf4cc00-1204-11eb-86dc-fb453caa2cc5.png)

![image](https://user-images.githubusercontent.com/44560811/96477374-69da1080-1204-11eb-8408-7428348dc9b8.png)

## Technology Used
- Front-End:
  - React
  - JS
  - CSS
  - HTML
- Back-End:
  - Express
  - PSQL



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

