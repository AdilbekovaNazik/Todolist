import React from "react";
 const TodoItem=(props)=>{
    return (
        <div>
            <ul>
                {props.items.map((elem)=>{
                  return <li key={elem.id} className="li">{elem.value} <button onClick={() => props.onDeleteList(elem.id)} className="bt-list">delete</button></li> 
                })}
            </ul>

        </div>
    )
 }
 export default TodoItem;
