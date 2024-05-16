#### Node.js API Server with CRUD Operations using MongoDB:
      This project is a simple Node.js API server that provides CRUD operations for a MongoDB database. The API allows you to create, read, update, and delete documents in a MongoDB collection.
      
#### Getting Started:
      To get started with this project, follow these steps:

      1)Clone this repository to your local machine.
      2)Install the dependencies by running npm install.
      3)Create a .env file in the root directory of the project and add your MongoDB connection string:
        MONGODB_URI=mongodb://localhost:27017/mydatabase
      4)Start the server by running npm run start.
      
#### API Endpoints:
    The API provides the following endpoints:
    GET /movie/: Get all books.
    GET /movie/get-data-by-id/:id: Get a book by ID.
    POST /movie/create-movie: Create a new book.
    PUT /movie/update-data-by-id/:id: Update a book by ID.
    DELETE /movie/delete-data-by-id/:id: Delete a book by ID.
    
#### Error Handling:
      the help the try catch to handle errors and return appropriate responses. 
      The following error codes are used:
      400 Bad Request: The request is invalid or malformed.
      500 Internal Server Error: An unexpected error occurred on the server.

