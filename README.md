# React Song App

This project is a simple React application that displays a list of songs fetched from an API endpoint. It utilizes React's `useState` and `useEffect` hooks to manage state and handle data fetching. The app also includes components for rendering the header, song list, loading spinner, and footer.

## Getting Started

To get started with the project, follow these instructions:

1. Clone the repository: [https://github.com/seang549/React-full-stack](https://github.com/seang549/React-full-stack)
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the development server with `npm run start`.
4. Open your web browser and navigate to `http://localhost:5173/` to view the app.

## Prerequisites

- Node.js 
- npm 

## Dependencies

This project uses the following dependencies:

- React : A JavaScript library for building user interfaces.
- react-dom : Provides DOM-specific methods used in React applications.
- Loading (custom component): A component that renders a loading spinner while data is being fetched.
- Songs (custom component): A component responsible for rendering the list of songs and managing song-related functionality.
- Header (custom component): The header component containing controls and options for the song list.
- Footer (custom component): A simple footer component for displaying additional information.

## Usage

The main entry point of the application is the `App` component (`App.js` file). It fetches song data from the API endpoint `http://localhost:8002/song_tb` using the `fetch` API and the `useEffect` hook. The fetched data is stored in the `songs` state using the `useState` hook.

The `App` component also manages the `isRefresh` state to control whether the data should be refreshed. The `refresh` function is passed down to child components to allow them to trigger a data refresh when necessary.

### Components

#### Header

The `Header` component (`Header.js` file) renders the application's header, which includes controls and options for the song list. It receives the `refresh` and `setSongs` functions as props from the `App` component to handle data refreshing.

#### Songs

The `Songs` component (`Songs.js` file) is responsible for rendering the list of songs fetched from the API. It receives the `songs`, `setSongs`, `isRefresh`, and `refresh` functions as props from the `App` component. The `Songs` component updates the song list based on the received data and handles the functionality for song-related actions.

#### Footer

The `Footer` component (`Footer.js` file) renders a simple footer section for the application. It provides additional information and links.

## Contributing

Contributions are welcome! If you have any bug fixes, improvements, or new features to add, please open a pull request. Before making significant changes, it's best to discuss the proposed changes via issues.


## Acknowledgments

- Thanks to [React](https://reactjs.org/) for providing a fantastic library for building user interfaces.
