import {  useNavigate, useParams } from "react-router-dom"
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./TodoApiServices"
import { useEffect, useState } from "react"
import { Field,Form, Formik } from "formik"

export default function Todocomponent ()
{

    const {id} = useParams()

    // const authContext = useAuth()
    
    // const username = authContext.username

    const [description , setDescription]=useState('')

    const [targetdate , setTargetDate]=useState('')

    useEffect(
        () => retrieveTodos() 
        , [id]
    )

    const navigate = useNavigate()

    function retrieveTodos()
    {
        if (id != -1)
        {
            retrieveTodoApi('in28minutes' , id)
                .then(response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetdate)
                })
                .catch(error => console.log(error))
        }
    }

    function onSubmit (values){
        console.log(values)
        const todo = {
            id : id,
            username : 'in28minutes',
            description : values.description,
            targetdate : values.targetdate,
            done : false
        }

        console.log(todo)

        if(id==-1)
        {
            createTodoApi('in28minutes', todo)
                .then(response => {
                    navigate('/todos')
                })
                .catch(error => console.log(error))
        }
        else
        {
            updateTodoApi('in28minutes', id ,todo)
                 .then(response => {
                     navigate('/todos')

                 })
                .catch(error => console.log(error))
        }
    }




    return (
        <div className="container"> 
            <h1> Enter Your Todo Details HERE </h1>
            <div>
                <Formik initialValues={ {description , targetdate} }
                     enableReinitialize={true}
                     onSubmit={onSubmit}
                     >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset> 

                               <fieldset className="form-group">
                                    <label>TargetDate</label>
                                    <Field type="date" className="form-control" name="targetdate" />
                                </fieldset> 
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>

    )
}