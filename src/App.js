import React, {useState} from 'react';
import './App.css';
import Users from './components/Users';
import TodoItem from "./components/TodoItem";
const App=()=>{

  const[list,setList]=useState([])

  const addTodo=(Data)=>{

setList((prevState)=>{

  return[...prevState,Data]

})
  }
  const deleteListHandler = (id)=> {
  setList(list.filter((elem) => {
    if(elem.id !== id) {
      return []
    }
  }))
  }
  return (
    <div>
      <Users onAddTodo={addTodo}/>
      <TodoItem onDeleteList={deleteListHandler} items={list}/>
    </div>
  )
}

export default App;
