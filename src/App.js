import logo from './logo.svg';
import './App.css';
import Counter from './compo/count/Counte';
import TodoApp from './compo/todo/TodoApp'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TodoApp/>
      
      
    </div>
  );
}

// function FirstComponent()
// {
//   return (

//     <div className='FirstComponent'>
//       <header className="App-header">FirstComponent
//       <img src={logo} className="App-logo" alt="logo" />
      
//       </header>
//     </div>
//   )    
// }



export default App;
