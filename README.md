# Introduction:

### What is React:

React is a JavaScript library that helps developers build user interfaces for web applications. It's like a set of tools that make it easier to create interactive and dynamic parts of a website. It is used for Single page applicaation.

1. **Component-Based:**
2. **Easy Updates:**
3. **Virtual DOM Magic:**
4. **Declarative Syntax:**
5. **Reusable Code:**
6. **Community and Libraries:**
7. **Popular and Well-Maintained:**
8. **Works with Other Tools:**
9. **Smooth User Experience:**

# JSX:

JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.

# React Folder Structure:

1. **node_modules:**
   This is where all the project dependencies are installed. it's created and maintained by the package manager.

2. **public:**
   This directory contains static assets that are served. The index.html is the main HTML file that serves as the entry point for your React application.

3. **src**:
   This is where main application code resides.

- **assets:**
  We can place images, fonts, and other static assets here.

- **components:**
  This is where we store our reusable React components. Each component can have its own folder with its related files.

- **pages:**
  This is wherewe organize our different application pages or views. Each page might correspond to a different route in app.

- **App.js:**
  This is often the main component that acts as the root of application. It typically contains the overall structure of app and use for handle routing.

- **index.js:**
  This is the entry point of application. It usually renders the App component into the root DOM element.

4. **package.json**:
   The `package.json` file in Node.js projects is essential, serving as a project manifest with details like name, version, and author. It also lists dependencies—external packages the project needs to work, noted under "dependencies".

5. **package-lock.json**:
   An automatically generated file that stores precise dependency versions and their dependencies to ensure consistency across different environments.

6. **README.md:**
   This is a markdown file where we can provide information about our project, its purpose, and how to set it up.

## React Fragement:

In React, a Fragment is a tool that helps group multiple JSX elements without introducing an extra HTML element in the rendered output. It's used to maintain cleaner code and avoid unnecessary DOM nodes. use the `<Fragment>` component or the shorthand syntax `<>` and `</>` to achieve this.

```jsx
import React, { Fragment } from 'react';

render() {
  return (
    <Fragment>
      <h1>Hemant Basnet</h1>
      <p>Samakhusi</p>
    </Fragment>
  );
}

```

```jsx
render() {
  return (
    <>
      <h1>Hemant Basnet</h1>
      <p>Samakhusi</p>
    </>
  );
}

```

# Component:

A component is like a building block for websites or apps. It's a small, reusable piece that describes how something should look and work. There are two types of Functional and Class Component.

- Reusable:
- Independent:

1. Functional Components:
   Functional Components are JavaScript functions that receive props as input and return JSX to describe what should be rendered on the screen.Example:

```jsx
import React from "react";

const Book = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Book;
```

Advantages:

- Simple and concise syntax.
- Easy to read and write.
- No need to worry about the component lifecycle or managing state.
- Good choice for presentational components and simple logic.

2. Class Components:
   Class Components are JavaScript classes that extend the `React.Component` class. They have been a fundamental part of React since its early versions and offer more features and capabilities compared to functional components.

Example of a class component:

```jsx
import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Book;
```

Advantages:

- Can have more complex internal state using the `this.state` object.
- Full support for component lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`, etc.).
- Better performance optimizations with the `shouldComponentUpdate` method.
- More suitable for components with advanced logic, data fetching, or managing local state.

`Note:In modern React development, functional components using Hooks have become the recommended approach for creating components, while class components are still in use for maintaining legacy codebases or handling specific use cases.
`

# Component With Data Sharing using props:

###### Parent1:

```jsx
import React from "react";
import Button from "./Button";

const Chekcout = () => {
  const checkout = () => {
    alert("This is Checkout");
  };
  return (
    <>
      <Button title="pay" className="btn" action={checkout} />
    </>
  );
};

export default Chekcout;
```

###### Parent2:

```jsx
import React from "react";
import Button from "./Button";
const Home = () => {
  const addPerson = () => {
    alert("My Name is Hemant Basnet");
  };
  return (
    <>
      <div>Home</div>
      <Button title="Click Me" className="button" action={addPerson} />
    </>
  );
};

export default Home;
```

###### child:

```jsx
import React from "react";

const Button = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.action}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
```

# propTypes:

PropTypes is a feature in the React library that allowed developers to specify the types of props that a component should receive. It was used to define what type of data each prop should be, making it easier to catch errors and bugs related to data types at an early stage.

Example:

```jsx
import React from "react";
import PropTypes from "prop-types";

