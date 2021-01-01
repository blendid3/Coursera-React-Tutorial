import logo from './logo.svg';
import './App.css';

import TodoList from "./TodoList";
const details = {
  header: "Todoifier",
  headerColor: "red"
 };
 
 const moreDetails = {
  ...details,
  header: "Best Todoifier",
  background: "black"
 };

 const header = ({
  header: title = "Todo List",
  headerColor: color = "blue",
  background: background = "none"
 }) => <h2 style={{ color: color, background: background }}>{title}</h2>;

const [item1, item2, ...rest] = [
  "Write some code",
  "Change the world",
  "Take a nap",
  "Eat a cookie"
];



const App = () => (
  <div className="App">

    {header(moreDetails)}
    
    <br />

    <TodoList />
  </div>
);

export default App;
