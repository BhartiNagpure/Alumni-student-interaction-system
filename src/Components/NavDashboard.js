import React from 'react'
import './Navbar.css'
import { logOut } from '../Firebase';
import { useNavigate } from 'react-router-dom';



function NavDashboard() {

  const navigate = useNavigate();

  const handleLogOut = async() => {
    try{
      await logOut();
      alert('Logged out Successfully!!!')
      navigate('/')
    }
    catch(error){
      alert(error.message);
    }
  }

    const mystyle = {
        marginLeft:'600px'
     }

  return (
      <>
    <div>
        <div id='navbar'>
        <img  src="https://img.collegedekhocdn.com/media/img/institute/logo/1665457.png" alt="" />
         <div id='navLogOut'>
         <button className='btn' onClick={handleLogOut}>LogOut</button>
       
         </div>
        </div>
        
    </div>
    </>
    
  )
}

export default NavDashboard