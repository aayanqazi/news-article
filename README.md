# News Article

This is a simple React application that fetches and displays the most popular articles from the New York Times. It allows users to view a list of articles and see detailed information when an article is clicked.

## Features

- Fetch and display the most popular articles from the New York Times.
- View detailed information about an article.
- Error handling for API calls.
- Tests for components and API calls.
- End to End testing for pages

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- An NY Times API key (sign up [here](https://developer.nytimes.com/get-started))

### Installation

1. Clone the repository:

```sh
git clone https://github.com/aayanqazi/news-article.git
cd news-article
```
2. Install Dependencies:
```sh
npm install (if you are facing error so try to use npm install --force)
```

3. Set up environment variables:
Create a .env file in the root directory with the following content
```sh
REACT_APP_API_KEY=your-nyt-api-key
```

## Running the App:
To start the development server, run
```sh
npm start
```
This will open the app in your default web browser at http://localhost:3000.

## Building the App:
To build the app for production, run
```sh
npm run build
```
This will create an optimized production build in the build folder.

## Running Tests:
To run the tests, use the following command
```sh
npm run test
```

## Generating Coverage Reports:
To generate test coverage reports, run
```sh
npm run test:coverage
```
This will generate a coverage report in the coverage folder.

## Running Cypress Tests
To open the Cypress test runner, run:
```sh
npm run cy
```
To run Cypress tests in headless mode using Chrome, run:
```sh
npm run cy:run
```

## Linting
To lint your JavaScript files, use the following command:
```sh
npm run lint
```
To fix linting issues automatically, run:
```sh
npm run lint:fix
```

