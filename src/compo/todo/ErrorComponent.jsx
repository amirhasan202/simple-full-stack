import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'


export default function ErrorComponent()
{
    return (
        <div className="ErrorComponent">
            <h1> We Are Working Very Hard</h1>
            <div>sorry for our delay</div>
        </div>
    )
}
