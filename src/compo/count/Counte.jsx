import { useState } from 'react';
import './Counte.css'

export default function Counter (){
   
    

    const spanStyle = {
        fontSize: "100px",
        padding: "20px"
        };
        
    const [count , setCount] = useState(0);
    function incrementCounterFunction () 
    {
        setCount(count + 1)
        console.log(count)
    }
    
    
    return (
        <div className="Counter">
            <span className="count" style = {spanStyle} > {count} </span>
            <div>
                <button 
                        className="counterButton"
                        onClick={incrementCounterFunction}
                        //style = {buttonStyle}
                        >+1
                        
                </button>
            </div>
        
        </div>
    )
}