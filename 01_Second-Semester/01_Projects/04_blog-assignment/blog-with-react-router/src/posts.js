const posts = [
  {
    id: "1",
    title: "Understanding React Router Basics",
    excerpt:
      "Learn how React Router helps you build single-page applications with multiple pages and clean navigation.",
    content: `
React Router is a powerful library that allows you to handle navigation in a React application without reloading the page. Instead of relying on traditional server-side routing, React Router enables client-side routing, which makes your app feel faster and more seamless.

At its core, React Router maps URLs to components. When the URL changes, React Router renders the matching component without refreshing the browser. This is what allows React applications to behave like multi-page apps while still being single-page applications.

Understanding concepts like Routes, Route, Link, and useParams is essential when working with React Router. Once you grasp these basics, you can easily build dynamic routes, nested layouts, protected pages, and even custom 404 error pages.
`,
  },

  {
    id: "2",
    title: "What Is Dynamic Routing in React?",
    excerpt:
      "Dynamic routing allows a single page to display different content based on URL parameters.",
    content: `
Dynamic routing is a technique where routes are not hard-coded for every possible page. Instead, a single route can handle multiple variations of content using parameters such as IDs or slugs.

For example, rather than creating separate routes for each blog post, you can define one route like /posts/:id. The value of the id changes depending on which post the user clicks, and your component can use that value to fetch or display the correct content.

This approach makes your application more scalable and easier to maintain. It is especially useful for blogs, dashboards, user profiles, and e-commerce product pages where the structure is the same but the content changes.
`,
  },

  {
    id: "3",
    title: "Improving Performance with Lazy Loading",
    excerpt:
      "Lazy loading helps reduce initial load time by loading components only when they are needed.",
    content: `
Lazy loading is a performance optimization technique where parts of your application are loaded only when the user actually needs them. In React, this is commonly done using React.lazy and Suspense.

Instead of loading every page at once, you can lazy load routes such as blog details or dashboard pages. This reduces the size of the initial JavaScript bundle and makes the app load faster, especially on slow networks.

When combined with Suspense, you can show a fallback UI like a loading spinner while the component is being fetched. This results in a smoother user experience and better performance overall.
`,
  },

  {
    id: "4",
    title: "Why Error Boundaries Matter in React",
    excerpt:
      "Error Boundaries prevent your entire app from crashing when something goes wrong.",
    content: `
Error Boundaries are special React components designed to catch JavaScript errors that occur during rendering. Without them, a single error in one component can crash the entire application.

By wrapping parts of your app in an Error Boundary, you can display a fallback UI instead of a blank or broken page. This is especially important when working with lazy loaded components or external data sources.

Using Error Boundaries improves the stability and reliability of your application. They allow you to gracefully handle unexpected issues while still keeping the rest of the app functional.
`,
  },

  {
    id: "5",
    title: "Handling 404 Pages in Single Page Applications",
    excerpt:
      "A good 404 page improves user experience when a route does not exist.",
    content: `
In single-page applications, navigation is handled on the client side. This means you must explicitly define what happens when a user visits a route that does not exist.

React Router allows you to define a catch-all route using a wildcard. This route renders a custom 404 page when no other route matches the URL. A well-designed 404 page helps guide users back to valid sections of your app.

Handling 404 errors properly makes your application feel more complete and professional. It also prevents confusion when users accidentally visit invalid or outdated links.
`,
  },
];

export default posts
