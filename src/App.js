import Post from "./Components/Post";
//import PostLists from "./Components/PostLists";
import AddList from "./Components/AddList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import EditItem from "./Components/EditItem";
import Home from "./Components/Home";
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function PostLists(props) {
  console.log(props.name)
  return <h1>Hello, {props.name}</h1>;
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


function App(props) {
return (
<div>
  <div className="App">
  <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="welcome" name="welcom" element={<Welcome/>}/>
        <Route path="list" name="PostLists" element={<PostLists />}/>
        <Route path="item/:id" element={<Post />}/>
        <Route path="add-item" element={<AddList/>}/>
        <Route path="edit/:id" name="ava" element={<EditItem />}/>
      </Routes>
    <Footer></Footer>
  </BrowserRouter>
  </div>

</div>
);
}

export default App;
