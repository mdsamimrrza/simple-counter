import{useState} from 'react'
import './App.css';
  function App() {

  let [counter ,setcounter]=useState(0)
    
  const addvalue = () => {
    setcounter(counter + 1)
  }

  const removeValue = () => {
    if(counter>0 ){ 
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <div className="container">
        <h1 className='head1'>counter app</h1>
        <h5 className='head2'>counter value:{counter}</h5>

        <button onClick={addvalue}>add value</button>
        <br />
        <button onClick={removeValue}>remove value</button>
        <p className='foot'>updated value:{counter}</p>
      </div>
    </>
  );
}

export default App;
