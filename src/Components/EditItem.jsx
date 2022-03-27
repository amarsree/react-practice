import React, {  useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function EditItem(props) {
  console.log(props)
  const [count, setCount] = useState(null);
  const [data, setData] = useState(null);
  let params = useParams();
 

function increment(){
  setCount(count+1)
}
function decrement(){
  setCount(count-1)
}
 
 useEffect(() => {
  axios.get('http://localhost/practice/apilogin/public/api/post/'+params.id)
  .then(function (response) {
   // console.log(response)
  })
},[]);


  return (
    <div>
      {count}
      <button onClick={increment} >inc </button>
      <button onClick={decrement} >dec </button>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
      <TextField  variant="outlined" />
      <TextField variant="outlined" />
      
    </Box>
    </div>
  )
}

export default EditItem