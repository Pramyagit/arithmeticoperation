import './App.css';
import React,{useState} from 'react';

function App() {
   const [first,setFirst]=useState('');
    const [second,setSecond]=useState('');
    const [total,setTotal]=useState([]);
    const [sub,setSub]=useState([]);
    const [mul,setMul]=useState([]);
    const [div,setDiv]=useState([]);
// const no1=document.getElementById('no1');
// const no2=document.getElementById('no2');

function addition(){

setTotal(first + second);
alert("Addition:"+total)
}
function subraction(){

  setSub(first - second);

  alert("Subraction:"+sub)
  }
  function multiplication(){

    setMul(first * second);
    
    alert("Multiplication:"+mul)
    }
    function division(){

      setDiv(first / second);
    
      alert("Division:"+div)
      }
            
// console.log(); 


  return (
    <div className="App">
      <header className="App-header">
        <h2>ARITHMETIC OPERATION</h2>
       <label Forhtml="no2">Number 1</label>
       <input  type="text" id="no1"   value={first} onChange={(e)=>setFirst(+e.target.value)}/>
         <label Forhtml="no2">Number 2</label>
         <input type="text" id="no2" value={second} onChange={(e)=>setSecond(+e.target.value)} />
         <div className="btn">
         <button onClick={addition}>ADD</button>
         <button onClick={subraction}>SUB</button>
         <button onClick={multiplication}>MUL</button>
         <button onClick={division}>DIV</button>
         </div>
      </header>
    </div>
  );
}

export default App;
