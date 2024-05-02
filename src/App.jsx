import { useEffect, useState } from "react"
import { NewToDoForm } from "./NewTodoForm";
import { ToDoList } from "./ToDoList";
import "./styles.css"


export default function App(){

 
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue);
  });

  //me e kriju si ni mini databaze qe mos me na u fshi te dhenat e perdorim useEffect
  //sa her qe bohet render i kthen qato te dhena qe i rujm ne todos.
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])


  //qit function e thrrasim te komponenti qe e krijum
  function addToDo(title){
    // cdo her qe na vyn the current value duhmi permes ni funksioni
        setTodos(currentTodos=>{
          return[
            ...currentTodos,
            {id:crypto.randomUUID(), title, completed:false},
            
          ]
        })
  }


  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return{...todo,completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }


  
  return (

    <>    
    <NewToDoForm onLindi={addToDo}/>

    

    <h1 className="header">Todo List</h1>

    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

    </>


  )
}