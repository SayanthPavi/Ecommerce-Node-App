# Ecommerce Node app

- Our project follows the MVC (Model-View-Controller) architecture
- Project Setup: Installed packages for server creation
    - Node.js: JavaScript runtime for server-side development
    - Express.js: Lightweight web framework for Node.js
    - Nodemon: Development tool for automatic server restarts on code changes
    - dotenv: Module for loading environment variables
    - MongoDB: NoSQL database for data storage
    - Mongoose: MongoDB object modeling tool for Node.js
- Project Structure: folders have been created for better organization and scalability
    - config: Contains configuration files (e.g., database, environment setup).
    - helpers: Includes utility functions and reusable code snippets.
    - middlewares: Houses middleware logic for handling requests, authentication, etc.
    - models: Contains schema definitions and database models using Mongoose.
    - routes: Manages API routes and endpoint definitions.
    - views: Stores frontend templates or view-related files (if applicable).
- Create a .env file in the root directory of the project to securely store configuration variables
- Create a .gitignore file in the root directory of the project to exclude files and directories that should not be tracked by Git
- Create the Database Configuration File