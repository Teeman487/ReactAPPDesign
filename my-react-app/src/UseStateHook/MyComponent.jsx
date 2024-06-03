import {useState} from 'react';

// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable

//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]


function MyComponent(){

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  
  const updateName = () => {
      setName("Toheeb");
  }
  // const handleClick = (e) => e.target.style.display = "none";
// return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
  const incrementAge = () => {
      setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
      setIsEmployed(!isEmployed);
  }

  return( <div>
              <p>Name: {name}</p>
              <button onClick={updateName}>Set Name</button>

              <p>Age: {age}</p>
              <button onClick={incrementAge}>Increment Age</button>

              <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
              <button onClick={toggleEmployedStatus}>Toggle Status</button>
          </div>);
}
export default MyComponent