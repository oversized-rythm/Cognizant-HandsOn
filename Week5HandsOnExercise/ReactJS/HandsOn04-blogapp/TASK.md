# WEEK 05 : ReactJS

<hr>

## Hands-on 4 : React Component Lifecycle

### Objective

Create a React application that demonstrates the **React Component Lifecycle** by fetching data from a REST API using the `componentDidMount()` lifecycle method and handling component errors using `componentDidCatch()`.

---


## Steps Performed

1. Created a new React application named **blogapp**.
2. Created a `Post.js` class to represent a blog post.
3. Created a class component named `Posts`.
4. Initialized the component state with an empty list of posts.
5. Implemented the `loadPosts()` method to fetch posts from:
   ```text
   https://jsonplaceholder.typicode.com/posts
   ```
6. Used the `componentDidMount()` lifecycle method to load posts after the component was mounted.
7. Displayed the post title and body using headings and paragraphs.
8. Implemented the `componentDidCatch()` lifecycle method to handle component errors.
9. Imported and rendered the `Posts` component in `App.js`.
10. Started the React development server using:

    ```bash
    npm start
    ```

11. Verified the fetched posts in the browser.

---
