import React, { useState } from "react";
import "./App.css";
import List from "./List";

const App = () => {
  const [inputList, setInputList] = useState("hello");
  const [Items, setItems] = useState([]);
  const itemStore = (event) => {
    setInputList(event.target.value);
  };

  const appendList = () => {
    setItems((preValue) => {
      return [...preValue, inputList];
    });
    setInputList("");
  };

  const deleteItem =(id)=>{
    console.log("item deleted")
    setItems((preValue)=>{
      return preValue.filter((arrElem,index)=>{
        return id!==index;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <div className="input_div">
            <input
              type="text"
              value={inputList}
              placeholder="Add Item"
              onChange={itemStore}
            />
            <button onClick={appendList}> + </button>
          </div>
          <ol>
            {Items.map((val, index) => {
              return (
                <List key={index} id={index} text={val} onSelect={deleteItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
