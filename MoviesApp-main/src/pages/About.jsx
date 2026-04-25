function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Movies Explorer</h1>
        <p>
          Movies Explorer is a React.js Single Page Application that allows users
          to browse and discover movies from our collection.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Browse a collection of popular movies</li>
          <li>Search movies by title or director</li>
          <li>Sort movies by title, year, or rating</li>
          <li>View detailed movie information</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>React.js with Functional Components</li>
          <li>React Hooks (useState)</li>
          <li>React Router DOM</li>
          <li>CSS for styling</li>
        </ul>
        <p>
          This project was built as a learning exercise for a university
          front-end development course.
        </p>
      </div>
    </div>
  );
}

export default About;