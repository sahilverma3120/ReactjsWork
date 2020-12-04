import React, { useState } from 'react';
const App = () => {
  let newTime = new Date().toLocaleTimeString();
 const[ctime,sectime] = useState(newTime);

 const UpdateTime = () =>{
  let newCTime = new Date().toLocaleTimeString();
sectime(newCTime);
}
 return(
    <>
    <h1>{ctime}</h1>
    <button onClick = {UpdateTime}>get time</button>
    </>
  )
 }
export default App;