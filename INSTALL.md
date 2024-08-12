
# Car Marketplace Installation Guide

This guide will help you set up and run the Car Marketplace project on your local machine. The project is built using Node.js, Express.js, MariaDB, and EJS for templating.

## Prerequisites

Before setting up the project, ensure that you have the following software installed on your system:

1. **Node.js and npm**: You can download and install Node.js from the [official website](https://nodejs.org/). This will also install npm, the Node.js package manager.

2. **MariaDB**: Install MariaDB from the [official MariaDB website](https://mariadb.org/download/) or use a package manager like Homebrew (for macOS) or apt (for Ubuntu).

3. **Git**: You need Git for cloning the repository. Download it from the [official website](https://git-scm.com/).

## Project Setup

Follow these steps to set up the project:

### 1. Clone the Repository

First, clone the project repository from GitHub:

```bash
git clone <repository-url>
cd car-marketplace
```

Replace `<repository-url>` with the actual URL of your GitHub repository.

### 2. Install Project Dependencies

Use npm to install the project dependencies:

```bash
npm install
```

This command will install all the required packages as specified in the `package.json` file.

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=car_marketplace
PORT=3000
```

- Replace `yourpassword` with the password for your MariaDB root user or any user you plan to use for this project.
- Adjust the `DB_USER` and `DB_NAME` as necessary if you are using a different configuration.

### 4. Set Up the Database

#### a. Start MariaDB Service

Ensure that the MariaDB service is running. You can start it using:

- **macOS**:

  ```bash
  brew services start mariadb
  ```

- **Ubuntu**:

  ```bash
  sudo systemctl start mariadb
  ```

#### b. Create the Database and Table

Log in to MariaDB and create the required database and table:

```bash
mariadb -u root -p
```

Enter your password when prompted. Then execute the following SQL commands:

```sql
CREATE DATABASE car_marketplace;
USE car_marketplace;

CREATE TABLE cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  make VARCHAR(50),
  model VARCHAR(50),
  year INT,
  price DECIMAL(10, 2)
);

INSERT INTO cars (make, model, year, price) VALUES
('Toyota', 'Camry', 2020, 24000.00),
('Honda', 'Civic', 2019, 22000.00);
```

### 5. Run the Application

You can start the application using npm scripts defined in `package.json`:

#### Development Mode

To start the application in development mode with automatic reloading, use:

```bash
npm run dev
```

This script uses `nodemon` to automatically restart the server whenever you make changes to the code.

#### Production Mode

To run the application in production mode, use:

```bash
npm start
```

### 6. Access the Application

Once the server is running, open your web browser and navigate to:

```
http://localhost:3000
```

You should see the landing page of the Car Marketplace. You can also access the API endpoint for cars:

```
http://localhost:3000/api/cars
```

## Additional Notes

- **Security**: Make sure to secure your database credentials and never commit the `.env` file to your version control system.

## Troubleshooting

- If you encounter issues connecting to MariaDB, ensure that the service is running and that your connection parameters in the `.env` file are correct.
- For port conflicts, change the `PORT` in the `.env` file to an available port on your system.