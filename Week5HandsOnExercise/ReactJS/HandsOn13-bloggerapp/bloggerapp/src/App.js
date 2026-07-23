import "./App.css";

function BookDetails() {
  const books = [
    { id: 101, name: "Master React", price: 670 },
    { id: 102, name: "Deep Dive into Angular 11", price: 800 },
    { id: 103, name: "Mongo Essentials", price: 450 },
  ];

  return (
    <div>
      <h1>Book Details</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      desc: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      author: "Schweidernier",
      desc: "You can install React from npm.",
    },
  ];

  return (
    <div>
      <h1>Blog Details</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h5>{blog.author}</h5>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}

function CourseDetails() {
  const courses = [
    { id: 1, name: "Angular", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/2021" },
  ];

  return (
    <div>
      <h1>Course Details</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">
      {showCourses && (
        <div className="section">
          <CourseDetails />
        </div>
      )}

      {showBooks ? (
        <div className="section">
          <BookDetails />
        </div>
      ) : null}

      {showBlogs && (
        <div className="section">
          <BlogDetails />
        </div>
      )}
    </div>
  );
}

export default App;