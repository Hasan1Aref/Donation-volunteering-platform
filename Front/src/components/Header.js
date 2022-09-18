
import React, { useContext } from 'react';
import SessionContext from './session/SessionContext';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar'




export default function Header() {


  const {
    session: { user: { access_token, role } },
    actions: { logout }
  } = useContext(SessionContext);


  return (
    <>
  <NavBar/>
   </>

         
           
          
         
      

  )
 
}