function Person (props) {
  render() {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
Person.defaultProps={
  name:"hemant",
  age:0
}
export default Person;
```

# Ternary Operation:

```jsx
import React from "react";

const Home = ({ isLoggedIn }) => (
  <div>{isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}</div>
);

export default Home;
```

# Component Life Cycel:

1. Initilization:
   This is the stage where the component is constructed with the goven props and default state. THis is done in the constructor of a component class.
2. Mounting:
   Mounting is the stage of rendering the JSX returned by the render method itself.
3. Updating:
   Updating is the stage when the state of a component is updated and the application is repainted
4. Unmounting:
   As the name suggests unmounting is the final step of the component lifecycle where the component lifecycle where the component is removed form the page.

# React Hook:

React Hooks make it easier to manage how things change(state management) and what actions happen in React components. They came around in React 16.8 to replace the older way of using class components and their complicated lifecycle methods.

Key Hooks :

1. `useState`:
   Manages state in functional components by returning the current state and a function to update it.

   ```jsx
   import React, { useState } from "react";
   const Usestate = () => {
     const [count, setCount] = useState(1);
     const increase = () => {
       setCount(count + 1);
     };
     const decrease = () => {
       setCount(count - 1);
     };
     return (
       <>
         <div className="useState">
           <h1>{count}</h1>
           <button className="btn" onClick={increase}>
             Increase
           </button>
           <button className="btn" onClick={decrease}>
             Decrease
           </button>
         </div>
       </>
     );
   };
   export default Usestate;
   ```

2. `useEffect`:
   useEffect is like a tool in React that lets you do special things when your component is shown on the screen or when something in your component changes. It's like having a magic wand that helps you do extra stuff, like fetching new information from the internet, changing the colors of things, or doing other tasks that aren't just showing stuff on the screen. And when you're done using that magic, it can also help you clean up after yourself. It's like having a helper that knows when to start doing things, when to redo them, and when to stop.
   Handles side effects after rendering, replacing lifecycle methods.

   ```jsx
   useEffect(
     () => {
       // Side effect code here
     },
     [
       /* dependencies */
     ]
   );
   ```

3. `useContext`:
   Accesses shared data from parent components.
4. `useReducer`:
   Handles complex state logic using a reducer function.
5. `useCallback` and `useMemo`:
   For the performance optimization of the application
   `Memo` is a tool that helps speed up your app by remembering how a component looks based on its inputs. If the inputs (props) are the same, Memo saves time by not redoing the component's work.This helps your app run faster by avoiding unnecessary work. Just wrap your component with `React.memo()` to use Memo.

   `useCallback` is a React hook that keeps a function from being recreated unless its dependencies change.

6. `useRef`:
   Interacts with DOM elements or holds values across renders.
7. `useLayoutEffect`:
   Similar to `useEffect`, works before browser layout updates.
8. `useImperativeHandle`:
   Exposes functions to parent components.
9. `useDebugValue`:
   Improves debugging in React DevTools for custom hooks.

10. `useDispatche`:
    It allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.

```

```

# Event:

events are actions like clicks or inputs triggered by users. handle them using event handler functions, which you attach to elements like buttons or input fields.

1. **onClick**: Triggered when an element is clicked.
2. **onChange**: Fired when the value of an input changes.
3. **onSubmit**: Used with forms when they're submitted.
4. **onMouseOver**: Occurs when the mouse moves over an element.
5. **onMouseOut**: Happens when the mouse leaves an element.
6. **onFocus**: Fired when an element gains focus.
7. **onBlur**: Occurs when an element loses focus.
8. **onKeyDown**: Triggered when a key is pressed down.

# React Router Dom:

React Router is a library that helps you manage navigation and routing in React applications. It enables to create multi-page-like experiences within a single page, allowing users to navigate between different content without reloading the entire page.

- **BrowserRouter**: A component in React Router that provides routing functionality for app, allowing you to navigate between different "pages" without refreshing the whole page.

```jsx
<BrowserRouter>{/_ Your routes and components _/}</BrowserRouter>
```

- **Route**: A component used to define a route along with the component to render when that route is matched.

```jsx
<Route path="/about" component={AboutComponent} />
```

- **Routes**: A component that holds multiple `Route` components. It's used to define the routes of your application.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

- **Route with Components**: Specifies a route and the component to render when that route is accessed.

- **Link**: A component provided by React Router that's used to create links to different routes in your app.

```jsx
<Link to="/about">Go to About</Link>
```

- **NavLink**: A component similar to `Link`, but with additional features for styling and handling active links.

```jsx
<NavLink to="/about" activeClassName="active-link">
  About
</NavLink>
```

- **isActive**: A function used in conjunction with `NavLink` to determine whether the link should be considered active.

- **No Match URL - 404 Page not Found**: Setting up a "404 Not Found" page to handle routes that don't match any defined routes.

- **Dynamic URL**: Using dynamic segments in your route URLs to handle different types of content.

- **useParams**: A hook that allows you to access the parameters from the current route.

- **useSearchParams**: A hook that gives you access to the query parameters in the URL.

- **Conditional Route**: Defining routes based on certain conditions, like user authentication.

- **Navigate**: A function used for programmatic navigation to different routes.

- **useLocation**: A hook that provides access to the current location (URL) in your app.

- **useNavigate**: A hook that returns the `navigate` function for programmatic navigation.

- **Creating and Running React JS Project**: The process of setting up and running a React JS project.

- **Layout**: Creating a consistent layout for your app, which could include headers, footers, and other common elements.

- **Nested Route**: Defining routes within routes, allowing you to have different components rendered based on nested URLs.

- **Outlet**: A placeholder in your layout where nested routes can be rendered.

- **index**: A special filename that's automatically used when a folder is requested, simplifying nested routing.

- **useRoutes**: A hook that enables you to define your routes in a declarative way using an object structure.

# Context API:

The Context API in React allows to share data or state between components without passing props through each level. It consists of a Context (created using `React.createContext()`) that holds the data and a Provider that wraps your components and provides the data. Components that need the data can use a Consumer to access and use it. This is useful for managing global state, like themes or user authentication, across app more easily.

```jsx
import { createContext, useState } from "react";
import "./App.css";
import Context from "./Context";
const AppState = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("hemant");
  return (
    <>
      <AppState.Provider value={{ count, data }}>
        <Context />
      </AppState.Provider>
    </>
  );
}

export default App;
export { AppState };
```

```jsx
import React, { useContext } from "react";
import { AppState } from "./App";
const Context = () => {
  const appData = useContext(AppState);

  return (
    <>
      <h1>{appData.count}</h1>
      <h1>{appData.data}</h1>
    </>
  );
};

export default Context;
```

# useRef:

`useRef` in React is for:

1. **DOM Interaction:** Accessing and manipulating HTML elements directly.
2. **Preserving Values Without Rerenders:** useRef can hold values that persist between renders without causing the component to re-render. This makes it useful for storing values that you don't want to trigger updates.

# Use Reducer:

`useReducer` in React is a tool for managing state changes in a controlled way. It works by defining actions and corresponding functions that update the state based on those actions. This is useful for handling more complex state logic in app, like in a video game where actions like "take damage" or "level up" affect your character's attributes. It's a step beyond `useState` when your state management needs become more intricate.

```jsx
import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 2;
  } else if (action.type === "DEC") {
    return state - 2;
  } else if (action.type === "MUL") {
    return state * 2;
  } else {
    return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
    </>
  );
};

