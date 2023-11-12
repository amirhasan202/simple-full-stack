import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'

export default function ListTodosComponent()
{ 
    const today = new Date ();
    const targetDate = new Date(today.getFullYear()+12 , today.getMonth() , today.getDay()) 
    const todos = [
                    {id:1 , dscription : 'Learn AWS' , done : false , targetDate:targetDate },
                    {id:2 , dscription : 'Learn Full Stack Dev' , done : false , targetDate:targetDate},
                    {id:3 , dscription : 'Learn DevOps' , done : false , targetDate:targetDate}
                ]

    return (
        <div className="container">
            <h1> Things You Want To Do</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>is Done ?</td>
                            <td>target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                     {
                          todos.map(
                            todo =>(
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.dscription}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
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