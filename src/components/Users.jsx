
import React,{useState} from "react";

const Users=(props)=>{
const[value,setValue]=useState("")

const valueHandler=(event)=>{

    setValue(event.target.value);
};
const submitHandler=(el)=>{

    el.preventDefault();

    const list={

        value: value,
        
        id: Math.random().toString()
    }
    props.onAddTodo(list)
}
    return (
        <div className="todo">
         <form onSubmit={submitHandler} className="form">
            <h1 className="h1">My To Do List</h1>
            <input type="text" value={value} onChange={valueHandler} className="input"/>
            <button className="bt">Todo Add</button>
            
            </form>   
        </div>
    )
}
export default  Users;