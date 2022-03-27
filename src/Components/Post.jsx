import { useParams } from "react-router-dom";
import React, { Fragment , useState,useEffect } from "react";
import axios from "axios";

function Post(props) {
  console.log(props.name)
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  let params = useParams();

useEffect(()  => {
  axios.get('http://localhost/practice/apilogin/public/api/post/'+params.id)
  .then(function (response) {
    setTitle(response.data.title)
    setContent(response.data.content)
  }) 
},[params]); 

  return (
    <Fragment>
      <div>
        <b>title</b>:<b>{title}</b><br></br>
        <b>content</b>:{content}
      </div>
    </Fragment>
  );
};

export default Post;