export default Reducer;
```

# Custome Hook:

Custom hooks in React are like tools create to package and share common code between different parts of app. They make code neater, prevent duplication, and reuse complex logic easily. This leads to better code organization, easier testing, and smoother collaboration among developers.

# React Redux:

React Redux is a library that helps manage state in React apps. It uses Redux principles to create a single, predictable place for data. It connects components to this data store, making state changes clear and manageable. This is great for complex apps where tracking and updating state becomes challenging. State represents the dynamic data that changes as users interact with application.

**The Redux Approach:**
Redux introduces a centralized data store known as the "store," which holds the entire state of application. Instead of letting each component manage its own state, Redux centralizes the state management process. Actions, which are plain JavaScript objects describing events or changes, are dispatched to the Redux store. Reducers then define how the state should change in response to these actions, maintaining a clear and predictable flow of data changes.

**Benefits of React Redux:**

1. **Predictability:** Redux's strict architecture ensures that state changes follow a clear pattern, making it easier to track how data evolves over time.

2. **Debugging:** With a single source of truth and well-defined actions, debugging becomes more straightforward as you can trace the history of state changes.

3. **Scalability:** As your application grows in complexity, Redux offers a scalable solution to state management, maintaining a structured approach.

4. **Consistency:** A consistent pattern for state management simplifies collaboration among developers, ensuring that everyone follows the same guidelines.

5. **Testing:** Redux promotes the use of pure functions for state updates, making it easier to write unit tests for your reducers.

# Redux

**Lifting State:**
When multiple components must share or sync state, "lifting state" moves data from a child component to a higher parent. This helps when several child components need the same data or a common ancestor controls state. Lifting state ensures consistent updates across dependent components.

Example: If a parent component has two child components that need the same data, move the data to the parent. Then, pass it as props to the children, managing changes at the parent level.

**Props Drilling:**
React uses props to send data from parent to child components. But "props drilling" happens when passing props through several nested components to reach a deep child component that needs the data. This can make code less manageable, complicate data flow, and lead to performance problems from unnecessary re-renders.

`For Removing Lifting State and Props Drilling we used redux helps to manage state easi;y`

## Introduction:

React Redux is a library that helps manage state in React apps. It uses Redux principles to create a single, predictable place for data. It connects components to this data store, making state changes clear and manageable. This is great for complex apps where tracking and updating state becomes challenging. State represents the dynamic data that changes as users interact with application.

**The Redux Approach:**
Redux introduces a centralized data store known as the "store," which holds the entire state of application. Instead of letting each component manage its own state, Redux centralizes the state management process. Actions, which are plain JavaScript objects describing events or changes, are dispatched to the Redux store. Reducers then define how the state should change in response to these actions, maintaining a clear and predictable flow of data changes.

To solve this, consider using the Context API for global state, state management libraries like Redux or MobX, or restructuring components to minimize the need for props drilling.

## When to use Redux:

- Big Application
- High frequency of State Changes

## Redux Principle:

The three main principles of Redux are:

1. Single Source of Truth
2. State is Read-Only and Immutable
3. Changes are Made with Pure Functions

## Redux Pattern:

The key concepts of the Redux pattern:

1. **Store:** The store is a JavaScript object that holds the application's entire state. It's read-only, and the only way to change the state is by dispatching actions.

2. **Actions:** Actions are plain JavaScript objects that represent events or intentions to change the state. They have a `type` property that describes the action and may also include additional data.

3. **Reducers:** Reducers are pure functions that take the current state and an action, and return a new state. They define how the state changes in response to actions.

4. **Dispatch:** Dispatching an action is the process of sending an action to the store, which triggers the state to be updated based on the reducer's logic.

5. **Selectors:** Selectors are functions used to extract specific pieces of data from the state.

The Redux pattern promotes separation of concerns and helps manage complex state interactions in applications.

The Redux store provides key functions for managing state in application:

1. **`getState()`:** Retrieves the current state.

2. **`dispatch(action)`:** Sends actions to update state.

3. **`subscribe(listener)`:** Listens for state changes.

These functions enable controlled state management and interaction with the Redux store.

## Redux Middlewares:

Redux middlewares are functions that intercept actions before they reach the reducer and allow to add extra functionality to the Redux dispatch process. Middlewares are useful for handling asynchronous actions, logging, routing, and more. They sit between the action dispatch and the reducer, giving you the opportunity to modify, delay, or even cancel actions.

A common use case for middleware is handling asynchronous operations like making API requests. Redux itself is synchronous, but with a middleware like `redux-thunk` or `redux-saga`, you can dispatch asynchronous actions that eventually dispatch regular synchronous actions once the asynchronous operation is complete.

Middleware provides a powerful way to extend the capabilities of Redux and handle various aspects of application behavior beyond simple state management.

## React- Redux:

React Redux is a library that seamlessly connects Redux, a state management tool, with React applications.

### useSelector Hook:

The useSelector hook in React Redux allows functional components to access specific data from the Redux store. It automatically subscribes to changes in that data and triggers re-renders when it updates.

### useDispatch Hook:

The useDispatch hook gives functional components access to the Redux dispatch function, which sends actions to update the store's state.

## Redux toolkit:

Redux Toolkit is a toolbox that simplifies state management in Redux-based apps. It was created by the Redux team to tackle common development challenges. Key features:

1. **Easy Setup**: `configureStore()` sets up a store with good defaults, including debugging tools.

2. **Less Repetition**: `createSlice` and `createAsyncThunk` cut down redundant code when defining actions and reducers.

3. **Immutability Made Simple**: Redux Toolkit uses `immer` for easier state updates.

4. **Async Made Easy**: `createAsyncThunk` simplifies handling async actions like API calls.

5. **Normalized Data**: Tools like `createEntityAdapter` help manage complex state structures.

6. **Type Safety**: Redux Toolkit promotes TypeScript for catching type-related errors.

7. **Effortless Debugging**: Built-in Redux DevTools support for monitoring state changes.

To use Redux Toolkit, install it via `npm install @reduxjs/toolkit`, then leverage tools like `createSlice` and `createAsyncThunk` to enhance Redux development and reduce boilerplate code.

### createSlice:

createSlice is a function provided by Redux Toolkit that helps define a set of actions, reducers, and action creators for a specific slice of Redux state. It reduces the amount of boilerplate code you need to write when defining these components. This function generates action types, action creators, and a reducer automatically based on the provided configuration.

### extra Reducer:

extraReducer is an optional property that can include when using createSlice. It allows to define additional reducers that respond to actions generated by other slices. This is useful for handling actions that affect multiple parts of state or actions that need to interact with the state managed by different slices.

### createAsyncThunk:

createAsyncThunk is another utility provided by Redux Toolkit that simplifies the process of handling asynchronous actions in Redux. It generates action creators for asynchronous operations like fetching data from an API.
