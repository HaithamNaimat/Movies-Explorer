# React Movies Project - Presentation Script

**Time:** 5 minutes total
**Team Members:** 2-3

---

## TEAM MEMBER 1: Introduction (~1 minute)

---

**[Slide: Project Title]**

**Speaker 1:** Hi everyone, today we're presenting our React Movies project.

**[Slide: What is React?]**

**Speaker 1:** React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now used by companies like Netflix, Instagram, and Airbnb.

**Speaker 1:** Our project is a Single Page Application, also called an SPA. This means the page doesn't reload when you navigate. Everything happens in one page, which makes it fast and smooth.

**[Slide: Project Overview]**

**Speaker 1:** Our Movies Explorer app lets users:
- Browse a collection of movies
- Search movies by title or director
- Sort movies by title, year, or rating

---

## TEAM MEMBER 2: Components & Data (~1.5 minutes)

---

**[Slide: Pages and Routing]**

**Speaker 2:** Let me explain how our app is structured.

**Speaker 2:** We have four pages:
1. Home - displays all movies
2. Login - user login form
3. Register - user registration form
4. About - project information

**[Slide: React Router]**

**Speaker 2:** We use React Router to handle navigation between pages. When you click a link in the header, the URL changes but the page doesn't reload.

**Speaker 2:** Here's how we set it up in App.jsx - we import Routes and Route from react-router-dom, then define each path and which component to show.

**[Slide: Header Component]**

**Speaker 2:** The Header component appears on every page. It contains our logo and navigation links.

**Speaker 2:** The header uses React Router's Link component, which is special - it changes the URL without reloading the page.

**[Slide: Movie Data]**

**Speaker 2:** Our movie data is stored in a simple JavaScript array. Each movie has:
- ID (unique identifier)
- Title
- Director
- Year
- Rating (out of 10)
- Genre

**Speaker 2:** We have 14 movies in our collection, including classics like The Shawshank Redemption, The Godfather, and Inception.

---

## TEAM MEMBER 3: Functionality (~2 minutes)

---

**[Slide: useState Hook]**

**Speaker 3:** Now for the exciting part - how it works!

**Speaker 3:** React provides special functions called Hooks. useState is one of the most important.

**Speaker 3:** In our Home component, we use two pieces of state:
- searchTerm - what the user types in the search box
- sortBy - which sorting option is selected

**Speaker 3:** When these change, React automatically updates the display. This is called "reactive" programming.

**[Slide: Search Functionality]**

**Speaker 3:** Our search feature lets users find movies by title or director.

**Speaker 3:** When the user types, we:
1. Get the search term from the input
2. Convert it to lowercase (so "shawshank" finds "Shawshank")
3. Check if the title OR director contains the search term
4. Display only matching movies

**[Slide: Sort Functionality]**

**Speaker 3:** Users can sort movies in three ways:
- By title (alphabetical A-Z)
- By year (newest or oldest first)
- By rating (highest to lowest)

**Speaker 3:** We use JavaScript's sort function with custom comparison logic.

**[Slide: Search + Sort Together]**

**Speaker 3:** Here's the cool part - they work together!

**Speaker 3:** First, we filter the movies to only show ones matching the search. Then, we sort the filtered results. This way users can find a specific movie and see it in their preferred order.

**Speaker 3:** We use useMemo to make this efficient - it remembers the result until search or sort changes, so we don't recalculate on every render.

**[Slide: Responsive Design]**

**Speaker 3:** Our app works on mobile phones, tablets, and desktop computers.

**Speaker 3:** We use:
- CSS Grid for the movie cards (auto-fill columns)
- Media queries for different screen sizes
- Flexbox for layout alignment

**Speaker 3:** On mobile, the header stacks vertically and shows one column of movies. On desktop, you see multiple columns.

---

## TEAM MEMBER 1: Conclusion (~30 seconds)

---

**[Slide: GitHub & Deployment]**

**Speaker 1:** To finish up, our project is available on GitHub where you can view all the code.

**Speaker 1:** For deployment, we use Vite, a modern build tool. Running "npm run build" creates optimized files ready for the web.

**Speaker 1:** The built files can be deployed to any static hosting service like Netlify or Vercel.

**[Slide: Thank You]**

**Speaker 1:** Thank you for listening! We're happy to answer any questions.

---

## Presentation Tips

- Practice speaking each part 2-3 times before presentation day
- Have slides ready for each section
- Point to relevant code when explaining
- Speak clearly and at a steady pace
- Make eye contact with audience
- Don't rush - you have 5 minutes!

## What to Show on Slides

| Slide | Content |
|-------|----------|
| 1 | Project title "Movies Explorer" |
| 2 | React logo / "Built with React" |
| 3 | Screenshot of the app |
| 4 | Routes code snippet |
| 5 | Header component code |
| 6 | Sample movie data |
| 7 | useState code |
| 8 | Search filter code |
| 9 | Sort code |
| 10 | Combined logic |
| 11 | Responsive screenshots |
| 12 | GitHub / Thank you |