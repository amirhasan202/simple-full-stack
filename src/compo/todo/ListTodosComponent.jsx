import { useEffect, useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from './TodoApiServices';

export default function ListTodosComponent()
{ 
    const today = new Date ();
    const targetDate = new Date(today.getFullYear()+12 , today.getMonth() , today.getDay()) 
    
    const [todos , setTodos] = useState([])
    const [message , setMessage] = useState(null)
    
  //  const todos = [
                    // {id:1 , dscription : 'Learn AWS' , done : false , targetDate:targetDate },
                    // {id:2 , dscription : 'Learn Full Stack Dev' , done : false , targetDate:targetDate},
                    // {id:3 , dscription : 'Learn DevOps' , done : false , targetDate:targetDate}
  //              ]

  useEffect (
    ()=> refreshTodos()
  )


  function refreshTodos()
  {
     retrieveAllTodosForUsernameApi('in28minutes')
       .then(response => {
         setTodos(response.data)   
       })
  }

  function deleteTodo(id)
  {
    console.log('clicked'+id)
    deleteTodoApi('in28minutes' , id)
        .then(
            //1: message
           ()=> {
                    setMessage(`Delete of todo with ID : ${id} successfuly Done`)
                    refreshTodos()           
           }
            //2:update to do

        )
  }
    return (
        <div className="container">
            <h1> Things You Want To Do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>is Done ?</th>
                            <th>target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                          todos.map(
                            todo =>(
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetdate.toString()}</td> 
                                    <th>
                                        <button className="btn btn-warning" onClick={ () => deleteTodo(todo.id)}>
                                            Delete
                                        </button>
                                    </th>
                                 </tr>
                            )
                          )               
                     }
                     </tbody>
                </table>
            </div>
        </div>
    )
}