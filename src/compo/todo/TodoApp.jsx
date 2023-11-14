
import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter , Routes , Route , useNavigate , useParams, Link} from 'react-router-dom'
import ErrorComponent from '../todo/ErrorComponent'
import FooterComponent from '../todo/FooterComponent'
import HeaderComponent from '../todo/HeaderComponent'
import ListTodosComponent from'../todo/ListTodosComponent'
import LoginComponent from '../todo/LoginComponent'
import LogoutComponent from'../todo/LogoutComponent'
import WelcomeComponent from '../todo/WelcomeComponent'
import Authprovider from './security/AuthContext'
import Todo from './TodoComponent'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <Authprovider>
                <BrowserRouter>
                    <HeaderComponent/>
                        <Routes>
                            <Route path='/' element = {<LoginComponent />}/>
                            <Route path='/login' element = {<LoginComponent />}/>
                            <Route path='/welcome/:username' element = {<WelcomeComponent/>}/>
                            <Route path='/todos' element = {<ListTodosComponent/>}/>
                            <Route path='/logout' element = {<LogoutComponent/>}/>
                            <Route path='/*' element = {<ErrorComponent/>}/>
                            <Route path='/Todo/:id' element = {<Todo/>}/>
                        </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </Authprovider>
             
        </div>
    )
}














