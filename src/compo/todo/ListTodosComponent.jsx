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
    
    const navigate = useNavigate()
 
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
        .then(()=> {
                    setMessage(`Delete of todo with ID : ${id} successfuly Done`)
                    refreshTodos()           
           }
        )
  }




  function updateTodo(id)
  {
     console.log('Up clicked'+id)

     navigate(`/Todo/${id}`)
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
                            <th>Update</th>
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
                                    <td>
                                        <button className="btn btn-warning" onClick={ () => deleteTodo(todo.id)}>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={ () => updateTodo(todo.id)}>
                                            Update
                                        </button>
                                    </td>

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