# Movies Explorer App

A React.js Single Page Application for browsing and discovering movies with search and sorting functionality.

## Project Idea

Movies Explorer is a web application that displays a collection of movies. Users can search movies by title or director, sort them by title, year, or rating, and view detailed movie information.

## Features

- Browse movies displayed as cards
- Search movies by title or director
- Sort movies by title, year, or rating
- Search and sort work together simultaneously
- Responsive design for mobile and desktop
- Hover effects on movie cards
- Clean and modern UI

## Pages

1. **Home** - Displays movies with search and sorting controls
2. **Login** - Placeholder login form (non-functional)
3. **Register** - Placeholder registration form (non-functional)
4. **About** - Static description of the project

## Technologies Used

- React.js (Functional Components)
- React Hooks (useState)
- React Router DOM
- Vite (build tool)
- CSS (styling)

## Project Structure

```
src/
  components/
    Header.jsx      - Navigation header
    MovieCard.jsx  - Movie card component
  pages/
    Home.jsx       - Home page with movies
    Login.jsx      - Login page
    Register.jsx   - Register page
    About.jsx      - About page
  data/
    moviesData.js  - Mock movie data
  App.jsx         - Main app with routing
  main.jsx        - Entry point
  index.css       - Global styles
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (typically http://localhost:5173)

## Movie Data

The app includes 14 movies with the following fields:
- id
- title
- director
- year
- rating
- genre

## Requirements Met

- React.js functional components only
- React Hooks (useState)
- React Router DOM for navigation
- Persistent Header on all pages
- 4 pages (Home, Login, Register, About)
- 12+ movies in mock data
- Search by title or director
- Sort by title, year, or rating
- Uses filter() and sort() native JavaScript methods
- Responsive layout
- Movie cards with hover effects
- No backend required