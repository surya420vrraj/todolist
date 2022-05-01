import React from "react";
import "./inputlistarea.css";
import { FaTrash } from "react-icons/fa";


const Inputlistarea = ({ data,  deleteItem }) => {
  return (
    <>
    <div className="mainlist">
      {data
        ? data.map((item, i) => {
            return (
              <div key={i} className="inputlist">
                <p className="para">{item}</p>
                <span className="trash"><FaTrash onClick={() => deleteItem(i)}/></span>
              </div>
            );
          })
        : "no"}
    </div>
    </>
    
  );
};

export default Inputlistarea;
