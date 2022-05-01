import React, { useState } from "react";
import Inputlistarea from "./inputlistarea";
import "./inputarea.css";

const Inputarea = () => {
  const [data, setData] = useState("");
  const [datalist, setDatalist] = useState([]);
  const handleSubmit = () => {
      if(data!==""){
          setDatalist((prevdata) => {
            return [...prevdata, data];
          });
          setData("")
      }
      else{
        console.log("hi")
      }
    
  };

  const deleteItem=(id)=>{
    const delte=[...datalist]
    delte.splice(id,1)
    setDatalist(delte) 
  }
  return (
    <>
   <div className="flex">
     <input
        type="text"
        name="name"
        value={data}
        onChange={(event) => {
          setData(event.target.value); 
        }}
      />
      <button onClick={handleSubmit} className="target">Target</button>
     </div>
      <Inputlistarea data={datalist} hi={"hi"} deleteItem={deleteItem}/>
    </>
  );
};

export default Inputarea;
