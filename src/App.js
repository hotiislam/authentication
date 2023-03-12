import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import login from './login.png'
import swal from 'sweetalert'
import React, { useState } from 'react'
function App() {

  const [user,setUser] =useState('')
  const [pass,setPass] =useState('')

  const handleValidate = (e)=>{
    e.preventDefault()
    if(user == 'reactjs12@gmail.com' && pass == 123456)
        swal("Successful Login","Welcome ReactJS","success")
    else 
        swal("Wrong Credentials","Please try again", "error")
  }
  return (
    <div className="App-header">
     <h1>Authentication Portal</h1>
     <div className="row">
      <div className="col-md-6">
        <img className="float-right" src={login} width="300"/>
      </div>
      <div className="col-md-6 my-auto bg-dark p-5 rounded">
      <form onSubmit={handleValidate}>
         <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" value={user} class="form-control" placeholder="Enter Email" onChange={(e)=>setUser(e.target.value)} />
          </div>
          <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" value={pass} className="form-control" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
     </div>
    </div>
  );
}

export default App;
