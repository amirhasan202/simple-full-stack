import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'

export default function LogoutComponent()
{
    return (
        <div className="logoutComponent">
            <h1>You are logged out</h1>
            <div>
                Thank You For Using Our App
            </div>
        </div>
    )
}