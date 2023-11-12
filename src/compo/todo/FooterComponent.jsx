import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'

export default function FooterComponent()
{
    return (
        <footer className="footer">
           <div className="container">
                Your Footer 
           </div>
            <hr/> 
        </footer>
    )
}
