import { ToDoItem } from "./ToDoItem"


export function ToDoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
        {/* short circuting */}
        {todos.length ===0 && "No Todos"}
  
        {todos.map(todo=>{

            // id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}
            //qikjo komplet mundet me u zevendesu me ...todo
          return(
          <ToDoItem  {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )
        })}
  
  
      </ul>
    )   
}