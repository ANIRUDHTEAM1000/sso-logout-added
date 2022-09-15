import React from 'react'
import { useHistory } from 'react-router-dom';
function SuccessPage({url}){
  const history = useHistory();
  const logout1=(e)=>{
    var allCookies = document.cookie.split(';');
    e.preventDefault();
    // The "expire" attribute of every cookie is 
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
    for (var i = 0; i < allCookies.length; i++)
      {
        document.cookie = allCookies[i] + "=;expires="
        + new Date(0).toUTCString();
      }
    
        history.push("/logout");    
    
  }
  return (
    <div className='text-center mt-5' style={{color:"green"}} ><h2>Successfully  logged  into  {url}</h2>
    <br/>
    <h2>Cookie  set  Successfully  for  {url}</h2>
    <button className='mt-4'  type="button" onClick={(e)=>logout1(e)}>Logout</button>
    </div>
  )
}

export default SuccessPage