import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'

export default function LoginComponent()
{
    const [username , setUsername]= useState ('in28Minutes')

    const [showSuccessMessage , setShowSuccessMessages]= useState (false)

    const [showErrorMessage , setShowErrorMessages]= useState (false)

    const [password , setPassword]= useState ('123456')

    const navigate = useNavigate();

    function handleUsernameChange (event)
    {
       console.log(event.target.value);
       setUsername(event.target.value);
    }

  

    function handlePasswordChange (event)
    {
       console.log(event.target.value);
       setPassword(event.target.value);
    }

    function handleSubmit()
    {
       if (username==='in28Minutes' && password==='dummy'){
            console.log('Success')
            setShowSuccessMessages(true)
            setShowErrorMessages(false)
            navigate(`/welcome/${username}`)
        }else{
            console.log('Failed')
            setShowSuccessMessages(false)
            setShowErrorMessages(true)
        }
    }

   
    return (
        <div className="Login">
            
            {showSuccessMessage && <div className="succesMessag">Authenticated Successfully</div> }
            {showErrorMessage && <div className="errorMessage">Authentication Failed.Please Check your Info</div>}
            <div className="LoginForm">
                <div>
                    <label> UserName : </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="Login" onClick={handleSubmit} >Login </button>
                </div>
            </div>
          </div>
    )
}