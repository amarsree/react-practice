import React, {  useState } from "react";
import axios from "axios";
import {
  useNavigate
} from "react-router-dom";


function AddList() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    let navigate = useNavigate();
 
function titleChange(e) {
    setTitle(e.target.value)
}

function contentChange(e) {
    setContent(e.target.value)
}

function submitHandler(e) {
    var formData = {
        title: title,
        content: content,
    };
    axios.post('http://localhost/practice/apilogin/public/api/post', formData)
      .then(function (response) {
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error.errors);
      })
   // e.preventDefault;
}

  return (
    <div>
        <p>title</p>
       <input type='text' value={title} name="title" onChange={titleChange}  ></input>
    <br></br>
       <p>content</p>
       <input type="text" value={content}  onChange={contentChange} ></input>
       <input type="submit" onClick={submitHandler} ></input>
       
    </div>
  )
}

export default AddList