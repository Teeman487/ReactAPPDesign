import ToDoList from './ReactToDoListApp/ToDoList.jsx';

// import MyComponent from './UpdateArrayObjects/MyComponent.jsx'

// import MyComponent from './UpdateArrays/MyComponent.jsx'

// import MyComponent from './UpdateObjects/MyComponent.jsx'

// import MyComponent from './ReactUpdaterFunctions/MyComponent.jsx'

// import MyComponent from './ColorPickerAPP/ColorPicker.jsx'
// import MyComponent from './OnchangeEventHandler/MyComponent.jsx'
// import MyComponent from './UseStateHook/MyComponent.jsx'
// import Counter from './UserStateHook/Counter.jsx'

function App() {

    return(

     <ToDoList />
     // <MyComponent /> 
     // <Counter/>
    );
}
export default App








// import Button from './ClickEvents/Button.jsx'
// import ProfilePicture from './ClickEvents/ProfilePicture.jsx'

// function App() {

//     return( <>
//                  <Button />
//                  <ProfilePicture />
//                </>);
// }
// export default App
















// import List from "./List.jsx";

// function App() {

//      const fruits = [{id: 1, name: "apple", calories: 95}, 
//                               {id: 2, name: "orange", calories: 45}, 
//                               {id: 3, name: "banana", calories: 105}, 
//                               {id: 4, name: "coconut", calories: 159}, 
//                               {id: 5, name: "pineapple", calories: 37}];
 
//      const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
//                                         {id: 7, name: "celery", calories: 15}, 
//                                         {id: 8, name: "carrots", calories: 25}, 
//                                         {id: 9, name: "corn", calories: 63}, 
//                                         {id: 10, name: "broccoli", calories: 50}];
 
//      return( <>
//                      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//                      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
//                  </>);
//  }
 
//  export default App
 
//  function List(props){

//      const category = props.category;
//      const itemList = props.items;
 
//      //itemList.sort((a, b) => a.name.localeCompare(b.name)); // SORT ALPHABETICAL
//      //itemList.sort((a, b) => a.calories - b.calories); // SORT BY CALORIES
//      //const lowCalItem = itemList.filter(item => item.calories < 100); // FILTER LOW CALORIES
//      //const highCalItem = itemList.filter(item => item.calories >= 100); // FILTER HIGH CALORIES
 
//      const listItems = itemList.map(item =>  <li key={item.id}>
//                                                                            {item.name}: &nbsp;
//                                                                            <b>{item.calories}</b></li>);
     
//      return( <>
//                      <h3 className="list-category">{category}</h3>
//                      <ol className="list-items">{listItems}</ol>
//                  </>);
//  }
//  List.propTypes = {
//      category: PropTypes.string,
//      items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
//                                                                                         name: PropTypes.string,
//                                                                                         calories: PropTypes.number})),
//  }
//  List.defaultProps = {
//      category: "Category",
//      items: [],
//  }
//  export default List






















// import UserGreeting from "./UserGreeting";


// function App() {
//      return(
//         <>
//           <UserGreeting isLoggedIn={true}  />
//         </>
//      );
// }
// export default App




// import Student from './Student.jsx'

// function App() {
//      return(
//       <>
//          <Student name="Rofiat" age={25} isStudent={true}/>
//          <Student name="Adewunmi" age={3} isStudent={false}/>
//          <Student name="AbdulRahman" age={0} isStudent={false}/>
//          <Student name="Toheeb" age={25} isStudent={true}/>
//          <Student/>
//       </>
        
//      );
// }
// export default App
