# Sportize Backend

## Overview


**Sportize** Welcome to Sportize, your ultimate destination for a wide range of premium sporting goods designed to enhance your athletic
performance and passion for sports. Whether you're a seasoned
competitor, a weekend warrior, or someone just starting out,
Sportize is here to equip you with everything you need to excel in
your favorite sports and activities.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Deployment](#deployment)

## Features

- User can see sporting goods.
- Can see details of all the sporting goods
- Can filter, search and sort in products
- user can manage his product by delete , update and add new product
- It allows user to add products to cart and checkout products.

## Technologies
- Express
- Typescript
- Mongoose
- Zod
- Node-mailer
- Dotenv
- Cors

## Installation

To get started with the Sportize Backend, you need to have Node.js and npm installed on your machine. Follow the steps below to set up the project:

1. Clone the repository:

```bash
  git clone https://github.com/mashuq0068/sportize-sever.git
```

2. Navigate to the project directory:

```bash
   cd bike-rental-backend
```

3. Install the dependencies:

```bash
   npm install
```

## Scripts

### `build`

Compile the TypeScript code to JavaScript.

```bash
npm run build
```

### `start`

Start the server using the compiled JavaScript code..

```bash
npm run start
```

### `start:dev`

Start the server in development mode with automatic restarts on file changes.

```bash
npm run start:dev
```

### `start:prod`

Start the server in production mode using nodemon.

```bash
npm run start:prod
```

### `lint`

Run ESLint to check for linting errors.

```bash
npm run lint
```

### `lint:fix`

Run ESLint and automatically fix linting errors.

```bash
npm run lint:fix
```

### `prettier`

Format the code using Prettier.

```bash
npm run prettier
```

### `prettier:fix`

Format the code and automatically fix formatting issues using Prettier.

```bash
npm run prettier:fix
```

### `test`

Run the test suite.

```bash
npm run test
```

## Dependencies

The project relies on the following dependencies:

- **cors**: ^2.8.5
- **dotenv**: ^16.4.5
- **express**: ^4.19.2
- **http-status**: ^1.7.4
- **jsonwebtoken**: ^9.0.2
- **mongoose**: ^8.4.1
- **mongose**: ^0.0.2-security
- **zod**: ^3.23.8

## Dev Dependencies

The project also includes the following development dependencies:

- **@eslint/js**: ^9.4.0
- **@types/cors**: ^2.8.17
- **@types/express**: ^4.17.21
- **@typescript-eslint/eslint-plugin**: ^7.13.0
- **@typescript-eslint/parser**: ^7.13.0
- **eslint**: ^8.57.0
- **eslint-config-prettier**: ^9.1.0
- **globals**: ^15.4.0
- **prettier**: ^3.3.2
- **typescript**: ^5.4.5
- **typescript-eslint**: ^7.13.0

## Deployment

- Live Link: [Sportize-backend project live link](https://sportize-server.vercel.app/)
