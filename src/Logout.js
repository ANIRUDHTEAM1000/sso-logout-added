import React from 'react'
import { useHistory } from 'react-router-dom';
export default function Logout() {
  const history = useHistory();
  const login =()=>{
    history.push("/");    
  }
  return (
    <div className='text-center mt-5'  ><h2>Successfully  logged out</h2>
    <br/>
    <button className='mt-4'  type="button" onClick={(e)=>login(e)}>Login</button>
    </div>
  )
}
