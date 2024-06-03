# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- Props In React -->
<!-- props = read-only properties that are shared between components.
A parent component can send data to a child component.
<Component key=value /> -->

<!-- propTypes = a mechanism that ensures that the passed value is of correct datatype.
age: PropTypes.number -->

<!-- defaultProps = default values for props in case they are not passed from the parent component
name: "Guest"  -->

<!-- 5. Conditional Rendering = allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components) -->




// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]

// useState() = A React hook that allows the creation of a stateful variable.
useStateHook: useState is a React Hook that allows functional components to manage state. It returns an array with the current state value and a function to update it.

useRefHook: useRef returns a mutable ref object whose current property is initialized to the passed argument(initialValue). The returned object will persist for the full lifetime of the component.

useEffectHook: useEffect is a Hook that lets you perform side effects in function components. It returns fter every render and can perform cleanup

createContext and UseContextHook: createContext creates a Context object, which is passed as an argument to useContext Hook to access the value of the Context 





