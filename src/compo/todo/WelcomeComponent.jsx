import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'
import axios from 'axios'

export default function WelcomeComponent()
{   
    const {username} = useParams()

    const [message , setMessage] = useState(null)

    console.log(username)
    
    function callHelloWorldRestApi ()
    {
        console.log('called')

        // axios.get('http://localhost:8080/hello-world')
        //     .then((response)=> successfulResponse(response))
        //     .catch((error)=> errorResponse(error))
        //     .finally(()=>console.log('cleanup'))
    }

    function successfulResponse (response)
    {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse (error)
    {
        console.log(error)
    }


    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1> 
            <div>
               Managing Your ToDos - <Link to="/todos"> Go Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}> 
                Call REST API</button>
            </div>
            {/* <div className="text-info" >{message}</div> */}
        </div>
    )
}